import React, { useState } from 'react';
import "./styles/Header.css";
import logoLight from "../assets/images/logoLight.png";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEllipsis, faXmark } from '@fortawesome/free-solid-svg-icons';
// import { FaArro } from '@fortawesome/free-regular-svg-icons';
export const Header = () => {
    const [navVisible, setNavVisible] = useState(false);

    const handleToggle = () => {
        setNavVisible(!navVisible);
        document.body.classList.toggle('no-scroll');
    };

    const handleClose = () => {
        setNavVisible(false);
        document.body.classList.remove('no-scroll');
    };

    return (
        <header className="primary-header">
            <div className="container">
                <div className="nav-wrapper">
                    <div className="logo-container">
                        <a href="#"><img src={logoLight} alt="logo" width={200} height={200} /></a>
                    </div>
                    <button
                        className="mobile-nav-toggle"
                        id="nav-button"
                        aria-controls="primary-navigation"
                        aria-expanded={navVisible}
                        onClick={handleToggle}
                    >
                        <FontAwesomeIcon icon={faEllipsis} aria-hidden="true" />
                        {/* <i className="fa fa-bars fa-lg" aria-hidden="true"></i> */}
                        <span className="visually-hidden">Menu</span>
                    </button>

                    <nav
                        className={`primary-navigation ${navVisible ? 'visible' : ''}`}
                        id="primary-navigation"
                        aria-label="menu"
                    >
                        <FontAwesomeIcon className="navIcon-close" icon={faXmark} aria-hidden="true" onClick={handleClose} />
                        {/* <i className="fa fa-times fa-lg" aria-hidden="true" onClick={handleClose}></i> */}
                        <ul aria-label="Primary" role="list" className="nav-list">
                            <li><a href="#">Focus</a></li>
                            <li><a href="#">Community</a></li>
                            <li><a href="#">About</a></li>
                            <li><a href="#">Login</a></li>
                        </ul>
                    </nav>
                    <button className="button | display-sm-none display-md-inline-flex">Get Started</button>
                </div>
            </div>
        </header>
    );
}

export default Header;