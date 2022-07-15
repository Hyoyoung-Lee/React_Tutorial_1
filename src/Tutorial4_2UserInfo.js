import React from 'react';
import Tutorial4_3Avatar from './Tutorial4_3Avatar';

function Tutorial4_2UserInfo(props) {

    return (
        <>

        <div className="UserInfo">
            <Tutorial4_3Avatar user={props.user} />
            
            <div className="UserInfo-name">
                {props.user.name}
            </div>
        </div>

        </>
    )
}

export default Tutorial4_2UserInfo;
