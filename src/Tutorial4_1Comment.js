import React from 'react';
import Tutorial4_2UserInfo from './Tutorial4_2UserInfo';
import moment from 'moment';

// 컴포넌트 나누기


function Tutorial4_1Comment(props) {

     const formatDate = (date) => {
            return (
                moment(date).format("YY-MM-DD")
            )
        }
        // 여기서 date는 객체
        // return 빼먹지 말기 ㅠㅠ~~
    
     

    
    return (
        <>

        <div className="Comment">
            <Tutorial4_2UserInfo user={props.author} />

            <div className="Comment-text">
                {props.text}
            </div>

             <div className="Comment-date">
                {formatDate(props.date)}
            </div> 
        </div>

        </>
    )
}

export default Tutorial4_1Comment;
