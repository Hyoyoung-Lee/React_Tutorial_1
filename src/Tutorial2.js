import React from 'react';

// clock (1초마다 똑딱똑딱)


function Tutorial2() {   

    const element = (
        <div>
            <h1> It is {new Date().toLocaleTimeString()}.</h1>
        </div>
    )
    /* 여기엔 그냥 괄호 쓰임 (중괄호 X) */


    return (
        
        setInterval(element, 1000)
        /* setInterval() 콜백을 이용해 초마다 ReactDOM.render() 호출 */
    )
}

export default Tutorial2;