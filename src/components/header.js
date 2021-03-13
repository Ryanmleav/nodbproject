import React from 'react';

function Header(props){
    return(
        <h1 className="header">Workout Tracker {props.day}</h1>
    )
}
export default Header