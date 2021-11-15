import React from 'react';

const nav_st={
    backgroundColor:'black'
};
const logo_st={
     fontFamily: `'Road Rage', cursive`
};


const Navbar=(prop)=>{
    return (<>
<nav>
    <div style={nav_st} className="nav-wrapper">
    <a style={logo_st} className="brand-logo center red-text">{prop.heading}</a>
    </div>
    </nav>
    </>);
}
export default Navbar;