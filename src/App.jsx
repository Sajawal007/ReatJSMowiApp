import React, { useState } from 'react';
import Nav from './Navbar';
import Netflix from './Netflix';
import Amazon from './Amazon';
const arr = [];
const netflix_heading="Welcome to Netflix Series";
const amazon_heading="Welcome to Amazon Series";
//let's do map array
const App = (prop) => {
    if (prop.fav == 'netflix') {
        return (<>
            <Nav heading={netflix_heading}/>
            <Netflix />
        </>);
    }
    else {
        return (<>
            <Nav heading={amazon_heading}/>
            <Amazon />
        </>);
    }
}
export default App;