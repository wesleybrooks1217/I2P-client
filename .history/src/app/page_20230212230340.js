"use client"

import Image from 'next/image'
import { Inter } from '@next/font/google'
import './starter.css';


import { useState, useEffect } from 'react';
const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  const [activeSection, setActiveSection] = useState(0);

  const handleSectionClick = (index) => {
    setActiveSection(index);
    const section = document.querySelectorAll('section')[index];
    section.scrollIntoView({ behavior: 'smooth' });
  };
  useEffect(() => {
    const handleScroll = () => {
      const sections = document.querySelectorAll('section');
      for (let i = 0; i < sections.length; i++) {
        if (window.scrollY >= sections[i].offsetTop && window.scrollY < sections[i].offsetTop + sections[i].offsetHeight) {
          setActiveSection(i);
          break;
        }
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div>
      {/* First section */}
      <section onClick={() => handleSectionClick(1)} className={`container ${activeSection === 0 ? 'active' : ''}`}>
        <div className="box blue"></div>
        <div className="box blue"></div>
      </section>

      {/* Second section */}
      <section onClick={() => handleSectionClick(2)} className={`container ${activeSection === 1 ? 'active' : ''}`}>
        <div className="box gray"></div>
        <div className="box gray"></div>
        <div className="box gray"></div>
        <div className="box gray"></div>
      </section>

      {/* Third section */}
      <section className="container">
      {[0, 1, 2].map((index) => (
        <div
          key={index}
          className={`center-box ${selectedBox === index ? 'blue' : 'purple'}`}
          onClick={() => handleBoxClick(index)}
        />
      ))}
    </section>
     
     
     
     
    </div>
  )
}
