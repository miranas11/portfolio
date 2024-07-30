import React from "react";
import projectImagenew from "../img/project1.1.png";
import projectImage11 from "../img/featured1.1.png";
import projectImage12 from "../img/featured1.2.png";
import projectImage21 from "../img/project2.1.png";
import projectImage22 from "../img/project2.2.png";
import projectImage31 from "../img/project3.1.png";
import projectImage32 from "../img/project3.2.png";
import projectImage41 from "../img/project4.1.png";

import Project from "./Project";

const Projects = () => {
    return (
        <section className="projects container section">
            <h2 className="projects__title">Projects</h2>
            <p className="projects__description">
                Here are some of the projects that i have worked on .
            </p>
            <div className="project__container">
                <Project
                    projectNumber={1}
                    name={"Property Dealer"}
                    image={projectImagenew}
                    description1=" A full-stack web application utilizing Node.js,
                    Express, MongoDB, Mongoose."
                    description2="Enabled user authentication using jwt, registration,
                    login/logout, and facilitated CRUD operations
                    for properties. 
                    "
                    link={"https://alba-demo-sepia.vercel.app/admin"}
                />
                <Project
                    projectNumber={2}
                    name={"CampScape"}
                    image={projectImage11}
                    description1=" A full-stack web application utilizing Node.js,
                    Express, MongoDB, Mongoose, EJS."
                    description2="Enabled user authentication, registration,
                    login/logout, and facilitated CRUD operations
                    for campgrounds. Integrated map functionality to display
                    campground locations using mapBox api.
                    "
                    link={"https://github.com/miranas11/campScape"}
                />
                <Project
                    projectNumber={3}
                    name={"Swiggy Clone"}
                    image={projectImage21}
                    description1="Swiggy Clone built using React.js. Used Swiggys api to load restaurants and their menus."
                    description2="Implemented search functionality in for finding restaurants by name with 
                    filters for top restaurants. Utilized Redux for state management. Implemented lazy loading to improve performance and improve initial page loading time"
                    link={"https://github.com/miranas11/SwiggyDemo"}
                />
                <Project
                    projectNumber={4}
                    name={"Youtube Clone"}
                    image={projectImage31}
                    description1="Youtube Clone built using React.js. Used youtube's V3 api to load videos based on location. "
                    description2="Implemented debouncing in YouTube clone for 
                    optimized search with suggestions. Utilized Redux for state management."
                    link={"https://github.com/miranas11/youtubeClone"}
                />
            </div>
        </section>
    );
};

export default Projects;
