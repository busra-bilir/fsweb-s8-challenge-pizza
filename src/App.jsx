import { useState } from 'react'
import reactLogo from './assets/react.svg'
import workintech from '/workintech.svg'
import './App.css'
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from './components/Home.jsx';
import Siparis from './components/Siparis.jsx'; 
import Onay from './components/Onay.jsx';


function App() {
  const [count, setCount] = useState(0)

const [errors, setErrors] = useState({});

const validate = () => {
  const newErrors = {};
  if ( form.isim.trim().length < 3 ) {
    newErrors.isim = "İsim en az 3 karakter olmalıdır.";
  }
  if (!form.boyut) {
    newErrors.boyut = "Boyut seçilmelidir.";
  }
  if (form.malzemeler.length === 4) {
    newErrors.malzemeler = "En az 4 malzeme seçilmelidir.";
  }
  return newErrors;
};

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/siparis" element={<Siparis />} />
        <Route path="/onay" element={<Onay />} />
      </Routes>
    
      <div>
        <a href="https://github.com/Workintech/fsweb-s7-challenge-pizza" target="_blank">
          <img src={workintech} className="logo" alt="Workintech logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Workintech + 🍕</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          Absolute Acı Pizza sayısı {count}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Workintech or Pizza logos to learn more
      </p>
    </Router>
  )
}

export default App
