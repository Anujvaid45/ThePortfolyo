import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <header className="bg-gradient-to-r from-black to-gray-600 text-white py-4 px-4 sm:px-8 fixed top-0 left-0 right-0 z-50">
            <div className="container mx-auto flex justify-between items-center">
                <h1 className="text-xl sm:text-2xl font-bold">Your Portfolio</h1>
                <nav>
                    <ul className="flex space-x-4">
                        <li>
                            <Link to="#hero" smooth='true' duration={500} offset={-100}>Hero</Link>
                        </li>
                        <li>
                            <Link to="#abouts" smooth='true' duration={500} offset={-100}>About</Link>
                        </li>
                        <li>
                            <Link to="#skills" smooth='true' duration={500} offset={-100}>Skills</Link>
                        </li>
                        <li>
                            <Link to="#projects" smooth='true' duration={500} offset={-100}>Projects</Link>
                        </li>
                        <li>
                            <Link to="#services" smooth='true' duration={500} offset={-100}>Services</Link>
                        </li>
                        <li>
                            <Link to="#timeline" smooth='true' duration={500} offset={-100}>Timeline</Link>
                        </li>
                        <li>
                            <Link to="#testimonial" smooth='true' duration={500} offset={-100}>Testimonial</Link>
                        </li>
                        <li>
                            <Link to="#contact" smooth='true' duration={500} offset={-100}>Contact</Link>
                        </li>
                    </ul>
                </nav>
            </div>
        </header>
    );
};

export default Header;
