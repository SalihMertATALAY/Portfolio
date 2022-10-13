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
               

            </div>

        </nav>
    )
}

export default Navbar