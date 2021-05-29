import React from 'react';

const ToDo = (props) => {
   const handleClick = (e) => { //finding the id of clicked item and pass it through props for toggleToDo function
      props.toggleCross(e.currentTarget.id)
   }
   {console.log(props.toDoEl)} // cut when released
   return (
      <div className="task-wrappper">

      <div onClick={handleClick} id={props.toDoEl.id} className={props.toDoEl.complete ? "cross-line" : ""}>
         {props.toDoEl.task}
      </div> 
         
      </div>
   )
}

export default ToDo
