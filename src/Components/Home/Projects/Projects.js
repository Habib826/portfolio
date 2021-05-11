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
                        <div className="slider">
                            <div className="card mb-4" style={{ width: '22rem' }}>
                                <img src={Project1} className="card-img-top img" alt="" />
                                <div class="card-body">
                                    <h5 className="card-title">GADGET&GEAR</h5>
                                    <p class="card-text">Gadget abd Gear Store</p>
                                   
                                </div>
                            </div>
                            <div>
                                <p className="paragraph pt-5">
                                    Gadget&Gear is an online store where a user can buy products and 
                                    view/delete his/her previous orders by logging in.The project has an admin panel so new products can be added and deleted.
                                <div className="row mb-3">
                                <a href="https://gadget-gear.web.app/" target="_blank" className="btn-main-offer">Live</a>
                                 <a href="https://github.com/Habib826/Gadget-Gear" target="_blank" className="btn-main-offer">Code</a>
                                </div>
                                </p>
                            </div>
                        </div>
                    </Slide>

                    <Slide bottom>
                        <div className="slider">
                            <div className="card mb-4" style={{ width: '22rem' }}>
                                <div id="carouselExampleSlidesOnly" class="carousel slide" data-ride="carousel">
                                    <div class="carousel-inner">
                                        <div class="carousel-item active">
                                            <img class="d-block w-100" src={Project2_1} alt="First slide" />
                                        </div>
                                        <div class="carousel-item">
                                            <img class="d-block w-100" src={Project2_2} alt="Second slide" />
                                        </div>
                                    </div>
                                </div>
                                <div class="card-body">
                                    <h5 className="card-title">TIME-ZONE</h5>
                                    <p class="card-text">Watch Shop </p>
                                </div>
                            </div>
                            <div>
                                <p className="paragraph pt-5">
                                  Time-ZOne is a web application to provide some watch related services to customers.
                                  User can log in with their Gmail to order a service, can track his/her booked services and can write a review.
                                  
                                 <div className="row mb-3">
                                 <a href="https://time-zone-31681.web.app/" target="_blank" className="btn-main-offer">Live</a>
                                 <a href="https://github.com/Habib826/Time-Zone" target="_blank" className="btn-main-offer">Code</a>

                                 </div>
                                </p>
                            </div>
                        </div>
                    </Slide>

                    <Slide left>
                        <div className="slider">
                            <div className="card mb-4" style={{ width: '22rem' }}>
                                <div id="carouselExampleSlidesOnly" class="carousel slide" data-ride="carousel">
                                    <div class="carousel-inner">
                                        <div class="carousel-item active">
                                            <img class="d-block w-100" src={Project3_1} alt="First slide" />
                                        </div>
                                        <div class="carousel-item">
                                            <img class="d-block w-100" src={Project3_2} alt="Second slide" />
                                        </div>
                                    </div>
                                </div>
                                <div class="card-body">
                                    <h5 className="card-title">TEAM TRACKER</h5>
                                    <p class="card-text">Choose Your Team</p>
                                </div>
                            </div>
                                <div>
                                    <p className="paragraph pt-5">
                                       Team Tracker  is an assistant to find your favourite teams.Used React js, Bootstarp, Material UI.
                                   <div className="row mb-3">
                                   <a href="https://awesome-varahamihira-e76e2d.netlify.app/" target="_blank" className="btn-main-offer">Live</a>
                                    <a href="https://github.com/Habib826/Team-tracker" target="_blank" className="btn-main-offer">Code</a>
                                   </div>
                                    </p>
                                </div>
                        </div>
                    </Slide>
                </div>
            </div>
        </div>
    );
};

export default Projects;