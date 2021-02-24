import React from "react"
import { Link } from 'gatsby'
import { ThemeToggler } from 'gatsby-plugin-dark-mode'
import '../styles/navbar.css'
import logo from '../assets/logo.svg'

export default function Navbar() {
    return (
        <header className="main-head sticky">
            <nav>
                <label for="hamburger" id="hamnav">&#9776;</label>
                <input type="checkbox" id="hamburger" />
                <Link to="/" className="logo-link">
                    <img id="logo-img" src={logo} alt="logo"></img>
                </Link>
                <Link to="/" className="logo-link"><h1 id="logo">pelaman</h1></Link>
                <ul className="nav-links">
                    <Link to="/artikel">artikel</Link>
                    <Link to="/portofolio">portofolio</Link>
                    <Link to="/tentang">tentang</Link>
                </ul>

                <ThemeToggler>
                    {({ theme, toggleTheme }) => (
                        <label className="lbl-checkbox">
                            <input className="checkbox"
                                type="checkbox"
                                onChange={e => toggleTheme(e.target.checked ? 'dark' : 'light')}
                                checked={theme === 'dark'}
                            />{' '}
                            <div className="mode-container">
                                <i className="gg-sun"></i>
                                <i className="gg-moon"></i>
                            </div>
                        </label>
                    )}
                </ThemeToggler>
            </nav>
        </header>
    )
}
