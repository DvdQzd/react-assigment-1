import React from 'react';
import './UserInput.css';

const UserInput = (props) => {
    return (
        <input type="text" className="UserInput" onChange={props.changed} value={props.username}/>
    );
}

export default UserInput;