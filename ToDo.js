import React, { useEffect, useRef, useState } from 'react';

const ToDo = (props) => {
   const [inputState, setInputState] = useState(props.toDoEl.task)
   useEffect(()=> {
      setInputState(props.toDoEl.task)
      console.log('effect');
   },[props.toDoEl.task])
   
   const textInput = useRef(null);
   const toDoEl = useRef(null);
   const handleClick = (e) => { //finding the id of clicked item and pass it through props for toggleToDo function
      e.preventDefault();
      props.toggleCross(e.currentTarget.id)
   }
   const buttonInputClick = () => { //changes the visibility of input field
      textInput.current.className = 'editInput editInput__active';  
      toDoEl.current.className = props.toDoEl.complete ? "todo-el todo-el__disabled cross-line" : "todo-el todo-el__disabled";
      console.log(inputState);
   }
   const inputChange = (e) => { // set local state when any symbol entered
      setInputState(e.target.value)
   }
   const onSubmit = (e) => {// check if enter pressed, if so pass id and localState to App callback inputSubmit
      if (e.key === 'Enter'){
         props.inputSubmit(props.toDoEl.id, textInput.current.value)
         textInput.current.className = 'editInput';  //changes the visibility of input field
         toDoEl.current.className = props.toDoEl.complete ? "todo-el cross-line" : "todo-el"
      }
   }
   return (
      <div className="task-wrappper">
      <div ref={toDoEl} onClick={handleClick} id={props.toDoEl.id} className={props.toDoEl.complete ? "todo-el cross-line" : "todo-el"}>
         {props.toDoEl.task}
      </div> 
         <input autoFocus={true} onKeyDown={onSubmit} onChange={inputChange} ref={textInput} value={inputState} className='editInput' type="text"/>
         <button className="edit__btn mdc-button mdc-button--raised" onClick={()=>{buttonInputClick()}}>
            <span className="mdc-button__label">Edit</span>
         </button>
      </div>
   )
}

export default ToDo
