import React from "react";
import aboutImg from "../img/profile.jpg";

const About = () => {
    return (
        <section id="about" className="about container section">
            <div className="about__content">
                <h2 className="about__title">About</h2>
                <p className="about__description">
                    Hi! I am Mir Anas, a Full-Stack Web Developer with 2 years
                    of experience
                </p>
                <p className="about__description">
                    I am a Software Development Engineer with a Bachelor of
                    Technology in Computer Science from Sharda University. My
                    expertise spans front-end and back-end development,
                    highlighted by a strong command of Node.js, ReactJs, and
                    JavaScript.
                </p>
                <hr className="about__hr" />
                <h3 className="about__subtitle">Technologies</h3>
                <div className="about__ul-container">
                    <ul className="about__ul">
                        <li className="about__listitems">JavaScript</li>
                        <li className="about__listitems">React.JS</li>
                        <li className="about__listitems">Node.JS</li>
                        <li className="about__listitems">Express</li>
                    </ul>
                    <ul className="about__ul">
                        <li className="about__listitems">MongoDB</li>
                        <li className="about__listitems">MySQL</li>
                        <li className="about__listitems">HTML</li>
                        <li className="about__listitems">CSS</li>
                    </ul>
                </div>
            </div>

            <div className="about__image-container">
                <img
                    className="about__image"
                    src={aboutImg}
                    alt="About Image"
                />
            </div>
        </section>
    );
};

export default About;
