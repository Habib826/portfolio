import React from 'react';
import Slide from 'react-reveal/Slide';
import Project1 from '../../../images/project1.PNG';
import Project2_1 from '../../../images/Project2_1.PNG';
import Project2_2 from '../../../images/project2_2.PNG';
import Project3_1 from '../../../images/project3_1.PNG';
import Project3_2 from '../../../images/project3_2.PNG';


const Projects = () => {


    return (
        <div className="project" id="project" style={{ color: 'white' }}>
            <div className="container pb-5">
                <div className="text-center pt-5">

                </div>
                <div className="text-center">
                    <h1 style={{ color: 'orange' }}>PROJECTS</h1>
                </div>


                <div className="row d-flex justify-content-around mt-5 text-center">
                    <Slide right>
                        <div className="card mb-4" style={{ width: '22rem' }}>
                            <img src={Project1} className="card-img-top" alt="" />
                            <div class="card-body">
                                <h5 className="card-title">GADGET&GEAR</h5>
                                <p class="card-text">Some quick example </p>
                                <a href="https://gadget-gear.web.app/" target="_blank" className="btn-main-offer">Live</a>
                                <a href="https://github.com/Habib826/Gadget-Gear" target="_blank" className="btn-main-offer">Code</a>
                            </div>
                        </div>
                    </Slide>

                    <Slide bottom>
                        <div className="card mb-4" style={{ width: '22rem' }}>
                        <div id="carouselExampleSlidesOnly" class="carousel slide" data-ride="carousel">
                                <div class="carousel-inner">
                                    <div class="carousel-item active">
                                        <img class="d-block w-100" src={Project2_1} alt="First slide"/>
                                   </div>
                                        <div class="carousel-item">
                                            <img class="d-block w-100" src={Project2_2} alt="Second slide"/>
                                        </div>
                                   </div>
                                </div>
                            <div class="card-body">
                                <h5 className="card-title">TIME-ZONE</h5>
                                <p class="card-text">Some quick example </p>
                                <a href="https://time-zone-31681.web.app/" target="_blank" className="btn-main-offer">Live</a>
                                <a href="https://github.com/Habib826/Time-Zone" target="_blank" className="btn-main-offer">Code</a>

                            </div>
                        </div>
                    </Slide>

                    <Slide left>
                        <div className="card mb-4" style={{ width: '22rem' }}>
                            <div id="carouselExampleSlidesOnly" class="carousel slide" data-ride="carousel">
                                <div class="carousel-inner">
                                    <div class="carousel-item active">
                                        <img class="d-block w-100" src={Project3_1} alt="First slide"/>
                                   </div>
                                        <div class="carousel-item">
                                            <img class="d-block w-100" src={Project3_2} alt="Second slide"/>
                                        </div>
                                            </div>
                                        </div>
                                        <div class="card-body">
                                            <h5 className="card-title">TEAM TRACKER</h5>
                                            <p class="card-text">Some quick example </p>
                                            <a href="https://awesome-varahamihira-e76e2d.netlify.app/" target="_blank" className="btn-main-offer">Live</a>
                                            <a href="https://github.com/Habib826/Team-tracker" target="_blank" className="btn-main-offer">Code</a>
                                        </div>
                                    </div>
                                </Slide>
                            </div>
                        </div>
        </div>
    );
};

export default Projects;