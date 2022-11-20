import React from 'react';
import './App.css';
import WeeklyLayout from './Components/WeeklyLayout'

function App() {
  let entryData = [
    {
      date: 'mon | 14', 
      tasks: [
        {title: 'task 1', checked: false},
        {title: 'task 2', checked: false},
      ],
      notes: ['pick a god and pray', 'blsgkbb']
    },
    {
      date: 'tues | 15',
      tasks: [
        {title: 'task 1', checked: false},
        {title: 'task 2', checked: false},
      ]
    },
    {
      date: 'wed | 16',
    },

  ]
  return (
    <main>
      <WeeklyLayout entryData={entryData}/>
    </main>
  );
}

export default App;
