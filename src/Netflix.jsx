import React from 'react';
import Sdata from './Sdata';

const siftArr=(arr)=>{

    for(let i=0;i<Sdata.length;i++)
    {
        if(Sdata[i].Web.localeCompare('netflix')==0)
        {
            arr.push(Sdata[i]);
        }
    }
    return arr;
}
const Netflix=(arr)=>{
    return siftArr(arr);
}



export default Netflix;