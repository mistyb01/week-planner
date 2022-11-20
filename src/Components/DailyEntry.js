import React from 'react';


function DailyEntry({date, tasks, notes}) {

  return (
    <div class="daily-entry">
      <h2>{date}</h2>
      <ul>
      {tasks && tasks.map(item => 
        <div class="todo-item">
          <input type="checkbox" checked={item.checked}/>
          <li>{item.title}</li>
        </div>
        )}
        {notes && notes.map(item => 
          <div class="note">
            <span>{item}</span>
          </div>
          )}
      </ul>
      <div class="input-form">
        <input type="text" class="input-form"></input>
        <select name="type">
          <option value="task">task</option>
          <option value="note">note</option>
        </select>
        <button class="add-content"> + </button>
      </div>
    </div>
    
  );
}

export default DailyEntry;
