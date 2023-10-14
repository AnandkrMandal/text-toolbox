
import './App.css';
// import About from './Components/About';
import Navbar from './Components/Navbar';
import Textarea from './Components/Textarea';
import React, { useState } from 'react';
import Alart from './Components/Alart';





function App() {
  
  const [mode, setMode] = useState('light');
  const [alart, setAlart] = useState(null);

 

  const showAlart = (message, type) => {
    setAlart({
      msg:message,
      type:type
    })
    setTimeout(() =>{
      setAlart(null)
    },1500);
  }
  const toggleMode = () => {
    if (mode === 'light') {
      setMode('dark')
      document.body.style.backgroundColor = "#343a40";
      showAlart("Dark mode has been enable", "success")
    }
    else {
      setMode('light')
      document.body.style.backgroundColor = "#c5d3e4";
      showAlart("light mode has been enable", "success")
    }
  }
  return (
    <> 
      {/* navbar */}
      <Navbar tittle="Text Toolbox"  showAlart={showAlart} mode={mode} toggleMode={toggleMode} />
      {/* textArea */}
      <Alart alart={alart}/>
      <div className="container">
        <Textarea mode={mode} showAlart={showAlart} />
      </div>
      {/* aboutsection */}
      {/* <div className="about">
        <About mode={mode} />
      </div> */}
    </>

  );
}

export default App;
