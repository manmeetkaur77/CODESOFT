
import React from 'react';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import WelcomeContent from './components/middle';
import about from './components/about';
import Home from './pages/hompage';
import { BrowserRouter,Route,Routes} from 'react-router-dom';
import './App.css';  // Custom CSS file



function App() {
  return (
    <BrowserRouter>
      <Routes>
      <Route path='/' element={<div><Home /></div>}></Route>
      <Route path='/profile' element={<div><h1>hiii</h1></div>}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
