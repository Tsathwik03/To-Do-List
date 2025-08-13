import React,{useState} from "react";
function ToDoList() {
const [tasks,setTasks]=useState([]);
const [newTask,setNewTask]=useState("");
function handleInputChange(event)
{
setNewTask(event.target.value);
}
function addTask()
{
    if(newTask.trim()==="") return; 
setTasks(t=>[...t,newTask]);
setNewTask(""); // Clear input after adding
}
function deleteTask(index)
{
    const updatedTasks = tasks.filter((_,i) => i !== index);
    setTasks(updatedTasks);
}
function moveTaskUp(index)
{
    if(index === 0)return;
    const updatedTasks = [...tasks];
    [updatedTasks[index],updatedTasks[index-1]]=[updatedTasks[index-1],updatedTasks[index]]
    setTasks(updatedTasks);
}
function moveTaskDown(index)
{
    if(index === tasks.length - 1)return;
    const updatedTasks = [...tasks];
    [updatedTasks[index],updatedTasks[index+1]]=[updatedTasks[index+1],updatedTasks[index]]
    setTasks(updatedTasks);

}
return(
<>
<div className="todo-list">
    <h1>To-Do List</h1>
    <input type="text" 
    placeholder="Add a new task"
    value={newTask}
    onChange={handleInputChange}/>
    <button 
    className="add-button"
    onClick={addTask}>Add</button>
</div>
<ol>
  {tasks.map((task, index) =>
    <li key={index}>
      <span>{index + 1}. </span>
      <span className="text">{task}</span>
      <button className="delete-button" onClick={() => deleteTask(index)}>Delete</button>
      <button className="moveup-button" onClick={() => moveTaskUp(index)}>👆</button>
      <button className="movedown-button" onClick={() => moveTaskDown(index)}>👇</button>
    </li>
  )}
</ol>


</>
)
}
export default ToDoList;