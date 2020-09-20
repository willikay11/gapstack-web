import React from "react";
import styled from 'styled-components';
import Who from "../Components/Who";
import Why from "../Components/Why";
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';
import { style } from './styles';
import Dashboard from "../Components/Dashboard";
import Users from "../Components/Users";
import Footer from "../Components/Footer";
import Contact from "../Components/Contact";
import Hero from "../Components/HeroBanner";

const HomeWrapper = styled.div`
  ${style}
`;

const Home = () => {
    return (
        <HomeWrapper>
            <div className="home-container">
                <Hero />

                <Who />

                <Why />

                <Dashboard />

                <Users />

                <Contact />

                <Footer />


            </div>
        </HomeWrapper>
    )
}

export default Home;