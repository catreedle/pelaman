import React from "react"
import '../styles/footer.css'
import github from '../assets/github.svg'
import instagram from '../assets/instagram.svg'
import linkedin from '../assets/linkedin.svg'
import medium from '../assets/medium.svg'
import twitter from '../assets/twitter.svg'

export default function Footer() {
    return (
        <footer className="footer">
            <ul className="social-media">
                <li><a href="https://www.github.com/catreedle"><img className="glow-button" src={github} alt="github" /></a></li>
                <li><a href="https://www.linkedin.com/in/purnamasrahayu"><img className="glow-button" src={linkedin} alt="linkedin" /></a></li>
                <li><a href="https://www.medium.com/purnamasidirahayu"><img className="glow-button" src={medium} alt="medium" /></a></li>
                <li><a href="https://www.instagram.com/catwitchcraft"><img className="glow-button" src={instagram} alt="instagram" /></a></li>
                <li><a href="https://www.twitter.com/catreedle"><img className="glow-button" src={twitter} alt="twitter" /></a></li>
            </ul>
            <div className="footer-text">
                &copy; 2020 Purnama S Rahayu &ndash;
                Built with <a href="https://www.gatsbyjs.com/">Gatsby </a>&ndash; Hosted on <a href="https://www.netlify.com/">Netlify</a>
            </div>
        </footer>
    )
}


