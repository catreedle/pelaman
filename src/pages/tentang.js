import React from "react"
import Footer from "../components/Footer"
import Header from "../components/Header"
export default function Tentang() {
    return (
        <div className="layout">
            <Header headerText="tentang laman" />
            <div className="main">
                <p>
                    Halooo.
                </p>
                <p>
                    Selamat datang di halaman pribadiku. (that sounds weird... ew?) Creating this page has taught me one thing that is: How terribly, horribly bad I am at CSS, among other things, sure. But trying to solve CSS problem, I don't even know where to start.. it gives me instant headache, and makes me want to bang my head repeatedly into the nearest wall hahaha.
                </p>
                <p>
                    Salam kenal. Namaku Purnama Sidi Rahayu. Semasa kuliah aku berkenalan dengan koding yang ternyata menyenangkan (but also hurting my head big time), the college thing didn't work out unfortunately, but I decided to pursue this as a career still (sometimes I question the decision tho).
                </p>
                <p>
                    I love cats, twenty one pilots, I read too many cheesy fictions it's unhealthy, aku suka membuat amigurumi, dan kadang-kadang belajar ukulele (tapi gak bisa-bisa). Stick around and then I'll tell you more! Maybe... 
                </p>
            </div>
            <Footer/>
        </div>
    )
}