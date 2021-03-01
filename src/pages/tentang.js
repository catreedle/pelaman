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
                    Selamat datang di pelaman.com. Agak lupa-lupa ingat kenapa memutuskan bikin blog dengan domain aneh begini hahaha. Tapi sudah terlanjur kebeli domain-nya. <span role="img" aria-label="grinning face with sweat">😅</span> <br></br>
                    It's a bit messy ehh? But I am very proud of this baby. <span role="img" aria-label="pleading face">🥺</span> Akhirnyaa jadi juga <i>project</i> yang lama ketunda ini.
                </p>
                <p>
                    Salam kenal. Namaku Purnama Sidi Rahayu. Semasa kuliah aku berkenalan dengan koding yang ternyata menyenangkan (but also hurting my head big time), the college thing didn't work out unfortunately, but I decided to pursue this as a career still (sometimes I question the decision tho).
                </p>
                <p>
                    I love cats, twenty one pilots, reading too many cheesy romances to the point of unhealthy, aku suka membuat amigurumi, dan kadang-kadang belajar ukulele (tapi gak bisa-bisa). Stick around and then I'll tell you more! Maybe... 
                </p>
            </div>
            <Footer/>
        </div>
    )
}