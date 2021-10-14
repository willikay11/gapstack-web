import React, { useRef } from "react";
import { Row } from "antd";
import styled from 'styled-components';
import Who from "../Components/Who";
// import Why from "../Components/Why";
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';
import { style } from './styles';
// import Dashboard from "../Components/Dashboard";
import Solutions from "../Components/Solutions";
import Footer from "../Components/Footer";
// import Contact from "../Components/Contact";
import Hero from "../Components/HeroBanner";
import Ship2Image from "../../assets/Ship-2.webp";

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
        <HomeWrapper backgroundImage={Ship2Image}>
            <div className="home-container">
                <Hero scrollToSolutions={executeScrollToSolutions} scrollToContactForm={executeScrollToContactForm}/>

                <Who />

                <Row>
                    <div className="background-container">
                        <div className="overlay" />
                        <div className="container">
                            <p className="title">Built for Global Scale</p>
                            <p className="description">Whether sourcing or selling, locally or globally, Gapstack provides a frictionless, digital first trade platform. Our AI driven engine will understand your trade dependencies, avail the funding nodes to reduce friction wrapped into an intuitive business solution.</p>
                        </div>
                    </div>
                </Row>

                {/*<Dashboard refProp={solutions}/>*/}

                <Solutions />

                {/*<Contact refProp={contactForm}/>*/}

                <Footer scrollToSolutions={executeScrollToSolutions} scrollToContactForm={executeScrollToContactForm} />
            </div>
        </HomeWrapper>
    )
}

export default Home;
