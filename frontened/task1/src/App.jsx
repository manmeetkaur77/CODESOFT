
import React from 'react';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import WelcomeContent from './components/middle';
import './App.css';  // Custom CSS file



function App() {
  return (
    <div className="app d-flex flex-column min-vh-100">
      <Navbar />
      <main className="flex-fill d-flex flex-column">
        <WelcomeContent />
      </main>
      <Footer />
    </div>
  );
}

export default App;
