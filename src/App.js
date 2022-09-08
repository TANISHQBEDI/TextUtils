// import logo from './logo.svg';
import './App.css';
import NavBar from './components/NavBar'
import Textform from './components/TextForm';
import About from './components/About';
import Footer from './components/Footer';
import { useState } from 'react';
import Alert from './components/Alert';
import ReactDOM from "react-dom/client";
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";


function App() {
  const [mode, setMode] = useState('light')
  const[txtCol,setTxtCol]=useState('dark')
  const [alert, setAlert] = useState(null)
  const showAlert=(message,type)=>{
    setAlert({
      msg:message,
      type:type
    })
    setTimeout(() => {
      setAlert(null)
    }, 1500);
  }
  const toggleMode=(modetype)=>{
      if(modetype==='light')
      {
        setMode('light')
        setTxtCol('light')
        document.body.style.backgroundColor='#f8f9fa'
        showAlert('Light mode has been enabled','success')
        document.title='TextUtils Light Mode'
      }
      else if(modetype==='dark')
      {
        setMode('dark')
        setTxtCol('dark')
        document.body.style.backgroundColor='#212529'
        showAlert('Dark mode has been enabled','success')
        document.title='TextUtils Dark Mode'
        
      }
      else if(modetype==='danger')
      {
        setMode('danger')
        setTxtCol('danger')
        document.body.style.backgroundColor='#dc3545'
        showAlert('Danger mode has been enabled','success')
        document.title='TextUtils Red Mode'
      }
      else if(modetype==='primary')
      {
        setMode('primary')
        setTxtCol('primary')
        document.body.style.backgroundColor='#0d6efd'
        showAlert('Primary mode has been enabled','success')
        document.title='TextUtils Blue Mode'
      }
    
  }



  return (
    <>
    <BrowserRouter>
    <NavBar title="TextUtils" mode={mode} toggleMode={toggleMode}/>
        <Alert alert={alert}/>
        <div className={`container my-3 bg-${mode}`}>
          <Routes>
            <Route path="/about" element={<About txtcol={txtCol} mode={mode} toggleMode={toggleMode} />}>
            </Route>
            <Route path="/" element={<Textform heading="Enter text to analyze" txtcol={txtCol} mode={mode} showAlert={showAlert} />}>
            </Route>
          </Routes>
          
        </div>
        {/* <About mode={mode} toggleMode={toggleMode}/> */}
        <Footer mode={mode} toggleMode={toggleMode}/>
    </BrowserRouter>
        
        
    </>
  );
}

export default App;
