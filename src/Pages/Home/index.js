import React, { useRef } from "react";
import styled from 'styled-components';
import Who from "../Components/Who";
import Why from "../Components/Why";
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';
import { style } from './styles';
import Dashboard from "../Components/Dashboard";
import Solutions from "../Components/Solutions";
import Footer from "../Components/Footer";
import Contact from "../Components/Contact";
import Hero from "../Components/HeroBanner";

const HomeWrapper = styled.div`
  ${style}
`;

const scrollToSolutions = (ref) => window.scrollTo(0, ref.current.offsetTop);
const scrollContactForm = (ref) => window.scrollTo(0, ref.current.offsetTop);

const Home = () => {
    const solutions = useRef(null);
    const contactForm = useRef(null);
    const executeScrollToSolutions = () => scrollToSolutions(solutions);
    const executeScrollToContactForm = () => scrollContactForm(contactForm);

    return (
        <HomeWrapper>
            <div className="home-container">
                <Hero scrollToSolutions={executeScrollToSolutions} scrollToContactForm={executeScrollToContactForm}/>

                <Who />

                {/*<Why />*/}

                <Dashboard />

                <Solutions refProp={solutions}/>

                <Contact refProp={contactForm}/>

                <Footer scrollToSolutions={executeScrollToSolutions} scrollToContactForm={executeScrollToContactForm} />
            </div>
        </HomeWrapper>
    )
}

export default Home;