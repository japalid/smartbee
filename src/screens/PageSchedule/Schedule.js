import React from "react";
import { View, ImageBackground, StyleSheet, Image, Text, Platform } from "react-native";
import { Button, FormLabel, FormInput } from "react-native-elements";
import { ScrollView } from "react-native-gesture-handler";
import { Calendar, CalendarList, Agenda } from 'react-native-calendars';

class Schedule extends React.Component {

  static navigationOptions = {
    header: null ,
  };

  constructor(props) {
    super(props);
  }

  componentDidMount() {
  }

  signUp() {
    this.props.navigation.push('SignUp');
  }

  render() {
    return (
      <ScrollView 
      showsHorizontalScrollIndicator={false}
      >
        <View style={styles.container}>
            <CalendarList
              theme={{
                'stylesheet.calendar.header': {
                  
                }
              }}
                // Initially visible month. Default = Date()
                current={'2012-03-01'}
                // Minimum date that can be selected, dates before minDate will be grayed out. Default = undefined
                // minDate={'2012-05-10'}
                // Maximum date that can be selected, dates after maxDate will be grayed out. Default = undefined
                // maxDate={'2012-05-30'}
                // Handler which gets executed on day press. Default = undefined
                onDayPress={(day) => {console.log('selected day', day)}}
                // Handler which gets executed on day long press. Default = undefined
                onDayLongPress={(day) => {console.log('selected day', day)}}
                // Month format in calendar title. Formatting values: http://arshaw.com/xdate/#Formatting
                // monthFormat={'M'}
                // Handler which gets executed when visible month changes in calendar. Default = undefined
                onMonthChange={(month) => {console.log('month changed', month)}}
                // Hide month navigation arrows. Default = false
                // hideArrows={false}
                // Replace default arrows with custom ones (direction can be 'left' or 'right')
                // renderArrow={(direction) => (<Arrow />)}
                // Do not show days of other months in month page. Default = false
                // hideExtraDays={false}
                // If hideArrows=false and hideExtraDays=false do not switch month when tapping on greyed out
                // day from another month that is visible in calendar page. Default = false
                // disableMonthChange={false}
                // If firstDay=1 week starts from Monday. Note that dayNames and dayNamesShort should still start from Sunday.
                firstDay={1}
                // Hide day names. Default = false
                hideDayNames={false}
                // Show week numbers to the left. Default = false
                showWeekNumbers={false}
                // Handler which gets executed when press arrow icon left. It receive a callback can go back month
                onPressArrowLeft={substractMonth => substractMonth()}
                // Handler which gets executed when press arrow icon left. It receive a callback can go next month
                onPressArrowRight={addMonth => addMonth()}
                />
        </View>
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  imageBackground: {
    width: '100%',
    height: '100%'
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor:'#F9F9FA'
  }
});

export default Schedule;