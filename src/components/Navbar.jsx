import React, { useState, useEffect } from 'react';
import '../styles/Navbar.css';

const Navbar = () => {
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['home', 'about', 'experience', 'portfolio', 'leetcode', 'contact'];
      const scrollPosition = window.scrollY + 100;

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const { offsetTop, offsetHeight } = element;
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId, event) => {
    event.preventDefault();
    const element = document.getElementById(sectionId);
    if (element) {
      const navbarHeight = document.querySelector('.navbar').offsetHeight;
      const elementPosition = element.offsetTop - navbarHeight;
      window.scrollTo({
        top: elementPosition,
        behavior: 'smooth'
      });
    }
  };

  return (
    <nav className="navbar">
      <div className="navbar-container">
        <a href="#home" onClick={(e) => scrollToSection('home', e)} className="navbar-logo">
          Tharun
        </a>
        <ul className="nav-menu">
          <li className="nav-item">
            <a 
              href="#home" 
              onClick={(e) => scrollToSection('home', e)} 
              className={`nav-link ${activeSection === 'home' ? 'active' : ''}`}
            >
              Home
            </a>
          </li>
          <li className="nav-item">
            <a 
              href="#about" 
              onClick={(e) => scrollToSection('about', e)} 
              className={`nav-link ${activeSection === 'about' ? 'active' : ''}`}
            >
              About
            </a>
          </li>
          <li className="nav-item">
            <a 
              href="#experience" 
              onClick={(e) => scrollToSection('experience', e)} 
              className={`nav-link ${activeSection === 'experience' ? 'active' : ''}`}
            >
              Experience
            </a>
          </li>
          <li className="nav-item">
            <a 
              href="#portfolio" 
              onClick={(e) => scrollToSection('portfolio', e)} 
              className={`nav-link ${activeSection === 'portfolio' ? 'active' : ''}`}
            >
              Portfolio
            </a>
          </li>
          <li className="nav-item">
            <a 
              href="#leetcode" 
              onClick={(e) => scrollToSection('leetcode', e)} 
              className={`nav-link ${activeSection === 'leetcode' ? 'active' : ''}`}
            >
              LeetCode
            </a>
          </li>
          <li className="nav-item">
            <a 
              href="#contact" 
              onClick={(e) => scrollToSection('contact', e)} 
              className={`nav-link ${activeSection === 'contact' ? 'active' : ''}`}
            >
              Contact
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;