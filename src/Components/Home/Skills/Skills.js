import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Fade from 'react-reveal/Fade';
import { faCheckSquare } from '@fortawesome/free-solid-svg-icons';

const Skills = () => {
    return (
        <div className="skills">
            <div className="container">
            <div className="text-center pt-5">

           </div>
            <h1 className="text-center" style={{color:'orange'}}>Skills</h1>
            <div className="row d-flex justify-content-around mt-5" style={{color:'white'}}>
            <Fade right cascade>
                <div>
                    <h4>Expertise</h4>
                    <ul className="fa-ul">
                        <li><FontAwesomeIcon icon={faCheckSquare} /> HTML</li>
                        <li><FontAwesomeIcon icon={faCheckSquare} /> CSS</li>
                        <li><FontAwesomeIcon icon={faCheckSquare} /> Bootstarp</li>
                        <li><FontAwesomeIcon icon={faCheckSquare} /> Javascript</li>
                        <li><FontAwesomeIcon icon={faCheckSquare} /> React js</li>
                        
                    </ul>
                </div>
                </Fade>

                <Fade top cascade>
                <div>
                    <h3>Familiar</h3>
                    <ul className="fa-ul">
                        <li><FontAwesomeIcon icon={faCheckSquare} />  Redux</li>
                        <li><FontAwesomeIcon icon={faCheckSquare} />  SASS</li>
                        <li><FontAwesomeIcon icon={faCheckSquare} /> Node js</li>
                        <li><FontAwesomeIcon icon={faCheckSquare} /> MongoDB</li>
                        <li><FontAwesomeIcon icon={faCheckSquare} /> Express js</li>
                    </ul>
                </div>
            </Fade>

            <Fade left cascade>
                <div>
                    <h3>Tools</h3>
                    <ul className="fa-ul">
                        <li><FontAwesomeIcon icon={faCheckSquare} /> VS code</li>
                        <li><FontAwesomeIcon icon={faCheckSquare} /> Git</li>
                        <li><FontAwesomeIcon icon={faCheckSquare} /> Firebase</li>
                        <li><FontAwesomeIcon icon={faCheckSquare} /> Heroku</li>
                        <li><FontAwesomeIcon icon={faCheckSquare} /> Post Man</li>
                    </ul>
                </div>
            </Fade>
            </div>
        </div>
    </div>
    );
};

export default Skills;