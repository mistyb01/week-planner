import React from 'react';


function DailyEntry({date, tasks, notes}) {
  function handleEntryActions(e) {
    if (e.target.tagName != 'BUTTON') return;
    let id = e.target.dataset.date;
    let entryContent = document.getElementById(id);
    entryContent.hidden = !entryContent.hidden;
    entryContent.hidden ? e.target.innerText = "v" : e.target.innerText = "^";
  }
  
  return (
    <div onClick={handleEntryActions} class="daily-entry">
      <div class="entry-header">
        <h2>{date}</h2>
        <button data-date={date}>v</button>
      </div>
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

        <div class="input-form">
        <input type="text" class="new-item-form"></input>
        <select name="type">
          <option value="task">task</option>
          <option value="note">note</option>
        </select>
        <button class="add-content"> + </button>
      </div>

      </div>
    </div>
    
  );
}

export default DailyEntry;
