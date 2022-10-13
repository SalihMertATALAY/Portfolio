import React from 'react'
import "./Contact.css"
import image from "../../assets/contact.jpg"
import Button from 'react-bootstrap/Button';
import { SiLinkedin, SiGithub, SiMicrosoftoutlook, SiInstagram, SiWhatsapp } from 'react-icons/si';
import AnimatedPage from '../AnimatedPage';


const Contact = () => {
    return (
<AnimatedPage>

<div className='contact-body'>
            <div>
                <img src={image} className="contact-image" alt='img' />
            </div>
            <div className='contact-info'>
                <h2> İletişim Bilgileri</h2>
                <div className='contact-item'>
                    <Button href='https://github.com/SalihMertATALAY' variant="light" className='but'>
                        <SiGithub />
                        <p> SalihMertATALAY</p>
                    </Button>

                </div>
                <div className='contact-item'>
                    <Button onClick={() => window.location = 'mailto:merttatalay@hotmail.com'} variant="light" className='but'>
                        <SiMicrosoftoutlook />
                        <p> merttatalay@hotmail.com</p>
                    </Button>
                </div>
                <div className='contact-item'>
                    <Button href='https://www.instagram.com/slhmert/' variant="light" className='but'>
                        <SiInstagram />
                        <p> slhmert</p>
                    </Button>
                </div>
                <div className='contact-item'>
                    <Button href='https://web.whatsapp.com/send?phone=${+905458999009}' variant="light" className='but'>
                        <SiWhatsapp />
                        <p> +90 545 899 9009</p>
                    </Button>
                </div>
                <div className='contact-item'>
                    <Button href='https://www.linkedin.com/in/salih-mert-atalay' variant="light" className='but'>
                        <SiLinkedin />
                        <p> Salih Mert ATALAY</p>
                    </Button>
                </div>
            </div>
        </div>
</AnimatedPage>
    )
}

export default Contact