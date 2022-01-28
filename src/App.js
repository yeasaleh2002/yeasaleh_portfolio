import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";

import './App.css';
import About from './components/Home/About/About';
import Contact from './components/Home/Contact/Contact';
import Projects from './components/Home/Projects/Projects';
import Footer from './components/Shared/Footer/Footer';
import Header from './components/Shared/Header/Header';
import Home from "./components/Home/Home/Home";
import Blogs from "./components/Home/Blogs/Blogs";
import SingleProject from "./components/Home/SingleProject/SingleProject";
import Particles from "react-tsparticles";
import NotFound from "./components/NotFound/NotFound";


function App() {

  const particlesInit = (main) => {
    console.log(main);

    // you can initialize the tsParticles instance (main) here, adding custom shapes or presets
  };

  const particlesLoaded = (container) => {
    console.log(container);
  };

  return (
    <div className="App" >
           
           <Particles
      id="tsparticles"
      init={particlesInit}
      loaded={particlesLoaded}
      options={{
         /*  background: {
            color: {
              value: "#0A0A0A",
            },
          }, */
      
        fpsLimit: 60,
        interactivity: {
          events: {
            onClick: {
              enable: true,
              mode: "push",
            },
            onHover: {
              enable: true,
              mode: "repulse",
            },
            resize: true,
          },
          modes: {
            bubble: {
              distance: 40,
              duration: 2,
              opacity: 0.3,
              size: 40,
            },
            push: {
              quantity: 4,
            },
            repulse: {
              distance: 80,
              duration: 0.4,
            },
          },
        },
        particles: {
          color: {
            value: "#ffffff",
          },
          links: {
            color: "#ffffff",
            distance: 150,
            enable: true,
            opacity: 0.5,
            width: 1,
          },
          collisions: {
            enable: true,
          },
          move: {
            direction: "none",
            enable: true,
            outMode: "bounce",
            random: true,
            speed: 1.5,
            straight: false,
          },
          number: {
            density: {
              enable: true,
              area: 800,
            },
            value: 140,
          },
          opacity: {
            value: 0.5,
          },
          shape: {
            type: "circle",
          },
          size: {
            random: true,
            value: 5,
          },
        },
        detectRetina: true,
      }}
    />

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

           <Route path="/singleProject/:serviceId">
               <SingleProject></SingleProject>
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

          <Route path='*'>
            <NotFound></NotFound>
          </Route>
           {/* <Route path="*">
             <NotFound></NotFound>
           </Route> */}
           
         </Switch>
         <Footer></Footer>
       </Router>
     
    </div>
  );
}

export default App;
