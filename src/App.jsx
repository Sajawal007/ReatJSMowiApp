import React, { useState } from 'react';
import Nav from './Navbar';
import Card from './Cards';
import Netflix from './Netflix';
import Amazon from './Amazon';
import Sdata from './Sdata';
const arr=[];
const Decider=(prop)=>{
      if(prop.param.localeCompare("netflix")==0)
      {
        Netflix(arr);
      }
      else if(prop.param.localeCompare("amazon")==0)
      {
        Amazon(arr);
      }
      return(<div></div>);
}
//let's do map array
const App=(prop)=>{

return (<>
<Nav/> 
<div className="container">
    <div className="row">
    <Decider param={prop.fav}/>
    {arr.map((val) => {return (<>
        <div className="col s12 m4">
        <Card imgsrc={val.imgsrc} title={val.title}/>
        </div>
        </>);})}
    </div>
</div>
</>);
}
export default App;