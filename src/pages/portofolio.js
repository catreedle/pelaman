import React from "react"
import Footer from "../components/Footer"
import Header from "../components/Header"
export default function Portofolio() {
    return (
        <div className="layout">
            <Header headerText="portofolio" />
            <div className="main">
                <p>
                    Things I've built... Hopefully this section won't stay empty for long
                </p>
            </div>
            <Footer/>
        </div>
    )
}