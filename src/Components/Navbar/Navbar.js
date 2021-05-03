import './Navbar.css'
import Logo from '../../images/logo3.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars } from '@fortawesome/free-solid-svg-icons';
import About from '../Home/About/About';
import Header from '../Home/Header/Header';
import Projects from '../Home/Projects/Projects';
import Skills from '../Home/Skills/Skills';
import ContactForm from '../Home/ContactForm/ContactForm';

const Navbar = () => {


  return (
    <div> 
      <nav  className="navbar navbar-expand-lg fixed-top navbar-light  bg-dark">
       <div className="container">
       <div>
       <a className="nav-link"  href="#"><img src={Logo} className="w-50 image" alt=""/></a>
       
       </div>  
        <div>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <FontAwesomeIcon icon={faBars} />
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav mi-auto">
              <li  className="nav-item active">
               <a className="nav-link" style={{color: 'white'}} href="#">Home</a>
              </li>
              <li className="nav-item" >
               <a className="nav-link" style={{color: 'white'}} href="#about">About Me</a>
              </li>
              <li className="nav-item">
              <a className="nav-link" style={{color: 'white'}} href="#project">Projects</a>
              </li>
              <li className="nav-item">
               <a className="nav-link" style={{color: 'white'}} href="#contact">Contact</a>
              </li>
            </ul>
        </div>
        </div>
        </div>
      </nav>
      <Header/>
      <About></About>
      <Projects></Projects>
      <Skills/>
      <ContactForm/>
    </div>
  );
};

export default Navbar;