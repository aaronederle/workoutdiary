import React, {useState} from 'react';
import { SafeAreaView, Text, View, Modal, Alert } from 'react-native';
import { SegmentedButtons, TextInput, Button } from 'react-native-paper';
import {Calendar} from 'react-native-calendars';
import { useWorkoutContext } from '../context/Context';
import Styles, { MyTheme } from '../style/Styles';

export default function AddExercise() {
  
  const {addWorkout, units} = useWorkoutContext();
  
  const [value, setValue] = useState('');
  const [distance, setDistance] = useState('');
  const [duration, setDuration] = useState('');
 
  const [date, setDate] = React.useState();
  const [visible, setVisible] = useState(false);

 const dateSelected = (day) => {
   setVisible(false);
   setDate(day);
 };

 const showAlert = () => {
  const numericDistance = parseFloat(distance);
  const numericDuration = parseFloat(duration);

  if (!value) {
    Alert.alert('Error', 'Please select a sport.');
    return;
  }

  if (isNaN(numericDistance) || isNaN(numericDuration) || numericDistance <= 0 || numericDuration <= 0) {
    Alert.alert('Error', 'Distance and duration must be valid numeric values.');
    return;
  }
  
  if (!date) {
    Alert.alert('Error', 'Please select a date.')
    return;
  }

  const convertDistance = units === 'Miles' ? (numericDistance/0.621371).toFixed(2) : numericDistance;
  const workout = {value, distance: convertDistance, duration: numericDuration, date, icon: value};
  addWorkout (workout);
};
  

const updatedTextInput = () => {
  return units === 'Kilometers' ? 'Distance (km)' : 'Distance (miles)';
};

  return (
    <SafeAreaView style={Styles.container}>
      <Text style={Styles.header}>Add workout</Text>
      <SegmentedButtons
        theme= {MyTheme}
        value={value}
        onValueChange={setValue}
        buttons={[
          {
            value: 'run',
            label: 'Run',
            icon:'run',
            labelStyle: Styles.newFont
          },
          {
            value: 'tennis',
            label: 'Tennis',
            icon: 'tennis',
            labelStyle: Styles.newFont
          },
          {
            value: 'hiking',
            label: 'Hike',
            icon: 'hiking',
            labelStyle: Styles.newFont
          },
        ]}
      />
      <TextInput
        style={Styles.textInput}
        mode="outlined"
        label={updatedTextInput()}
        value={distance}
        keyboardType='numeric'
        returnKeyType='done'
        onChangeText={(text) => setDistance(text)}
        clearButtonMode='while-editing'
      />
      <TextInput
        style={Styles.textInput}
        mode="outlined"
        label="Duration (min)"
        value={duration}
        keyboardType='numeric'
        returnKeyType='done'
        onChangeText={(text) => setDuration(text)}
        clearButtonMode='while-editing'
      />
    <View style={Styles.dateSelectorContainer}>
      <Button
         mode="outlined"
         onPress={() => setVisible(true)}
         labelStyle={Styles.formFields}
       >
         {date ? date.dateString : 'Select date'}
       </Button>
     </View>

     <Modal visible={visible} transparent={true}>
       <View style={Styles.modalContainer}>
         <Calendar style={Styles.calendar} onDayPress={dateSelected} />
         <Button onPress={() => setVisible(false)} >
           Close
         </Button>
       </View>
     </Modal>

     <Button style={Styles.formFields} mode="contained" onPress={showAlert} labelStyle={Styles.addButton}>
       Add Workout
     </Button>
   </SafeAreaView>
  );
};

