import React from "react"
import Footer from "../components/Footer"
import Header from "../components/Header"
export default function Artikel() {
    return (
        <div className="layout">
            <Header headerText='artikel' />
            <div className="main">
                <p>My God. I freaking hate CSS.</p>
            </div>
            <Footer/>
        </div>
    )
}