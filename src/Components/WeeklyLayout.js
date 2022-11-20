import React from 'react';
import DailyEntry from './DailyEntry.js';

function WeeklyLayout({days}) {

  return (
    <>
    {days.map(
      day => <DailyEntry date={day}/>
    )}
    </>
  );
}

export default WeeklyLayout;
