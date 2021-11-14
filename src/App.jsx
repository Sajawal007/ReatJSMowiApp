import React from 'react';
import Nav from './Navbar';
import Card from './Cards';
import Sdata from './Sdata';
//let's do map array
const App=()=>{
return (<>
<Nav/> 
<div className="container">
    <div className="row">
        {Sdata.map((val)=>  { return (<>
    <div className="col s12 m4">
    <Card imgsrc={val.imgsrc} title={val.title}/>
    </div>
    </>);
})}
    </div>
</div>
</>);
}
export default App;