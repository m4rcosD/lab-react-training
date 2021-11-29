import React from 'react';
import { render } from 'react-dom';
function componentToHex(c) {
    var hex = c.toString(16);
    return hex.length == 1 ? "0" + hex : hex;
}
function BoxColor ({r, g, b}) {
    let hex = "#" + componentToHex(r) + componentToHex(g) + componentToHex(b);

    return (
        <>
        <p style={{backgroundColor: hex}}> the color is {hex}</p>
        </>
    )

}


export default BoxColor