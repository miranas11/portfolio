import React from "react";
import { Link } from "react-router-dom";

const MobileNavbar = ({ hideNavbar, switchTheme }) => {
    const scrollToSection = (event, id) => {
        event.preventDefault();
        const element = document.getElementById(id);
        element.scrollIntoView({ behavior: "smooth" });
    };

    return (
        <div className="mobile-nav">
            <nav className="mobile-nav__menu">
                <ul className="mobile-nav__menu">
                    <li>
                        <Link
                            className="mobile-nav__link"
                            to="#about"
                            onClick={(event) => {
                                hideNavbar();
                                scrollToSection(event, "about");
                            }}
                        >
                            About
                        </Link>
                    </li>
                    <li>
                        <Link
                            className="mobile-nav__link"
                            to="#featured"
                            onClick={(event) => {
                                hideNavbar();
                                scrollToSection(event, "featured");
                            }}
                        >
                            Featured
                        </Link>
                    </li>
                    <li>
                        <Link
                            className="mobile-nav__link"
                            to="#contact"
                            onClick={(event) => {
                                hideNavbar();
                                scrollToSection(event, "contact");
                            }}
                        >
                            Contact
                        </Link>
                    </li>
                    <li className="mobile-nav__link-line"></li>
                    <li>
                        <button
                            className="mobile-nav__sun"
                            onClick={() => {
                                switchTheme();
                            }}
                        >
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                            >
                                <path d="M12 3v2.25m6.364.386l-1.591 1.591M21 12h-2.25m-.386 6.364l-1.591-1.591M12 18.75V21m-4.773-4.227l-1.591 1.591M5.25 12H3m4.227-4.773L5.636 5.636M15.75 12a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0z" />
                            </svg>
                        </button>
                    </li>
                    <li>
                        <Link
                            className="mobile-nav__btn btn"
                            to="https://drive.google.com/file/d/1Vgn0nVJ7gOyRBywB3YYlSAOzgocQ5bjw/view?usp=sharing"
                        >
                            Resume
                        </Link>
                    </li>
                </ul>
            </nav>
        </div>
    );
};

export default MobileNavbar;
