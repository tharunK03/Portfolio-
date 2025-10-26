import React from 'react';
import { motion } from 'framer-motion';
import '../styles/Home.css';

export default function Home() {
  return (
    <div className="home-container">
      <div className="text-content">
        <motion.p 
          className="intro"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          Hello, I'm
        </motion.p>
        
        <motion.h1 
          className="name"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          Tharun K
        </motion.h1>
        
        <motion.h2 
          className="title"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          AIML Student & Problem Solver
        </motion.h2>
        
        <motion.p 
          className="desc"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.6 }}
        >
          Passionate about Artificial Intelligence, Machine Learning, and building innovative projects. 
          I love solving complex problems and turning ideas into reality through code. 
          Currently exploring the fascinating world of AI while developing practical solutions.
        </motion.p>
        
        <motion.div 
          className="skills"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.8 }}
        >
          {['Python', 'Machine Learning', 'Deep Learning', 'Problem Solving', 'Data Structures', 'AI Projects'].map((skill) => (
            <span key={skill}>{skill}</span>
          ))}
        </motion.div>
        
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 1 }}
        >
          <a href="#contact" className="glow-button">
            Let's Collaborate <span className="arrow">→</span>
          </a>
        </motion.div>
        
        <motion.div 
          className="socials"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 1.2 }}
        >
          <a href="https://www.linkedin.com/in/tharun-k03/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
            <i className="fab fa-linkedin"></i>
          </a>
          <a href="https://github.com/tharunK03" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
            <i className="fab fa-github"></i>
          </a>
          <a href="https://leetcode.com/u/Tharun_03k/" target="_blank" rel="noopener noreferrer" aria-label="LeetCode">
            <i className="fas fa-code"></i>
          </a>
        </motion.div>
      </div>
      
      <motion.div 
        className="image-content"
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5, delay: 0.3 }}
      >
        <div className="glow-ring">
          <img 
            src="/assets/Tharun.png" 
            alt="Tharun K - AIML Student" 
          />
        </div>
      </motion.div>
    </div>
  );
}