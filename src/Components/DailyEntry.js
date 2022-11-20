import React from 'react';


function DailyEntry({date, tasks, notes}) {
  function handleEntryActions(e) {
    console.log(e);
  }
  return (
    <div onClick={handleEntryActions} class="daily-entry">
      <h2>
        {date}
        <button data-date={date}>V</button>
      </h2>
      <div class="entry-content" id={date}>
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
      </div>
      <div class="input-form">
        <input type="text" class="new-item-form"></input>
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
