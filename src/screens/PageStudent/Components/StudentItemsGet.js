import React from 'react';
import { View, Text, Image, TouchableWithoutFeedback, StyleSheet, TouchableOpacity } from 'react-native';
import PropTypes from 'prop-types'
import { FlatList } from 'react-native-gesture-handler';
var srcAvatar = require('../../../images/studentexample.png');

const propTypes = {
    item: PropTypes.array
}

class StudentItemsGet extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            dataSiswa: []
        }
    }

    componentDidMount() {
        var siswa = this.props.item;
        var data = [];
        if(siswa.length > 0) {
            siswa.map((item)=>{
                data.push({
                    id: item.id,
                    nama: item.nama,
                    foto: item.foto,
                    selected: false
                })
            })
        }
        this.setState({dataSiswa:data})
    }

    updateParentState(data,proc) {
        this.props.updateState(data,proc);
    }

    _selectProcess(index)
    {
        // this.state.dataSiswa.map(( item ) =>
        // {
        //     item.selected = false;
        // });
        
        if(this.state.dataSiswa[index].selected == true) {
            this.state.dataSiswa[index].selected = false;
            this.updateParentState(this.state.dataSiswa[index],"remove");
        }else {
            this.state.dataSiswa[index].selected = true;
            this.updateParentState(this.state.dataSiswa[index],"add");
        }

        this.setState({ dataSiswa: this.state.dataSiswa }, () =>
        {
            // this.setState({ selectedItem: this.state.radioItems[index].label, selectedId: this.state.radioItems[index].id });
        });
    }

    _renderItem = ({item,index}) => (
        <TouchableOpacity 
            onPress={()=>this._selectProcess(index)}
        >
                <View style={{flexDirection:'row',borderBottomColor:"#707070",borderBottomWidth:0.1,alignItems:'center',marginTop:15,paddingBottom:10}}>
                    <Image source={{uri:item.foto}} style={[(item.selected)?styles.selectedItem:styles.unselectedItem,{width:50,height:50,marginLeft:30,borderRadius:25}]}></Image>
                <Text style={{color:"#2E313C",fontSize:13,marginLeft:10}}>{item.nama}</Text>
            </View>
        </TouchableOpacity>
    );

    render() {
        return (
            <View style={styles.container}>
                <TouchableWithoutFeedback>
                    <View style={{justifyContent:'center'}}>
                        <FlatList
                            showsVerticalScrollIndicator={false}
                            data={this.state.dataSiswa}
                            renderItem={this._renderItem}
                            keyExtractor={(item, index) => item.id+""}
                        />
                    </View>
                </TouchableWithoutFeedback>
            </View>
        );
    }
}

StudentItemsGet.propTypes = propTypes;

const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    selectedItem: {
        borderColor: '#FFC77E',
        borderWidth: 3,
    },
    unselectedItem: {
        borderWidth: 0
    }
});

export default StudentItemsGet;
