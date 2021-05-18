import React from "react"
import Footer from "../components/Footer"
import Header from "../components/Header"
export default function Tentang() {
    return (
        <div className="layout">
            <Header headerText="tentang laman" />
            <div className="main">
                <p>
                    Halo.
                </p>
                <p>
                    Pelaman.com adalah laman yang dibuat dan dikelola oleh Purnama Sidi Rahayu untuk menandakan keberadaannya di internet, sebagai upaya untuk menjawab, atau mungkin pula lari dari krisis eksistensial.
                </p>
                <p>
                    Karena eksistensinya sampai sekarang merupakan sesuatu yang acak dan absurd, mungkin isi laman ini juga akan seperti itu, absurd dan acak, kusut, tanpa tema dan tujuan yang menjadi benang merah, atau mungkin pula dari sini kita malah jadi bisa mengurai kekusutan itu.
                </p>
            </div>
            <Footer/>
        </div>
    )
}