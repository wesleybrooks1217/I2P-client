import Image from 'next/image'
import { Inter } from '@next/font/google'
import './starter.css';

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <div>
      {/* First section */}
      <section className="container">
        <div className="box blue"></div>
        <div className="box blue"></div>
      </section>

      {/* Second section */}
      <section className="container">
        <div className="box gray"></div>
        <div className="box gray"></div>
        <div className="box gray"></div>
        <div className="box gray"></div>
      </section>

      {/* Third section */}
      <section className="container">
        <div className="center-box purple"></div>
        <div className="center-box purple"></div>
        <div className="center-box purple"></div>
      </section>
    </div>
  )
}
