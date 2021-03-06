import React from 'react';
import ToDo from './ToDo'

const ToDoList = (props) => {
   return (
      <div>
      <div className="wrapper">
         {props.toDoList.map(el  => (
            <ToDo key={el.id} toDoEl={el} toggleCross={props.toggleCross} inputSubmit={props.inputSubmit}/>
         ))}
      </div>
         <button onClick={props.handleClick} className="mdc-button mdc-button--raised deleteTask">
               <span className="mdc-button__label">Delete completed task</span>
            </button>
      </div>
   )
}

export default ToDoList
