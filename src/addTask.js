import React from 'react';
import './App.css';
import Modal from "./modal"


export default function AddTask () {



    function handleModal() {
        window.onload.getElementById('modal').style.display = 'block';
        document.getElementById('#modal').style.display = 'block';
        return(
            <div id="modal" class="modal">
            <div class="modal-content">
                <span class="close">&times;</span>
                {/* <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    value={value}
                    onChange={e => setValue(e.target.value)}
                />   
            </form> */}
            </div>
        </div>
        )
    }
    

    return (
        <div >
            <button className = "addButton" onClick={() => handleModal()}>Add Task</button>
        </div>


    );
}
