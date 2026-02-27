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
  padding: 0;

  @media (max-width: 900px) {
    padding-top: 60px;
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
