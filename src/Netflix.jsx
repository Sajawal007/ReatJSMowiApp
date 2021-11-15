import React from 'react';
import Sdata from './Sdata';
import Card from './Cards'

const arr=[];
    const siftArr=()=>{
        for(let i=0;i<Sdata.length;i++)
        {
            if(Sdata[i].Web.localeCompare('netflix')==0)
            {
                arr.push(Sdata[i]);
            }
        }
        console.log(arr);
    }
const Netflix=()=>{
    siftArr();
    return(
        <>
        <div className="container">
        <div className="row">
        {arr.map((val) => {return (<>
        <div className="col s12 m4">
        <Card key={val.id} imgsrc={val.imgsrc} title={val.title}/>
            </div>
        </>);})}
        </div>
        </div>
        </>
    );
}



export default Netflix;