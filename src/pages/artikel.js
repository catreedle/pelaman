import React from "react"
import Footer from "../components/Footer"
import Header from "../components/Header"
export default function Artikel() {
    return (
        <div className="layout">
            <Header headerText='artikel' />
            <div className="main">
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi nesciunt unde, dignissimos voluptates cumque numquam provident dolore distinctio aspernatur nam.</p>
            </div>
            <Footer/>
        </div>
    )
}