import React, {useSelector} from 'react';
import { useDispatch } from 'react-redux';
import './App.css';

export default function Tasks (props) {

    const dispatch = useDispatch();
    const Todo = function ( {todo , index} ) {

        return (
                <div className="todo" style={{ color: todo.isCompleted ? "green" : "" }}>
                    {todo.text}
                    <div className="button">

                        <button id = 'taskStatus'  onClick={() =>dispatch({type:"TASKSTATUS", payload : index }) }>Complete</button>

                        {/*  EDIT_TASK function will open model in edit mode */}
                        
                        <button style={{ marginLeft: "20px" }} onClick={() => dispatch({type:"EDIT_TASK" , payload : index })}>Edit</button>

                        <button style={{ marginLeft: "20px" }}onClick={() => dispatch({type:"REMOVETASK", payload : index })}>Remove</button>

                    </div>
                </div>
            )
    }
    
    return(
        <div className="todo-list">
        {props.tasks.map((todo, index) => (
            <Todo
                key={index}
                index={index}
                todo={todo}
            />
        ))} 
        
    </div>
    );
}