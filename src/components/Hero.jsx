import React from "react";
import profilePhoto from "../img/profile.jpg";

const Hero = () => {
    return (
        <section className="hero container">
            <img
                className="hero__image"
                src={profilePhoto}
                alt="Profile Photo"
            ></img>
            <h2 className="hero__subtitle">Hello, I am Anas</h2>
            <h1 className="hero__title">
                FULL-STACK<br></br> DEVELOPER
            </h1>
            <p className="hero__description">
                A passionate <strong>Software Engineer</strong> specialized in
                building full stack applications. TechStack -
                <strong>
                    React.js, Express.js, Node.js, Express.js, MongoDB, MySQL,
                    Redux
                </strong>{" "}
            </p>
            <a
                className="hero__btn btn"
                href="https://www.linkedin.com/in/miranas11/"
                target="_blank"
            >
                Reach Out
            </a>
        </section>
    );
};

export default Hero;
