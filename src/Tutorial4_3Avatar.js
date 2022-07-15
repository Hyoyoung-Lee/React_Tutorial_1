import React from 'react';

function Tutorial4_3Avatar(props) {

    return (
        <>

            <img className="Avatar"
                src={props.user.avatarUrl}
                alt={props.user.name}
                width="50"
            />
            
        </>
    )
}

export default Tutorial4_3Avatar;
