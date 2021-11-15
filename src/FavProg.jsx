import React,{useState} from 'react';
import ReactDOM from 'react-dom';
import App from './App';

const img_style={
    height:'250px',
    width:'400px',
    margin:'20px 20px 20px 20px'
};
const amazon_img="https://propakistani.pk/how-to/wp-content/uploads/2020/08/amazon-prime-video.jpg";
const netflix_img="https://i.pcmag.com/imagery/reviews/05cItXL96l4LE9n02WfDR0h-5..v1582751026.png";

const FavProg=()=>{
    const [favv,setFav]=useState('nothing');
    const setAmazon=()=>{
        setFav('amazon');
    }
    const setNetflix=()=>{
        setFav('netflix');
    }


    return (
        <>
        <div className="container">
        <h1 className="brand-logo center red-text">What to watch?</h1>
        <div className="row">
        <div className="col s12 m6">
        <button onClick={setAmazon}><img className="z-depth-5" style={img_style} src={amazon_img} alt="blank"/></button>
        </div>
        <div className="col s12 m6">
        <button onClick={setNetflix}><img className="z-depth-5" style={img_style} src={netflix_img} alt="blank"/></button>
        </div>
        </div>
        <App fav={favv}/>
        </div>
        </>
    );
}
export default FavProg;