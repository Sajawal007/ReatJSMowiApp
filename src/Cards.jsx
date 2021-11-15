import React from 'react';


const card={
   // width:'330px',
    borderRadius:'30px'
};
const img_st={
    height:'300px',
    borderRadius:'30px'
}


const Card=(props)=>{
    const img=props.imgsrc;
    const title=props.title;

return (<><div style={card} className="card z-depth-5">
<div className="card-image">
  <img style={img_st} src={img} alt="blank"/>
  <span className="card-title">{title}</span>
  <a className="btn-floating halfway-fab waves-effect waves-light red"><i className="material-icons">add</i></a>
</div>
<div className="card-content">
  <p>I am a very simple card. I am good at containing small bits of information. I am convenient because I require little markup to use effectively.</p>
</div>
</div></>);
}
export default Card;