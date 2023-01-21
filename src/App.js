import './App.css';
// import About from './components/About';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import React, {useState} from 'react'
import Alert from './components/Alert';
// import {
//   BrowserRouter as Router,
//   Switch,
//   Route,
//   // Link
// } from "react-router-dom";

function App() {

  const [mode, setMode] = useState('light');
  
  const [toggleText, setToggleText] = useState('Enable Dark Mode');
  const [alert, setAlert] = useState(null);
  const showAlert =(message,type)=>{
    setAlert({
      message:message,
      type:type
     })
     setTimeout(() => {
       setAlert(null);
      }, 1000);
    }

    const toggleMode =()=>{
    if(mode ==='dark'){
      setMode ('light');
      setToggleText("Enable Dark Mode")
      document.body.style.backgroundColor='white';
      showAlert("Light mode has enable","success")
    }
    else {
      setMode ('dark')
      setToggleText("Enable Light Mode")
      document.body.style.backgroundColor='#042743';
      showAlert("Dark mode has enable","success")

    }
  }
  return (
    <>
    {/* <Router> */}

  <Navbar title="TextUtils" mode={mode} toggleMode={toggleMode} toggleText={toggleText}/>
  <Alert alert={alert}/>
    <div className="container my-3">
  {/* <Switch>
          <Route exact path="/about">
            <About mode={mode} />
          </Route> 
         <Route exact path="/"> */}
            <TextForm  heading="Enter the text to analyze" mode={mode} showAlert={showAlert}/> 
          {/* </Route>  */}
         {/* </Switch>  */}
        </div>
     {/* </Router>  */}
      </>
  );
  
}
  

export default App;
