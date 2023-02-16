"use client"

import Image from 'next/image'
import { Inter } from '@next/font/google'
import './starter.css';


import { useState, useEffect } from 'react';
const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  const [activeSection, setActiveSection] = useState(0);
  
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

    const handleClick = (e) => {
      e.preventDefault();
      const sections = document.querySelectorAll('section');
      const nextSection = activeSection + 1;
      if (nextSection < sections.length) {
        setActiveSection(nextSection);
        setTimeout(() => {
          window.scrollTo({
            top: sections[nextSection].offsetTop,
            behavior: 'smooth'
          });
        }, 500);
      }
    };

    window.addEventListener('scroll', handleScroll);
    document.addEventListener('click', handleClick);

    return () => {
      window.removeEventListener('scroll', handleScroll);
      document.removeEventListener('click', handleClick);
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
      <section onClick={() => handleSectionClick(2)} className={`container ${activeSection === 2 ? 'active' : ''}`}>
        <div className="center-box purple"></div>
        <div className="center-box purple"></div>
        <div className="center-box purple"></div>
      </section>
    </div>
  )
}
