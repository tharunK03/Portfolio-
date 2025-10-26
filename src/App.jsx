// App.jsx
import React from 'react';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Portfolio from './pages/Portfolio';
import About from './pages/About';
import Experience from './pages/Experience';
import LeetCode from './pages/LeetCode';
import Contact from './pages/Contact';
import './styles/App.css';

function App() {
  return (
    <div className="app">
      <Navbar />
      <main className="main-content">
        <section id="home" className="section">
          <Home />
        </section>
        
        <section id="about" className="section">
          <About />
        </section>
        
        <section id="experience" className="section">
          <Experience />
        </section>
        
        <section id="portfolio" className="section">
          <Portfolio />
        </section>
        
        <section id="leetcode" className="section">
          <LeetCode />
        </section>
        
        <section id="contact" className="section">
          <Contact />
        </section>
      </main>
    </div>
  );
}

export default App;