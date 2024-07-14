import './App.css'
import './normalize.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './Componentes/Header/Index'
import Footer from './Componentes/Footer/Index'
import NuevoVideo from './Componentes/Nuevo/Index';
import Home from './Componentes/Home/Index';


function App() {
 

  return (
    <>
      <Router >
        <Header />
        <Routes>
           <Route path='/' element ={<Home />} />
           <Route path='/nuevo-video' element ={<NuevoVideo />} />
        </Routes>
        <Footer />
      </Router>
    </>
  )
}

export default App
