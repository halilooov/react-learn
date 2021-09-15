import React from 'react'

// eslint-disable-next-line import/no-anonymous-default-export
export default (props) => (
    <div>
        <h3>Car name: {props.name}</h3>
        <p>Year: <b>{props.year}</b></p>
        { props.children }
    </div>
)