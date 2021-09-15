import React from 'react'

// eslint-disable-next-line import/no-anonymous-default-export
export default (props) => (
    <div style={{
        border: '1px solid #ccc',
        marginBottom: '10px',
        display: 'block',
        padding: '10px'
    }}>
        <h3>Car name: {props.name}</h3>
        <p>Year: <b>{props.year}</b></p>
        <input type="text" onChange={props.onChangeName} value={props.name} />
        <button onClick={props.onDelete}>Delete</button>
    </div>
)