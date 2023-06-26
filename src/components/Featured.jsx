import React from "react";
import featured1 from "../img/featured1.1.png";
import featured2 from "../img/featured1.2.png";
import featured3 from "../img/featured1.3.png";
import featured4 from "../img/featured1.4.png";
import featured5 from "../img/featured1.5.png";
import featured6 from "../img/featured1.6.png";
import featured7 from "../img/featured1.7.png";

const Featured = () => {
    return (
        <section id="featured" className="featured section container">
            <div className="featured__content">
                <h3 className="featured__subtitle">Featured Projects</h3>
                <h2 className="featured__title">Campscape</h2>
                <a
                    className="featured__link"
                    href="https://github.com/miranas11/campScape"
                    target="_blank"
                >
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                    >
                        <path d="M13.19 8.688a4.5 4.5 0 011.242 7.244l-4.5 4.5a4.5 4.5 0 01-6.364-6.364l1.757-1.757m13.35-.622l1.757-1.757a4.5 4.5 0 00-6.364-6.364l-4.5 4.5a4.5 4.5 0 001.242 7.244" />
                    </svg>
                </a>
                <p className="featured__description">
                    A full-stack web application utilizing Node.js, Express,
                    MongoDB, Mongoose, EJS. • Enabled user authentication,
                    registration, login/logout, and facilitated CRUD operations
                    for campgrounds • Integrated map functionality to display
                    campground locations using mapBox api. W
                </p>
                <div className="featured__info-container">
                    <div>
                        <h3 className="featured__label">Tech Stack</h3>
                        <ul className="featured__tech-stack">
                            <li className="featured__info">JavaScript</li>
                            <li className="featured__info">Express.JS</li>
                            <li className="featured__info">MongoDB</li>
                            <li className="featured__info">HTML</li>
                            <li className="featured__info">CSS</li>
                            <li className="featured__info"> </li>
                        </ul>
                    </div>

                    <div>
                        <h3 className="featured__label">Project Type</h3>
                        <p className="featured__info">FullStack</p>
                    </div>
                    <div>
                        <h3 className="featured__label">Timeline</h3>
                        <p className="featured__info">Mar 2023 - present</p>
                    </div>
                </div>
            </div>

            <div className="featured__image-container">
                <div className="featured__image-wrapper">
                    <img src={featured1} alt="project image"></img>
                </div>
                <div className="featured__image-wrapper">
                    <img src={featured2} alt="project image"></img>
                </div>
                <div className="featured__image-wrapper">
                    <img src={featured3} alt="project image"></img>
                </div>
                <div className="featured__image-wrapper">
                    <img src={featured4} alt="project image"></img>
                </div>
                <div className="featured__image-wrapper">
                    <img src={featured5} alt="project image"></img>
                </div>
                <div className="featured__image-wrapper">
                    <img src={featured7} alt="project image"></img>
                </div>
            </div>
        </section>
    );
};

export default Featured;
