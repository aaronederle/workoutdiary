import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { RadioButton } from 'react-native-paper';
import { useWorkoutContext } from '../context/Context';
import Styles from '../style/Styles';
import { SafeAreaView } from 'react-native-safe-area-context';

export default function Setting() {

  const { units, setUnits } = useWorkoutContext();

  return (
    <SafeAreaView style={Styles.container}>
         <Text style={Styles.header}>Units</Text>
         <View style = {Styles.unitContainer}>
          <RadioButton.Group onValueChange={(newValue) => setUnits(newValue)} value={units}>
            <TouchableOpacity onPress={() => setUnits('Kilometers')}>
              <View style={Styles.radioStyle}>
                <RadioButton 
                value='Kilometers'
                label ='Kilometers'
                status={units === 'Kilometers' ? 'checked' : 'unchecked'}
                />
                <Text style={Styles.formFields}>Kilometers</Text>
              </View>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => setUnits('Miles')}  >
              <View style={Styles.radioStyle}>
                <RadioButton 
                value='Miles'
                label = 'Miles'
                status={units === 'Miles' ? 'checked' : 'unchecked'}
                />
                <Text style={Styles.formFields}>Miles</Text>
              </View>
            </TouchableOpacity>
          </RadioButton.Group>
        </View>
    </SafeAreaView>
  );
}

