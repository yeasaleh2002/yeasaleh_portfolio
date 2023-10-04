import React from "react";
import Services from "../Services/Services";
import About from "../About/About";
import Contact from "../Contact/Contact";
import Projects from "../Projects/Projects";

const Home = () => {

  return (
    <div style={{ background: "#111A28" }}>
      <About />
      <section id="MySkills">
        <Services />
      </section>
      <section id="Projects">
        <Projects />
      </section>
      <section id="contact">
        <Contact />
      </section>
    </div>
  );
};

export default Home;
