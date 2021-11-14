import React from 'react';
import Nav from './Navbar';
import Card from './Cards';
import Netflix from './Netflix';
import Amazon from './Amazon';

const arr=[];
const fav='amazon';
//updates arr acc to demand
const decider=()=>{
if(fav.localeCompare('netflix')==0)
{
    Netflix(arr);
}
else
{
   Amazon(arr);
}
}
//let's do map array
const App=()=>{
return (<>
<Nav/> 
<div className="container">
<form>
        <div class="input-field">
          <input id="search" type="search" required/>
          <label class="label-icon" for="search"><i class="material-icons">search</i></label>
          <i class="material-icons">close</i>
        </div>
      </form>
    <div className="row">
    {decider()}
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