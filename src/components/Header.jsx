import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
    return (
        <header className="header container">
            <nav>
                <ul className="header__menu">
                    <li>
                        <Link className="header__link" to={"#about"}>
                            About
                        </Link>
                    </li>
                    <li>
                        <Link className="header__link" to={"#featured"}>
                            Featured
                        </Link>
                    </li>
                    <li>
                        <Link className="header__link" to={"#contact"}>
                            Contact
                        </Link>
                    </li>
                    <li className="header__line"></li>
                    <li>
                        <button className="header__sun">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke-width="1.5"
                                stroke="currentColor"
                            >
                                <path
                                    stroke-linecap="round"
                                    stroke-linejoin="round"
                                    d="M12 3v2.25m6.364.386l-1.591 1.591M21 12h-2.25m-.386 6.364l-1.591-1.591M12 18.75V21m-4.773-4.227l-1.591 1.591M5.25 12H3m4.227-4.773L5.636 5.636M15.75 12a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0z"
                                />
                            </svg>
                        </button>
                    </li>
                    <li>
                        <Link to={""} className="header__resume btn">
                            Resume
                        </Link>
                    </li>
                </ul>
                <button className="header__bars">
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke-width="1.5"
                        stroke="currentColor"
                    >
                        <path
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
                        />
                    </svg>
                </button>
            </nav>
        </header>
    );
};

export default Header;
