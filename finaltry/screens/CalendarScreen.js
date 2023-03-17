// React Native Calendar Picker using react-native-calendar-picker
// https://aboutreact.com/react-native-calendar-picker/

import React, {useState} from 'react';
import {SafeAreaView, StyleSheet, View, Text} from 'react-native';
import CalendarPicker from 'react-native-calendar-picker';
import { Input } from '@ui-kitten/components';

const Calendar = () => {
  const [selectedStartDate, setSelectedStartDate] = useState(null);
//   const [selectedEndDate, setSelectedEndDate] = useState(null);

  const onDateChange = (date, type) => {
    //function to handle the date change
    setSelectedStartDate(date);
  };

  const useInputState = (initialValue = '') => {
    const [value, setValue] = React.useState(initialValue);
    return { value, onChangeText: setValue };
  };
  
  const multilineInputState = useInputState();

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.container}>
        <Text style={styles.titleStyle}>
          Skincare Journal
        </Text>
        <CalendarPicker
          startFromMonday={true}
        //   allowRangeSelection={true}
          minDate={new Date(2018, 1, 1)}
          maxDate={new Date(2050, 6, 3)}
          weekdays={
            [
              'Mon', 
              'Tue', 
              'Wed', 
              'Thur', 
              'Fri', 
              'Sat', 
              'Sun'
            ]}
          months={[
            'January',
            'Febraury',
            'March',
            'April',
            'May',
            'June',
            'July',
            'August',
            'September',
            'October',
            'November',
            'December',
          ]}
          previousTitle="Previous"
          nextTitle="Next"
          todayBackgroundColor="#f5cac3"
          selectedDayColor="#E2F6EB"
          selectedDayTextColor="#000000"
          scaleFactor={375}
          textStyle={{
            fontFamily: 'AvenirNext-Regular',
            color: '#000000',
          }}
          onDateChange={onDateChange}
        />
        <View style={styles.textStyle}>
          <Text style={styles.headertextStyle}>
            Date:
          </Text>
          <Text style={styles.bodytextStyle}>
            {selectedStartDate ? selectedStartDate.toString() : ''}
          </Text>
          <Text style = {styles.headertextStyle}>
            Notes:
          </Text>
          <Input
            multiline={true}
            textStyle={{ minHeight: 64 }}
            placeholder='Notes'
            {...multilineInputState}
            />
        </View>
      </View>
    </SafeAreaView>
  );
};
export default Calendar;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 30,
    backgroundColor: '#FEFBF5',
    padding: 16,
  },
  headertextStyle: {
    marginTop: 10,
    fontFamily: 'AvenirNext-DemiBold',
    fontSize: 20,
  },
  bodytextStyle: {
    fontFamily: 'AvenirNext-Regular',
    fontSize: 15,
  },
  titleStyle: {
    textAlign: 'center',
    fontSize: 30,
    fontFamily: 'AvenirNext-DemiBold',
    margin: 20,
  },
});