import './App.css';
import { Fragment, useState } from 'react';
import AddTask from './Users/AddTask';
import UserList from './Users/UserList';
function App() {
  const [editedList,setEditedList] = useState('')
  const [taskList,setTaskList] = useState([
    {
      task: "Learn about React",
      id: 'e1'
    },
    {
      task: "Meet friend for lunch",
      id: 'e2'
    },
    {
      task: "Build really cool todo app",
      id: 'e3'
    }
  ]);
  const addTaskHandler =(mtask) => {
    setTaskList((prevTask) => {
      return [
        ...prevTask,
        {task:mtask,id:Math.random().toString()}
      ]
    })
    // const newTodos = [...taskList, { task:mtask,id:Math.random().toString() }];
    // setTaskList(newTodos);
  };
  // const deleteTaskHandler = (id) => {
  //   const arrayDelete= taskList.filter(delete1 => delete1.id === id);
  //   console.log(arrayDelete)
  //   setTaskList(arrayDelete);
  // }
  const deleteTaskHandler = (index) => {
    const newToDo = [...taskList];
    newToDo.splice(index,1);
    console.log(newToDo)
    setTaskList(newToDo);
    return newToDo;
  }
  const editTaskHandler = (index) => {
    let newEditItem = taskList.find((ele,index1) => {
      return index1 === index
    });
    console.log(newEditItem);
    setEditedList(newEditItem);
  }

  



  return (
    
    
    <Fragment>
      <section className='container'>
        <div className="heading">
          <img className="heading__img" src="https://freesvg.org/img/publicdomainq-business-man-working.png" alt='hello'></img>
          
          <h1 className="heading__title">To-Do List</h1>
        </div>
        
        <div >
          <AddTask onAddTask={addTaskHandler} edited={editedList} edited1={setEditedList}  setTaskList={setTaskList} taskList={taskList}></AddTask>
          <label className="form__label" htmlFor="todo" >~ Today I need to ~</label>
          <UserList users={taskList} onDeleteTask ={deleteTaskHandler}  onUpdateTask = {editTaskHandler}></UserList>
        </div>

      </section>
      
     
    </Fragment>
  );
}

export default App;
