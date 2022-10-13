import React from 'react'
import AnimatedPage from '../AnimatedPage'
import "./Experience.css"

const Experience = () => {
    return (
        <AnimatedPage>
 <div className="experience-body">
     <h2>Tecrübeler</h2>
            <div className="experience">
                <div className="eperience-item">
                    <div className="experience-container">
                        <div className="content">
                            <h1>Key Yazılım Çözümleri A.Ş</h1>
                            <h3>Aralık 2020'den itibaren Mobil Geliştirci Olarak Çalışmaya Başladım ve Flutter ile Devam Ediyorum.</h3>
                        </div>
                        <div className="flap"></div>
                    </div>
                </div>
                <h2></h2>
                <div className="eperience-item">
                    <div className="experience-container">
                        <div className="content">
                            <h1>Abdullah Gül Üniversitesi</h1>
                            <h3> Eylül 2017 yılında Bilgisayar Mühendisliği Bölümüne Başladım. Ortalamam 3.15 ve Şu anda Hala Okula Devam Etmekteyim.</h3>
                        </div>
                        <div className="flap-agu" ></div>
                    </div>
                </div>
        </div>
    </div>
        </AnimatedPage>
   
    )
}

export default Experience