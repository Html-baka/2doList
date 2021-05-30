import React, { useRef, useState } from 'react';

const ToDo = (props) => {
   const [inputState, setInputState] = useState(props.toDoEl.task)
   const textInput = useRef(null);
   const handleClick = (e) => { //finding the id of clicked item and pass it through props for toggleToDo function
      e.preventDefault();
      props.toggleCross(e.currentTarget.id)
   }
   const buttonInputClick = () => { //changes the visibility of input field
      textInput.current.className = 'editInput editInput__active';  
   }
   const inputChange = (e) => { // set local state when any symbol entered
      setInputState(e.target.value)
   }
   const onSubmit = (e) => {// check if enter pressed, if so pass id and localState to App callback inputSubmit
      if (e.key === 'Enter'){
         props.inputSubmit(props.toDoEl.id, inputState)
         textInput.current.className = 'editInput';  //changes the visibility of input field
      }
   }
   return (
      <div className="task-wrappper">
      <div onClick={handleClick} id={props.toDoEl.id} className={props.toDoEl.complete ? "todo-el cross-line" : "todo-el"}>
         {props.toDoEl.task}
      </div> 
         <input onKeyDown={onSubmit} onChange={inputChange} ref={textInput} value={inputState} className={'editInput'} type="text"/>
         <button onClick={()=>{buttonInputClick()}}>Edit</button>
      </div>
   )
}

export default ToDo
