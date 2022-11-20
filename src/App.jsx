import React from 'react';
import './App.css';
import WeeklyLayout from './Components/WeeklyLayout'

function App() {
  let days= ['mon', 'tues', 'wed']
  return (
    <p>
      <WeeklyLayout days={days}/>
    </p>
  );
}

export default App;
