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
                            <p style={{ color: 'white' }}>Hello I'm Habib, dolor sit amet consectetur adipisicing elit. In omnis quibusdam facilis
                            tempore expedita vel corrupti tenetur doloribus unde numquam ea, dolorem nisi eaque cupiditate,
                            nostrum officia consectetur suscipit perferendis voluptatibus deleniti vitae. Voluptate optio corrupti illo,
                            culpa sit molestias atque commodi laboriosam! Dicta harum ea consectetur quisquam rem facere, minus magnam perspiciatis? Ab dolor atque placeat explicabo expedita velit esse aspernatur quas tempora deserunt mollitia quidem fugiat
                            deleniti doloremque corrupti ullam voluptatibus architecto, ea nam. Molestias aliquid nisi fugit.
                            </p>
                            </div>
                            <div className="row mt-3">
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