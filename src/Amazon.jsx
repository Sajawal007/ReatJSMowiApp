import React,{useState} from 'react';
import Sdata from './Sdata';

const siftArr=(arr)=>{

    for(let i=0;i<Sdata.length;i++)
    {
        if(Sdata[i].Web.localeCompare('amazon')==0)
        {
            arr.push(Sdata[i]);
        }
    }
    return arr;
}
const Amazon=(arr)=>{
    return siftArr(arr);
}



export default Amazon;