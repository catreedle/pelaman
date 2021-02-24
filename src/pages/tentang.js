import React from "react"
import Footer from "../components/Footer"
import Header from "../components/Header"
export default function Tentang() {
    return (
        <div className="layout">
            <Header headerText="tentang laman" />
            <div className="main">
                <p>
                    What are the odds of you stumbling across this page. What are the odds of me publishing it. If I were to write this thing another day, it would be a completely different thing. If you were to visit this site at a different time, I might have decided to change it. It doesn't really matter though. These are just words, and I am just another random person.
                </p>
                <p>
                    I'd like to think that I hold my own meaning, but I don't really believe so. Suddenly I realize I am just as lost as I was five years ago. Life's weird, and I don't know where I might end up next. There's this thing that I love to do, but I am horribly bad at it. I tried telling myself it's okay, that it doesn't define who I am, but it doesn't chase the bad feeling away, it's still nagging at the corner. What do you suggest I do?
                </p>
                <p>
                    What's this? This is my own personal page. What's the purpose of me having this? I hope it can be a place of self reflection, and it's my attempt to leave a mark in this world, despite how insignificant it is. I am insignificant. I can live with that. Haha. Not really. But I will die eventually and it won't really make a difference so.. might as well try?
                </p>
            </div>
            <Footer/>
        </div>
    )
}