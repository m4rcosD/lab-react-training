import React from 'react';
import { render } from 'react-dom';

function Header ({min,  max}) {
    return (
        <>
        <p>Random value between:{min} and {max} = {min + Math.floor(Math.random() * (max - min))} </p>
        </>
    )
}

export default Header