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
                FULL-STACK<br></br> WEB DEVELOPER
            </h1>
            <p className="hero__description">
                A passionate <strong>Full Stack web developer</strong>{" "}
                specialized in building stunning websites. TechStack -
                <strong>
                    React.js, Express.js, SpringBoot, MongoDB, MySQL, Flutter
                </strong>{" "}
            </p>
            <a className="hero__btn btn" href="">
                Reach Out
            </a>
        </section>
    );
};

export default Hero;
