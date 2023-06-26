import React from "react";
import { useRef } from "react";

const Project = ({
    name,
    image,
    description1,
    description2,
    projectNumber,
    link,
}) => {
    return (
        <div className="project">
            <h3 className="project__title">{name}</h3>
            <div
                className={
                    "project__image-wrapper project__image" + projectNumber
                }
            >
                <img className="project__image" src={image} alt=""></img>
            </div>

            <div className={"project__content" + projectNumber}>
                <h3 className="project__title-grid">{name}</h3>
                <p className="project__description1">{description1}</p>
                <p className="project__description2">{description2}</p>
                <a className="btn project__btn" href={link} target="_blank">
                    Website
                </a>
            </div>
        </div>
    );
};

export default Project;
