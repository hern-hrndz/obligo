import React from 'react';
import logoLight from "../assets/images/logoLight.png";

export const Footer = () => {
    return (
        <footer className="padding-block-500 bg-clr-black txt-accent-clr-gray">
            <div className="container">
                <div className="two-column">
                    <div>
                        <a href="#"><img src={logoLight} width={200} height={200} alt="logo" /></a>
                        <ul role="list" aria-label="Social links">
                            <li><a aria-label="instagram" href="http://instagram"></a></li>
                            <li><a aria-label="twitter" href="http://twitter"></a></li>
                            <li><a aria-label="Discord" href="http://Discord"></a></li>
                            <li><a aria-label="Youtube" href="http://youtube"></a></li>
                        </ul>
                    </div>

                    <div>
                        <nav className="footer-nav">
                            <ul role="list" aria-label="Footer">
                                <p>Product</p>
                                <li><a href="#"></a>Overview</li>
                                <li><a href="#"></a>Community</li>
                                <li><a href="#"></a></li>
                                <p>Company</p>
                                <li><a href=""></a>About Us</li>
                                <li><a href=""></a>Contact Us</li>
                            </ul>
                        </nav>
                    </div>

                    <div>
                        <nav className="secondary-nav">
                            <ul role="list" aria-label="secondary-footer">
                                {/* <li><a href="#"></a>Dark Mode</li>
                                <label class="switch">
                                    <input type="checkbox">
                                        <span class="slider"></span>
                                </label> */}

                                <li><a href="#"></a>©2023 Obligo Labs, Inc.</li>
                            </ul>
                        </nav>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;