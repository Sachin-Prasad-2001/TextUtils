import logo from './logo.svg';
import './App.css';
import React,{useState} from 'react'
import Navbar from './components/Navbar';
import TextForm from'./components/TextForm';
import About from './components/About';
import Alert from './components/Alert';
import {BrowserRouter as Router, Routes, Route, Link} from 'react-router-dom';

function App() {

  const [style, setStyle] = useState({nextStyle:'dark',style:{
    color:'black',
    backgroundColor:'white'
  }});

  const changeStyle = ()=>{
    if(style.nextStyle==='bright'){
      setStyle({nextStyle:'dark',style:{color:'black',backgroundColor:'white'}});
      console.log(style);
      document.title='Text Utils';
    }
    else{
      setStyle({nextStyle:'bright',style:{color:'white',backgroundColor:'black'}});
      console.log(style);
      document.title = 'Text Utils - Dark Mode';
    }
  }

  return (
    
    <div style={style.style}>
    <Navbar title='TextUtils'/>
    <div className='container'>
      <TextForm />
    </div>
    
    <div className="container">
      <button type="button" className="btn btn-primary" onClick={changeStyle}>Enable {style.nextStyle} mode</button>
    </div>
    </div>
  );
}

export default App;
