
import Main from './Container/Main'
import './App.css'
import Sobre from './Container/Sobre'
import Destaque from './Container/Destaque'
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import Header from './Components/Header';

function App() {

  return (
    <>
    <BrowserRouter>
   <header>
    <Link to='/'> <button>Home</button></Link>
      <Link to='/sobre'><button>Sobre</button></Link>
      <Link to='/destaque'><button>Destaque</button></Link>
   </header>
    <Routes>
    <Route path="/" element={<Main />} />
        <Route path="/sobre" element={<Sobre />} />
        <Route path="/destaque" element={<Destaque />} />
    </Routes>
    <footer className='footer' >
      <h3>Bruno Pedro - 2025</h3>
    </footer>
    </BrowserRouter>
    </>
  )
}

export default App
