import './viewerc2.css';
import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

import { Likes } from './likes';


export default function Interests() {
    const [open, setOpen] = useState(0)
    function openModal(e){
        e.preventDefault();
        console.log('You clicked submit.');
        setOpen(1);
    }
    const closeModal = () => {
        console.log("Closing modal...")
        setOpen(0);
    }

    return(
        <>
            { open === 1 ? <Likes toggle={closeModal} /> : <></>}

            <div id = "left">
                <div class="images">
                    <img src = "./dog.jpg"></img>
                </div>
            </div>
            <br></br>
            <br></br>
            <br></br>
            <div id = "right">
                <div description>
                    <div class= "info">
                        <h1 id = "name"></h1>
                        <p class="age">Age:</p>
                        <p class="location">Location:</p>
                        <p class="size">Size:</p>
                    </div>
                </div>
                <div>
                <form onSubmit={openModal}>
                    <button type="submit">I am interested!</button>
                </form>
                <form onSubmit={openModal}>
                    <button type="submit">Show me more!</button>
                </form>
                </div>
            </div>
        </>
    );
}