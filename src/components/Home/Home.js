import React from 'react'
import "./Home.css"
import image from "../../assets/flutter.png";
import Typical from 'react-typical';


import AnimatedPage from '../AnimatedPage';

const Home = () => {
    return (
      <AnimatedPage>
         <div className='home'>
                <div className='home-text'>
                    <h2>Merhaba, Ben Salih</h2>
                    <p>
                        Mobil Uygulama Geliştiricsiyim. Flutter İle 4 Yıldırı Aşkın Çalışmaktayım ve Yeni Hedefim React JS
                    </p>
                    <Typical
                        steps={['Flutter', 2000, 'Unity', 2000, 'Swift', 2000, 'Java', 2000, 'Kotlin', 2000, 'React Js', 2000]}
                        loop={Infinity}
                        wrapper="p"
                    />
                    <button> İletişime Geç </button>
                </div>
                <img src={image} alt="" />

            </div>
      </AnimatedPage>

    )
}

export default Home