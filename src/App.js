import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";

import { NotFound } from 'http-errors';
import './App.css';
import About from './components/Home/About/About';
import Contact from './components/Home/Contact/Contact';
import Projects from './components/Home/Projects/Projects';
import Footer from './components/Shared/Footer/Footer';
import Header from './components/Shared/Header/Header';
import Home from "./components/Home/Home/Home";
import Blogs from "./components/Home/Blogs/Blogs";



function App() {
  return (
    <div className="App" >
           
       
        <Router>     
        
            <Header></Header>
        
         <Switch>

         <Route exact path="/">
             <Home />
           </Route>

           <Route path="/home">
             <Home />
           </Route>

           <Route path="/projects">
             <Projects />
           </Route>

           <Route path="/blogs">
             <Blogs />
           </Route>


           <Route path="/contact">
             <Contact />
           </Route>

           <Route path="/about">
             <About />
           </Route>

          
           <Route path="*">
             <NotFound></NotFound>
           </Route>
           
         </Switch>
         
         <Footer></Footer>

       </Router>
     
    </div>
  );
}

export default App;
