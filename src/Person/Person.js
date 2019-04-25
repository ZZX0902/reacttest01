import React from 'react';
const person = (props) => {
    return(
        <div>
            <p>大家好，我是{props.name},我{props.age}岁了!</p>
            <p>{props.children}</p>
        </div>
    )
}

export default person;