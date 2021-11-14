import React from 'react';

const nav_st={
    backgroundColor:'black'
};
const logo_st={
     fontFamily: `'Road Rage', cursive`
};


const Navbar=()=>{
    return (<>
<nav>
    <div style={nav_st} className="nav-wrapper">
    <a style={logo_st} className="brand-logo center red-text">Welcome to TOP Netflix Series</a>
    </div>
    </nav>
    </>);
}
export default Navbar;