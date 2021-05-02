import {BrowserRouter as Router,Switch,Route} from "react-router-dom";
import './App.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import Home from './Components/Home/Home';
import About from "./Components/Home/About/About";

function App() {
  return (
  <div>
    <Home/>
  </div>
  );
}

export default App;
