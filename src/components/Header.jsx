// import React from 'react';
// import { Link } from 'react-router-dom';

// const Header = () => {
//     return (
//         <header className="bg-gray-800 text-white shadow-md">
//             <div className="container mx-auto flex justify-between items-center py-4 px-8">
//                 <Link to="/" className="text-lg font-bold">Your Portfolio</Link>
//                 <nav className="space-x-4">
//                     <Link to="/about" className="hover:text-gray-300">About</Link>
//                     <Link to="/skills" className="hover:text-gray-300">Skills</Link>
//                     <Link to="/projects" className="hover:text-gray-300">Projects</Link>
//                     <Link to="/contact" className="hover:text-gray-300">Contact</Link>
//                 </nav>
//             </div>
//         </header>
//     );
// };

// export default Header;


import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <header className="bg-gray-900 text-white py-4 px-4 sm:px-8 fixed top-0 left-0 right-0 z-50">
            <div className="container mx-auto flex justify-between items-center">
                <h1 className="text-xl sm:text-2xl font-bold">Your Portfolio</h1>
                <nav>
                    <ul className="flex space-x-4">
                        <li>
                            <Link to="#hero" smooth={true} duration={500} offset={-100}>About</Link>
                        </li>
                        <li>
                            <Link to="#skills" smooth={true} duration={500} offset={-100}>Skills</Link>
                        </li>
                        <li>
                            <Link to="#projects" smooth={true} duration={500} offset={-100}>Projects</Link>
                        </li>
                        <li>
                            <Link to="#services" smooth={true} duration={500} offset={-100}>Services</Link>
                        </li>
                        <li>
                            <Link to="#timeline" smooth={true} duration={500} offset={-100}>Timeline</Link>
                        </li>
                        <li>
                            <Link to="#testimonial" smooth={true} duration={500} offset={-100}>Testimonial</Link>
                        </li>
                        <li>
                            <Link to="#contact" smooth={true} duration={500} offset={-100}>Contact</Link>
                        </li>
                    </ul>
                </nav>
            </div>
        </header>
    );
};

export default Header;
