import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
    const [isNavOpen, setIsNavOpen] = useState(false);

    const toggleNav = () => {
        setIsNavOpen(!isNavOpen);
    };

    return (
        <header className="bg-gradient-to-r from-black to-gray-600 text-white py-0.25 px-4 sm:px-8 fixed top-0 left-0 right-0 z-50">
            <div className="container mx-auto flex flex-wrap justify-between items-center">
                <h1 className="text-xl sm:text-2xl font-bold w-full sm:w-auto mb-4 sm:mb-0">Your Portfolio</h1>
                <div className="w-full sm:w-auto">
                    <button
                        id="nav-toggle"
                        className="block sm:hidden text-white focus:outline-none"
                        onClick={toggleNav}
                    >
                        <svg className="h-6 w-6" viewBox="0 0 20 20" fill="currentColor">
                            <path fillRule="evenodd" d="M3 9h14a1 1 0 110 2H3a1 1 0 110-2zm0-4h14a1 1 0 110 2H3a1 1 0 110-2zm0 8h14a1 1 0 110 2H3a1 1 0 110-2z" clipRule="evenodd" />
                        </svg>
                    </button>
                    <nav className={`sm:flex sm:items-center sm:w-auto ${isNavOpen ? 'block' : 'hidden'}`} id="nav-content">
                        <ul className="flex flex-col sm:flex-row justify-center sm:justify-end space-y-4 sm:space-y-0 sm:space-x-4">
                            <li>
                                <Link to="#hero" smooth={true} duration={500} offset={-100} onClick={toggleNav}>Hero</Link>
                            </li>
                            <li>
                                <Link to="#abouts" smooth={true} duration={500} offset={-100} onClick={toggleNav}>About</Link>
                            </li>
                            <li>
                                <Link to="#skills" smooth={true} duration={500} offset={-100} onClick={toggleNav}>Skills</Link>
                            </li>
                            <li>
                                <Link to="#projects" smooth={true} duration={500} offset={-100} onClick={toggleNav}>Projects</Link>
                            </li>
                            <li>
                                <Link to="#services" smooth={true} duration={500} offset={-100} onClick={toggleNav}>Services</Link>
                            </li>
                            <li>
                                <Link to="#timeline" smooth={true} duration={500} offset={-100} onClick={toggleNav}>Timeline</Link>
                            </li>
                            <li>
                                <Link to="#testimonial" smooth={true} duration={500} offset={-100} onClick={toggleNav}>Testimonial</Link>
                            </li>
                            <li>
                                <Link to="#contact" smooth={true} duration={500} offset={-100} onClick={toggleNav}>Contact</Link>
                            </li>
                        </ul>
                    </nav>
                </div>
            </div>
        </header>
    );
};

export default Header;

