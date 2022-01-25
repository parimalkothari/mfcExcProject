import './App.css';
import Inputform from './components/Inputform';
import Navbar from './components/Navbar';
// import About from './components/About';
import React, { useState } from 'react'
import Alert from './components/Alert';


function App() {

  const [mode, setmode] = useState('light');
  const [alert, setalert] = useState(null);
  const showAlert = (message, type) => {
    setalert({
      msg: message,
      type: type
    })

    setTimeout(() => {
      setalert(null);
    }, 800);

  }
  const togglemode = () => {
    if (mode === 'light') {
      setmode('dark');
      document.body.style.backgroundColor = "black";
    }
    else {
      setmode('light');
      document.body.style.backgroundColor = "white";
    }
  }
  return (
    <>
        <Navbar title="TextUtils" dis="Disabled" mode={mode} togglemode={togglemode} showAlert={showAlert} />
        <Alert alert={alert} />
        <div className="container my-5">
            <Inputform title="ENTER INPUT HERE:" my-3 mode={mode} showAlert={showAlert} />
        </div>
    </>
  );
}



export default App;
