import React from "react"
import Navbar from "./Navbar"

export default function Header(props) {
    return (
        <div>
            <Navbar />
            <h1 className="primary-heading">{props.headerText}</h1>
        </div>
    )
}


