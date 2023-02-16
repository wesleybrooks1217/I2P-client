import Image from 'next/image'
import { Inter } from '@next/font/google'
import './starter.css';
"use client"

import { useState } from 'react';
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

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div>
      {/* First section */}
      <section className={`container ${activeSection === 0 ? 'active' : ''}`}>
        <div className="box blue"></div>
        <div className="box blue"></div>
      </section>

      {/* Second section */}
      <section className={`container ${activeSection === 1 ? 'active' : ''}`}>
        <div className="box gray"></div>
        <div className="box gray"></div>
        <div className="box gray"></div>
        <div className="box gray"></div>
      </section>

      {/* Third section */}
      <section className={`container ${activeSection === 2 ? 'active' : ''}`}>
        <div className="center-box purple"></div>
        <div className="center-box purple"></div>
        <div className="center-box purple"></div>
      </section>
    </div>
  )
}
