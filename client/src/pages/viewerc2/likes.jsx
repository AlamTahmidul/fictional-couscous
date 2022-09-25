import React from 'react';
import { Toast, ToggleButton } from 'react-bootstrap';



export function Likes({ toggle }){
    return(
        <Toast onClose={() => toggle()}>
            <Toast.Header>
                <strong className = "mr-auto">You have liked this dog!!</strong>
            </Toast.Header>
            <Toast.Body>
                He/She has been added to your like list!!
            </Toast.Body>
        </Toast>
    );
}