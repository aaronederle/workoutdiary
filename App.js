import * as React from 'react';
import { SafeAreaView } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import AddExercise from './components/AddExercise';
import ExerciseList from './components/ExerciseList';
import {WorkoutProvider } from './context/Context';
import Settings from './components/Settings.js';
import Styles, { MyTheme } from './style/Styles';
import { PaperProvider } from 'react-native-paper';
import {useFonts} from 'expo-font';

const Tab = createMaterialTopTabNavigator();

export default function App() {
  
  const[loaded] = useFonts({
  OpenSansSemiBold: require('./assets/fonts/OpenSans-SemiBold.ttf'),
  });

  if (!loaded) {
    return null;
  }

  return (
    <SafeAreaView style={Styles.navigation}>
      <WorkoutProvider>
        <PaperProvider theme ={MyTheme}>
          <NavigationContainer theme={MyTheme}>
            <Tab.Navigator
            initialRouteName='AddExercise'
            screenOptions={{
              tabBarActiveTintColor: '#FFFFFF',
              tabBarInactiveTintColor: '#000000',
              tabBarLabelStyle: { fontSize: 12 },
              tabBarStyle: { backgroundColor: '#538c5b' },
            }}>

              <Tab.Screen 
                name = "Add exercise" 
                component={AddExercise}         
                options={{ tabBarLabel: 'Add workout', tabBarIcon: ({ color }) => (
                  <Icon name="plus-box" color={color}  size ={25}  /> ),}}
              />
              <Tab.Screen 
              name= "Exercise List" 
              component={ExerciseList}
              options={{ tabBarLabel: 'Workout List', tabBarIcon: ({ color }) => (
                <Icon name="view-list-outline" color={color}  size ={25} />),}}
              />
              <Tab.Screen 
              name= "Settings" 
              component={Settings} 
              options={{ tabBarLabel: 'Settings', tabBarIcon: ({ color }) => (
                <Icon name="cog-outline" color={color}  size ={25}  />),}}
              />
              
            </Tab.Navigator>
          </NavigationContainer>
        </PaperProvider>
      </WorkoutProvider>
    </SafeAreaView>
  );
}