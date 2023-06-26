import React from "react";
import Hero from "./Hero";
import About from "./About";
import Featured from "./Featured";
import Projects from "./Projects";
import Contact from "./Contact";

const Body = () => {
    return (
        <main>
            <Hero />
            <About />
            <Featured />
            <Projects />
            <Contact />
        </main>
    );
};

export default Body;
