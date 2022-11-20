import React from 'react';
import DailyEntry from './DailyEntry.js';

function WeeklyLayout({entryData}) {

  return (
    <div class="week-wrapper">
    {entryData.map(
      entry => <DailyEntry 
        date={entry.date} 
        tasks={entry.tasks}
        notes={entry.notes}/>
    )}
    </div>
  );
}

export default WeeklyLayout;
