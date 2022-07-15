import React from 'react';

// 컴포넌트 안에서 여러 가지 사용

function Tutorial1() {   
   
   /*const name = 'Josh Perez';*/
    const user = {
        firstName: 'Harper',
        lastName: 'Perez'
    };
    /* 여기엔 중괄호 쓰임 */



    /*const element = <h1> Hello, {name} </h1>*/
    
    // const element = <h1> Hello, {formatName(user)} </h1>
    /* 위처럼 name과 같은 변수에도 중괄호, formatName과 같은 함수에도 중괄호! */

    const element = <a href = "https://www.reactjs.org"> link </a>;


    function formatName(user) {
        return user.firstName + ' ' + user.lastName;
    }

    function getGreeting(user) {
        if (user) {
            return <h1> Hello, {formatName(user)} </h1>
        } 
            return <h1> stranger ~ </h1>
        
    }


    return (
        <>
        {element}
        {getGreeting(user)}
        {/*여기에다가는 따로 중괄호를 씌우지 않는당~! */}
        </>
    )
}

export default Tutorial1;