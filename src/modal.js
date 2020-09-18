import React from 'react';
import { useDispatch } from 'react-redux';
import  FORM  from "./form";
import './modal.css';

export default function Modal () {
    
    const dispatch = useDispatch();

    return (
        <div id="modal" class="modal">
            <div class="modal-content">
                <span class="close" onClick={() => dispatch({type:"CLOSE_MODAL" })}>&times;</span>

                <FORM />
            </div>
                
        </div>
    )
}