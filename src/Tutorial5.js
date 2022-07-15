import React, {useEffect, useState} from "react";

//State는 props와 유사하지만, 비공개이며 컴포넌트에 의해 완전히 제어됨


function Tutorial5(props) {
    
    let [date, setDate] = useState(new Date());
    // 기본 값으로 useState(''); 하면 안 나옴..


     useEffect(() =>  {
        // Tutorial5 컴포넌트가 매초 작동하도록 하는 메서드 tick()
        const tick = () => {
            setDate(new Date());
            // setState에 표현할 때는 set변수 뒤에 괄호..!!!
        }

         let timerID = setInterval( () => tick(), 1000)
        // 1초마다.
        // tick 앞에 this 붙이지 말기,,

         return () => {
            clearInterval(timerID);
        } 
        // 페이지 나갈 때 지워지게 해주기 
    })
     

    return ( 
        <div>
            <h2> It is {date.toLocaleTimeString()} </h2>
        </div>
        
    );
}


export default Tutorial5;

