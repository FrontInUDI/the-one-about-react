import React from 'react';
import './Input.css';

const Input = (props) => {
    return (
        <input
            type="text"
            value={props.value}
            name={props.name}
            required={props.required}
            disabled={props.disabled}
            onChange={props.change} />
    )
}

export default Input;