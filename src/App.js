import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.min.js";

import './assets/js/animations';

import Home from "./pages/Home/Home";
import Navi from "./layouts/Navi/Navi";
import Footer from "./layouts/Footer/Footer";

import { BrowserRouter as Router, Route } from "react-router-dom";
import Employer from "./pages/Employer/Employer";

import JobPosting from './pages/JobPosting/JobPosting'
import Candidate from "./pages/Candidate/Candidate";

function App() {
  return (
    <div className="App">
      <Navi />

    <a id="back-to-top-button"></a>
    
      <Router>
 
 
          <Route exact path="/" component={Home} />
          
          <Route path="/employer" component={Employer}></Route>
        
          <Route path="/jobPostings" component={JobPosting}></Route>
          
          <Route path="/candidate" component={Candidate}></Route>
      </Router>



      <Footer />

    </div>
  );
}

export default App;
