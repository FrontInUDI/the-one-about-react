import React from 'react';
import './Select.css';

const Select = (props) => {
    return (
        <select onChange={props.change} name={props.name}>
            {props.options.map(option => <option value={option.name} key={option.name}>{option.name}</option>)}
        </select>
    )
}

export default Select;