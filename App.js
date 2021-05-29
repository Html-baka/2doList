import './App.css';
import Header from './Header';
import data from "./data.json";
import React, { useState } from 'react';
import ToDoList from './ToDoList';
import ToDoForm from './ToDoForm';

function App() {
  const [toDoList, setToDoList] = useState(data);

  const toggleCross = (id) => {
    let mapped = toDoList.map(task => {
      // eslint-disable-next-line eqeqeq
      return task.id == id? { ...task, complete: !task.complete} : {...task};
    });
    setToDoList(mapped);
  }
  const handleClick = () => {
    let i = -1; // counter for id reassignment
    const filtered = toDoList.filter(task => !task.complete); // filter if the task is complete
    const changeId = filtered.map(element => { //reassigning the id of array elements
      i++;
      return {...element, id: i}
    })
    setToDoList(changeId)
  }
  const addTask = (userInput) => {
     setToDoList([...toDoList, {id: toDoList.length, task: userInput, complete: false}]);
  }
  return (
    <div className="App">
        
      <Header/>
      <ToDoList toDoList = {toDoList} 
        toggleCross = {toggleCross} handleClick={handleClick} />
      <ToDoForm addTask={addTask} />
    </div>
  );
}

export default App;
