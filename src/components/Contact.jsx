import React from "react";

const Contact = () => {
    return (
        <section id="contact" className="contact section container">
            <h2 className="contact__title">Get In Contact</h2>
            <p className="contact__description">
                Feel free to reach out to me for any inquiries or opportunities.
            </p>
            <div className="contact__btn-wrapper">
                <a
                    className="contact__btn btn"
                    href="mailto:anasmir24@gmail.com"
                    target="_blank"
                >
                    E-Mail
                </a>
                <a
                    className="contact__btn btn"
                    href="https://www.linkedin.com/in/miranas11/"
                    target="_blank"
                >
                    LinkedIn
                </a>
            </div>
        </section>
    );
};

export default Contact;
