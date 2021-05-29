import React, { useState } from 'react'

const ToDoForm = (props) => {
   const [ userInput, setUserInput ] = useState("");
   const handleChange = (e) => {
      setUserInput(e.currentTarget.value)
      // console.log(e.currentTarget.value);
   }
   const handleSubmit = (e) => {
      e.preventDefault();
      if (userInput !== ""){ 
         props.addTask(userInput); // call the state change function from App.js
         setUserInput("");
      }
      else {
         alert("Please, enter your task first")
      }
   }
   return (
      <div>
         <form className="form" onSubmit={handleSubmit} action="">
         <label className="mdc-text-field mdc-text-field--filled mdc-text-field--no-label">
            <span className="mdc-text-field__ripple"></span>
            <input placeholder="Add new task" onChange={handleChange} value={userInput} className="mdc-text-field__input" type="text" aria-label="Label"/>
            <span className="mdc-line-ripple"></span>
         </label>
            
            <button className="mdc-button mdc-button--raised add-task">
               <span className="mdc-button__label">Add task</span>
            </button>
         </form>
      </div>
   )
}

export default ToDoForm;
