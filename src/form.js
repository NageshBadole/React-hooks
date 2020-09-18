import React, { useState } from 'react';
import { useDispatch, useSelector } from "react-redux";

export default function FORM () {


    const editMode = useSelector (state => state.isEditing);
    const [value, setValue] = useState("");
    const dispatch = useDispatch();
    const handleSubmit = e => {
        e.preventDefault();

        if (!value) return;

        // Same Modal is used for adding new task and editing existing task.
        
        if(editMode){
            dispatch({type:"SAVE_EDIT", payload : {text : value, isCompleted : false} });
        }else{
            dispatch({type:"ADDTASK", payload : {text : value, isCompleted : false} });
        }
        
        setValue("");
    };

    return (
        <div>
            <form onSubmit={handleSubmit} style={{margin : '40px'}}>
                Enter Task         : 
                <input
                    type="text"
                    value={value}
                    onChange={e => setValue(e.target.value)}
                    />  

                <input type="submit"  className = "modulebutton" value = "Save Task" />
            </form>
        </div>  
    );
}