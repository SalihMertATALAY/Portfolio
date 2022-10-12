import React from 'react'
import "./Navbar.css"
import image from "../../assets/image.jpeg";

const Navbar = () => {
    return (
        <nav className="navbar">
            <div className="container">
                <div className='logo'>
                <img src={image} alt="" />
                <h3> Salih Mert ATALAY</h3>
                </div>
                <ul className="navbar-list">
                    <li> Anasayfa</li>
                    <li> Hakkımda</li>
                    <li> Beceriler</li>
                    <li> İletişim</li>
                </ul>

            </div>

        </nav>
    )
}

export default Navbar