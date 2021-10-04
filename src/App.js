//import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
//import About from './components/About';
//import React, { Component } from 'react';
import { useState } from 'react/cjs/react.development';
import Alert from './components/Alert';

// import {
//   BrowserRouter as Router,
//   Switch,
//   Route,
//  // Link
// } from "react-router-dom";



function App() {
  const [mode,setMode] = useState('light');
  const[alert,Setalert] = useState(null); 

  const showAlert = (message,type)=>
  {
    Setalert({

      msg: message,
      type: type
      
    })

    setTimeout(() =>

    {
      Setalert(null);

    },1500);
  
  }

   const toggleMode = ()=>
   {
     if(mode === 'light')
     {
       setMode('dark');
       document.body.style.backgroundColor='grey';
       showAlert("Dark mode has been enabled","success");
       document.title=' TextUtils - Dark Mode';
     }
    else
     {
       setMode('light');
       document.body.style.backgroundColor='white';
       showAlert("Light mode has been enabled","success");
       document.title=' TextUtils - Light Mode';
     }
   }

  return (

    <>
    {/* <Router> */}
   <Navbar title = "TEXTUTILS" mode={mode} toggleMode={toggleMode} />
    <Alert alert ={alert}/>
       <div className="container my 3">

       {/* <Switch>
          <Route exact path="/about">
            <About />
          </Route> */}
          
          {/* <Route exact path="/"> */}
          <TextForm showAlert={showAlert}  heading =" Enter the text to analyse below" mode={mode} />
           
          {/* </Route>
        </Switch> */}
      
  
 
   </div>
   {/* </Router> */}

   
  
  </>
  );
}

export default App;
