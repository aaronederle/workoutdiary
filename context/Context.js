import React, { createContext, useState, useContext } from 'react';

const WorkoutContext = createContext();

export const WorkoutProvider = ({ children }) => {
 const [workouts, setWorkouts] = useState([]);
 const [units, setUnits] = useState('Kilometers'); 

 const addWorkout = (workout) => {
   setWorkouts([...workouts, workout]);
 };

 return (
   <WorkoutContext.Provider value={{ workouts, addWorkout, units, setUnits }}>
     {children}
   </WorkoutContext.Provider>
 );
};

export const useWorkoutContext = () => { return useContext(WorkoutContext)};