import React from 'react';
import { SafeAreaView, FlatList, View, Text } from 'react-native';
import { Avatar, Card } from 'react-native-paper';
import { useWorkoutContext } from '../context/Context';
import Styles from '../style/Styles';

export default function ExerciseList() {

const { workouts, units } = useWorkoutContext();

const workoutExamples = [
  { value: 'run', distance: 5, duration: 30, date: { dateString: '2024-02-11' }, icon: 'run' },
  { value: 'tennis', distance: 2, duration: 45, date: { dateString: '2024-02-10' }, icon: 'tennis' },
  { value: 'hiking', distance: 12, duration: 75, date: { dateString: '2024-02-09' }, icon: 'hiking' },
];

const mergedExercises = [...workoutExamples, ...workouts];

 const sumDistances = mergedExercises.reduce((acc, workout) => {
   acc[workout.value] = (acc[workout.value] || 0) + parseFloat(workout.distance);
   return acc;
 }, {});


 const convertDistance = (distance) => {
  if (units === 'Kilometers') {
    return (parseFloat(distance) ).toFixed(2);
  } else {
    return (parseFloat(distance) * 0.621371).toFixed(2);
   }  
  };


 return (
   <SafeAreaView style={Styles.container}>
    <Text style={Styles.header}>Your completed workouts</Text>
     <View style={Styles.summaryRow}>
        {Object.entries(sumDistances).map(([type, distance]) => (
          <View key={type} style={Styles.circularSummary}>
            <Avatar.Icon icon={type} size={40} style={Styles.icon} />
            <Text style={Styles.summaryText}>{`${convertDistance(distance)} ${units === 'Kilometers' ? 'km' : 'mi'}`}</Text>
          </View>
        ))}
      </View>
     
     <FlatList
       data={mergedExercises}
       keyExtractor={(item, index) => index.toString()}
       renderItem={({ item }) => (
         <Card style={Styles.card}>
           <Card.Title
             subtitleStyle={Styles.newFont} subtitle={item.date.dateString}
             left={() => <Avatar.Icon icon={item.icon} size={40} style={Styles.icon}/>}
           />
           <Card.Content>
             <Text style={Styles.newFont}>Distance: {convertDistance(item.distance)} {units === 'Kilometers' ? 'km' : 'mi'}</Text>
             <Text style={Styles.newFont}>Duration: {item.duration} min</Text>
           </Card.Content>
         </Card>
       )}
       ListFooterComponent={<View style={{height:30}}/>}
     />
  </SafeAreaView>
 );
};


