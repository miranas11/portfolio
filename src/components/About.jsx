import React from "react";
import aboutImg from "../img/profile.jpg";

const About = () => {
    return (
        <section id="about" className="about container section">
            <div className="about__content">
                <h2 className="about__title">About</h2>
                <p className="about__description">
                    Hi! I am Mir Anas, a Full-Stack Web Developer and Mobile App
                    Developer.
                </p>
                <p className="about__description">
                    I have completed an intership at Magic EdTech as a Backend
                    Developer where i was tasked to build REST API's using
                    Spring Boot. After completing my intership i started
                    exploring the MERN Stack and i have built several projects
                    while learning the same.
                </p>
                <p className="about__description">
                    I have completed my Bachelors Degree in Computer Science
                    from Sharda University in 2023.
                </p>
                <hr className="about__hr" />
                <h3 className="about__subtitle">Technologies</h3>
                <div className="about__ul-container">
                    <ul className="about__ul">
                        <li className="about__listitems">JavaScript</li>
                        <li className="about__listitems">React.JS</li>
                        <li className="about__listitems">Express</li>
                        <li className="about__listitems">Flutter</li>
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
