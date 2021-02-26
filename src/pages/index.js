import React from "react"
import Header from "../components/Header"
import Footer from "../components/Footer"

export default function Home() {
  return <div className="layout">
    <Header/>
    <div className="main">
      <p>
        This is a starting point. Keep that in mind, in case you get lost.
      </p>
    </div>
    <Footer />
    </div>
}
