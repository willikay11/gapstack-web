import React from "react";
import Menu from "../../Components/Menu";
import { Button, Col, Row } from "antd";
import { Fade } from "react-awesome-reveal";
import Particles from "react-particles-js";
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

const HomeWrapper = styled.div`
  ${style}
`;

const Home = () => {
    return (
        <HomeWrapper>
            <div className="home-container">
                <Row style={{ position: 'relative' }}>
                    <Col span={24}>
                        <Menu />

                        <Fade style={{ position: 'relative', zIndex: 10 }} triggerOnce={true} fraction={0.3}>
                            <Row style={{ height: 800}}>
                                <Col offset={4} span={16}>
                                    <Row style={{ height: '100%' }}>
                                        <Col span={16} style={{ display: 'flex', alignItems: 'flex-start', justifyContent: 'center', flexDirection: 'column' }}>
                                            <p style={{ fontSize: 44, color: '#39426A', textTransform: 'capitalize', lineHeight: '135.2%', fontWeight: 'bold', fontStyle: 'normal' }}>powerful digital trade & supply chain financing platform</p>

                                            <Row>
                                                <Col span={15}>
                                                    <p style={{ fontSize: 16, color: '#39426A', lineHeight: '30px', fontWeight: 500, fontStyle: 'normal' }}>When you register as a supplier, TradeDepot becomes a full-time distributor of your products. We buy and store the inventory, and take care of everything from shipping and pricing to customer service and returns.</p>
                                                </Col>
                                            </Row>
                                            <Button style={{ color: '#fff', backgroundColor: '#7c60ff', height: 50, borderRadius: 4, marginTop: 50 }}>Contact Sales</Button>
                                        </Col>
                                    </Row>
                                </Col>
                            </Row>
                        </Fade>

                        <Particles
                            style={{ position: 'absolute', top: 0, left: 0, right: 0, bottom: 0, zIndex: 0 }}
                            params={{
                                particles: {
                                    number: {
                                        value: 80,
                                        density: {
                                            enable: true,
                                        }
                                    },
                                    links: {
                                        color: "#b3b2b2",
                                        distance: 150,
                                        enable: true,
                                        opacity: 0.5,
                                        width: 1,
                                    },
                                    shape: {
                                        type: "circle",
                                    },
                                    size: {
                                        random: true,
                                        value: 5,
                                    },
                                },
                            }}
                        />
                    </Col>
                </Row>

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