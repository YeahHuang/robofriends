import React from 'react';
{/* we have to import this because we use JSX syntax*/}

const Card = (props) => {
    return (
        <h1>RoboFriends</h1>
        <div className='bg-light-green dib br3 pa3 ma2 grow bw2 shadow-5'>
            {/*⬆️are tachyon's built-in css type. background-light green dib-boarder  'pa3'-padding of three ma2-magin of 2 'grow'-animation shadow-5: add shadows to it*/}
            <img alt='robots' src={`https://robohash.org/${props.id}?200x200`} />
            <div>
                <h2>{props.name}</h2>
                <p>{props.email}</p>
            </div>
        </div>
        );
}