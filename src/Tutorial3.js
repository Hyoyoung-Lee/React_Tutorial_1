import React from 'react';

// props 이용 (App.js에서 값을 주어줬음)

function Tutorial3(props) {   

    return (
        <div>
            <h1> Hello, {props.name}</h1>
        </div>
    )
}

export default Tutorial3;