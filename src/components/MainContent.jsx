import React from "react";
import {FaGithub, FaFacebook, FaWhatsapp, FaLinkedin} from "react-icons/fa";
import logo from '../my-img.jpg'; 

function MainContent() {
    return(
        <div className="main-container">
            <img src={logo} alt="logo"/>
            <div className="inner-container">
                <h1>About Me!</h1>
                <p>I'm Abubakar Ashiru Yunusa, Student of Computer Science who acquire 
                    a Diploma in Computer Science from Kano State Polytechnic 2019
                    & a Degree in Computer Science from Northwest University, 2024.
                    I'm Certified Full-Stack Developer from Harvard University's CS50, 
                    Using Phython, JavaScript & MySQL Database. I'm now learning React.js 
                    to improve my Frontend Development.
                </p>
                <center><h3>Contact Me Via</h3></center>
                <div className="social-media">
                    <p><a href="https://github.com/assadiq01"><FaGithub  size="2rem" /></a></p>
                    <p><a href="https://web.facebook.com/abubakara.yunus.94/"><FaFacebook size="2rem"  /></a></p>
                    <p><a href="https://wa.me/+2348160203798"><FaWhatsapp  size="2rem" /></a></p>
                    <p><a href="https://www.linkedin.com/in/abubakar-ashiru-yunusa-394745245/"><FaLinkedin  size="2rem" /></a></p>
                </div>
            </div>
        </div>
    )
}

export default MainContent