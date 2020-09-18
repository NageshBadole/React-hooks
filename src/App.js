import React, { useState, useEffect, useContext } from "react";
import { useSelector, useDispatch } from "react-redux";
import { addTask, editTask, removeTask  } from './redux/actions/taskActions';
import './App.css';
import Tasks from "./tasks";
import Modal from "./modal"




export default function App() {
      
    const dispatch = useDispatch()
    const tasks = useSelector (state => state.tasks);
    const modalStatus = useSelector(state => state.isOpen);

    // update document title for every render
    useEffect((e) => {   
       document.title = tasks.length + ' Tasks';
    })

    return(
        <div className="app">
            <div>
                <h1 className = "head">Task List </h1>
            </div>
            
            <div className="todo-list">
               <Tasks tasks = {tasks}/>
            </div>
            <button className = "addButton" onClick={() => dispatch({type:"OPEN_MODAL"})}>Add Task</button>

            {/* modal is only visible in edit mode or when adding new task */}

            { modalStatus && (
                <div>
                    <Modal />
                </div>
                
            )   
            }
            
        </div>
  );
}




