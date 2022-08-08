import React from "react";
import "../footer.css";
import {FaGithub, FaMediumM, FaLinkedin} from "react-icons/fa";

const Footer = () => {
    return (
        <div>
            <footer className="footer-distributed">

                <div className="footer-left">

                    <h3>Rohit <span>Verma</span></h3>

                    <p className="footer-links">
                        <a href="" className="link-1">Full Stack Developer</a>
                        <a href="">Data Science</a>
                    </p>

                </div>

                <div className="footer-center">

                    <div>
                        <i className="fa fa-map-marker"></i>
                        <p><span>New Delhi</span> India</p>
                    </div>

                    <div>
                        <i className="fa fa-phone"></i>
                        <p><a href="tel:+919625123027">+919625123027</a></p>
                    </div>

                    <div>
                        <i className="fa fa-envelope"></i>
                        <p><a href="mailto:rohitpawanverma9@gmail.com">rohitpawanverma9@gmail.com</a></p>
                    </div>

                </div>

                <div className="footer-right">

                    <p className="footer-company-about">
                        <span>About me</span>
                        I am pursuing a degree in artificial intelligence and data science engineering at a university. I am
                        looking for internships in Web Development and Data Science roles.
                    </p>

                    <div className="footer-icons">

                        <a href="https://medium.com/@rohitverma9625" target="_blank"><FaMediumM/></a>
                        <a href="https://www.linkedin.com/in/rohitverma9625/" target="_blank"><FaLinkedin /></a>
                        <a href="https://github.com/kumar9625" target="_blank"><FaGithub /></a>

                    </div>

                </div>

            </footer>
        </div>

    )
};

export default Footer;