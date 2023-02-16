import React, { useState } from "react";
import './globals.css';
'use client'

const NavBarA = () => {
    return (
        <nav className="navbar-a">
            <div className="navbar-a-box">
                <div className="navbar-a-box-red" />
                <div className="nav-a-box-text"> Box 1 </div>
            </div>
            <div className="navbar-a-box">
                <div className="navbar-a-box-red" />
                <div className="nav-a-box-text"> Box 2 </div>
            </div>
            <div className="navbar-a-box">
                <div className="navbar-a-box-red" />
                <div className="nav-a-box-text"> Box 3 </div>
            </div>
            <div className="navbar-a-box">
                <div className="navbar-a-box-red" />
                <div className="nav-a-box-text"> Box 4 </div>
            </div>
            <div className="navbar-a-box">
                <div className="navbar-a-box-red" />
                <div className="nav-a-box-text"> Box 5 </div>
            </div>
        </nav>
    );
};

const NavBarB = () => {
    const [selectedIndex, setSelectedIndex] = useState(0);
    const options = [ { image: '/', text: 'MyCourses'}, { image: '/', text: 'MyColleges'}, { image: '/', text: 'MyCareers'}];
    
    const handlePrevious = () => {
        if (selectedIndex === 0) {
            setSelectedIndex(options.length - 1);
        } else {
            setSelectedIndex(selectedIndex - 1);
        }
    };

    return (
        <nav className="navbar-b">
            <div className="navbar-b-box">
                <div className="navbar-b-box-red" />
                <div className="navbar-b-box-text"> Box 1 </div>
            </div>
            <div className="navbar-b-carousel">
                <div className="navbar-b-carousel-left-arrow" onClick={handlePrevious} />
                <div className="navbar-b-carousel-image">
                    <img src={options[selectedIndex].image} alt={options[selectedIndex].text} />
                </div>
                <div className="navbar-b-carousel-text"> {options[selectedIndex].text} </div>
            </div>
        </nav>
    )
}