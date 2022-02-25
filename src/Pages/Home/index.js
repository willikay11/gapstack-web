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
                            <p className="title" style={{ marginBottom: 15 }}>Built for Global Progress</p>
                            <p className="description">We are passionate about trade. We understand trade is the true agent of economic transformation for the world. Gapstack´s platform is a comprehensive suite of automation, financing & community to let businesses grow, trading domestically and internationally.</p>
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
