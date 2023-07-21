import React, { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import '../styling/Navbar.css'

const Navbar = () => {
    const [navbarColor, setNavbarColor] = useState('rgba(51, 51, 51, 1)');
    const location = useLocation();

    useEffect(() => {
        const changeNavbarColor = () => {
            if (window.scrollY >= 80) {
                setNavbarColor('rgba(51, 51, 51, 0.5)');
            } else {
                setNavbarColor('rgba(51, 51, 51, 1)');
            }
        };
        window.addEventListener('scroll', changeNavbarColor);
        return () => window.removeEventListener('scroll', changeNavbarColor);
    }, []);

    return (
        <nav className="navbar" style={{ backgroundColor: navbarColor }}>
            <Link to="/" className={location.pathname === '/' ? 'active' : ''}>
                Home
            </Link>
            <Link to="/portfolio" className={location.pathname === '/portfolio' ? 'active' : ''}>
                Portfolio
            </Link>
            <Link to="/skills" className={location.pathname === '/skills' ? 'active' : ''}>
                Skills
            </Link>
            {/* <Link to="/contact" className={location.pathname === '/contact' ? 'active' : ''}>
                Contact
            </Link> */}
        </nav>
    );
}

export default Navbar;
