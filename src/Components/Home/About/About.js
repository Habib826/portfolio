import React from 'react';
import Zoom from 'react-reveal/Zoom';
import Profile from '../../../images/profile.jpg'
import './About.css'

const About = () => {
    return (
        <div className="about" id="about">
            <Zoom>
                <div className="container">
                    <h2 className="text-center pt-5" style={{color:'orange'}}>About Myself</h2>
                    <div className="row d-flex justify-content-around">
                        <div className="col-md-5 mt-5 mb-5">
                            <img className="img-fluid" src={Profile} alt="" />
                        </div>
                        <div className="col-md-7 d-flex flex-column align-items-center mt-5">
                            <div>
                            <p className="about-para" style={{ color: 'white' }}>Hello, I'm <span style={{color:'orange', fontWeight:'bold'}}>Habib</span>, a web developer. A self-motivated and enthusiastic web developer with a deep interest in JavaScript. I can create modern
                             & responsive web sites/applications with high quality and professional look. As every website/application 
                             that represents a business plays a very important role in its growth. That's why I treat every website according
                              to its nature.
                              <h4 class="mt-4">Email</h4>
                              <p>habib826826@gmail.com</p>
                              <h4>Adress</h4>
                              <p>Tangail, Dhaka, Bangladesh</p>
                            </p>
                            </div>
                            <div className="row mt-5">
                                <a href="https://drive.google.com/file/d/1YtoNrAwFIFCfJmw7DzI86eYxfUXFDtLI/view?usp=sharing" download target="_blank" className="btn-main-offer">Resume</a>
                                <a href="https://www.linkedin.com/in/mohammad-habib-695079211/" target="_blank" className="btn-main-offer">LinkedIn</a>
                                <a href="https://github.com/Habib826" target="_blank" className="btn-main-offer">Github</a>
                                <a href="https://www.facebook.com/profile.php?id=100029863461243" target="_blank" className="btn-main-offer">Facebook</a>
                             
                            </div>
 
                        </div>
                          
                    </div>
                   
                </div>
            </Zoom>
        </div>
    );
};

export default About;