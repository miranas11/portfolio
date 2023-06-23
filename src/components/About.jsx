import React from "react";
import aboutImg from "../img/profile.jpg";

const About = () => {
    return (
        <section className="about container section">
            <div className="about__content">
                <h2 className="about__title">About</h2>
                <p className="about__description">
                    dfsamfd kjhdfdhad hkasdfh kdsahf ah dkshafjdhaskf hdashdska
                    hfkahsfjk dfaskhkfhask hsad fkhas fhdsakh h skahf kashf dash
                    fkdashkajsdh fkjhasf fsjafhgahs g
                </p>
                <p className="about__description">
                    kjafhs kkhdskaf hkajsf askf dhsaf ashfkashf dsakhfkdsahf
                    ksdah fsdahkfdsafh kasfagfwueyufi sjh jxanmakqew fdaf
                    dasjgfye fasdkqf asjhfjdsagfeuq sdafgfeq fdsajfd egfqouqoefq
                    dsajddg am,babmdanf qoeeqpfads{" "}
                </p>
                <p className="about__description">
                    dfakjhfjkahfhak fkdh fkasfh dsaihfdkja fkdahsfkdhskfh
                    daskhfahfhakd fhaskfhdkjah d dhah kjahak hda
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
