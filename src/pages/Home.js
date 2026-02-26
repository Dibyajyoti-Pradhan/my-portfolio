import React from "react";
import styled from "styled-components";
import About from "../components/About";
import Skills from "../components/Skills";
import Experience from "../components/Experience";
import Projects from "../components/Projects";
import Achievements from "../components/Achievements";
import Certifications from "../components/Certifications";
import Education from "../components/Education";
import Contact from "../components/Contact";

const MainContainer = styled.main`
  max-width: 1200px;
  padding: 0 40px 80px;

  @media (max-width: 900px) {
    padding: 80px 24px 60px;
  }

  @media (max-width: 480px) {
    padding: 60px 16px 40px;
  }
`;

const Home = () => (
  <MainContainer>
    <About />
    <Skills />
    <Experience />
    <Projects />
    <Achievements />
    <Certifications />
    <Education />
    <Contact />
  </MainContainer>
);

export default Home;
