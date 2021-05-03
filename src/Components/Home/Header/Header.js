import React from 'react';
import Typed from 'react-typed';


const Header = () => {
    return (
        <div className="header-wrap pb-5">
           <div className="main-info">
               <h1><span style={{color:'white'}}>Hello, I'm </span> <span style={{fontWeight:'bold'}}>Mohammad Habib</span> .</h1>
               <Typed
               className="typed-text"
               strings={["Web developer", "Web Designer"]}
               typeSpeed={40}
               backSpeed={60}
               loop
               />
               <a href="https://drive.google.com/file/d/1YtoNrAwFIFCfJmw7DzI86eYxfUXFDtLI/view?usp=sharing" target="_blank" className="btn-main-offer" download>Resume</a>
            </div>
        </div>
    );
};

export default Header;