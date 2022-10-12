import React from 'react'
import ProgressBar from 'react-bootstrap/ProgressBar';
import 'bootstrap/dist/css/bootstrap.min.css';
import "./AboutMe.css";
import AnimatedPage from '../AnimatedPage';

const AboutMe = () => {
    return (
       <AnimatedPage>
         <div className="about-me">
            <div className="about-me-text">
                <h2>Hakkımda</h2>
                <p> 2017 yılında Abdullah Gül Üniversitesi'ne Bilgisayar Mühensdisliğine başladım. 2023 yılında mezun olacağım ve ortalamam 3.15. 4 yıldır Flutter ile uğraşıyorum ve
                    2 yıldır profesyonel olarak bu meslekte bulunuyorum. Bundan önce Unity,swift ve Java ile uğraştım.
                    Yakın zamanda Web programcılığına olan merakımdan dolayı ReactJs'e başladım ve uzun dönem devam edecek bir serüven olmasını diliyorum.
                </p>
            </div>
            <div className="about-me-progress">
              <div className="about-me-progress-item">
              <p> Flutter</p>
                <ProgressBar animated now={100} label={`${100}%`} variant="success"  />
              </div>
              <div className="about-me-progress-item">
              <p> Java</p>
                <ProgressBar animated now={30} label={`${30}%`} variant="warning"  />
              </div>
              <div className="about-me-progress-item">
              <p> Swift</p>
                <ProgressBar animated now={30} label={`${30}%`}   />
              </div>
              <div className="about-me-progress-item">
              <p> React JS</p>
                <ProgressBar animated now={10} label={`${10}%`} variant="danger"  />
              </div>
            </div>
        </div>
       </AnimatedPage>
    )
}

export default AboutMe