import React from 'react';
import { View, Text, Image, TouchableOpacity, StyleSheet, FlatList } from 'react-native';
import StudentItemsGet from './StudentItemsGet';
import PropTypes from 'prop-types'

const propTypes = {
    item: PropTypes.object
}

class StudentsGet extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            isSelected: false,
            navigation: this.props.navigation,
            loading: true,
            dataSiswa: [],
            selectedSiswa: [],
            testing: ""
        }
        this.updateState = this.updateState.bind(this)
        this.onClick = this.onClick.bind(this)
    }

    componentWillUnmount() {
        this.props.onRef(null)
    }

    onClick(){
        console.warn(this.state.testing)
    };

    updateState(data,proc) {
        this.props.updateParent(data,proc)
    }

    componentDidMount() {
        this.props.onRef(this)
        var siswa = this.props.item.siswa;
        if(siswa!=null) {
            var data = [];
            siswa.map((item)=>{
                data.push({
                    id: item.id,
                    nama: item.nama,
                    foto: item.foto,
                    selected: false
                })
            })
            this.setState({dataSiswa:data})
        }
    }

    _renderStudents = () => ( <StudentItemsGet updateState={this.updateState.bind(this)} item={this.state.dataSiswa} navigation={this.state.navigation} /> );

    _collapsibleProc = () => {
        this.setState((prevState,prevProps) => ({
            isSelected: !prevState.isSelected
        }))
    }

    render() {
        const {isSelected} = this.state
        return (
            <View style={styles.container}>
                <TouchableOpacity onPress={this._collapsibleProc}>
                    <View style={{justifyContent:'center'}}>
                        <View style={{borderBottomColor:'#707070',borderBottomWidth:0.3,marginLeft:20,marginRight:20,marginTop:30}}>
                            <Text style={{color:'#B08485',fontSize:14,marginBottom:5,marginLeft:15}}>{this.props.item.kelas}</Text>
                        </View>
                    </View>
                </TouchableOpacity>
                {isSelected && this._renderStudents()}
            </View>
        );
    }
}

StudentsGet.propTypes = propTypes;

const styles = StyleSheet.create({
    container: {
        flex: 1
    }
});

export default StudentsGet;
