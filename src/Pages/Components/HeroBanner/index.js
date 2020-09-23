import React from "react";
import {Button, Col, Row} from "antd";
import Menu from "../../../Components/Menu";
import {Fade} from "react-awesome-reveal";
import Particles from "react-particles-js";
import styled from "styled-components";
import { style } from "./styles";

const HeroWrapper = styled.div`
  ${style}
`;

const Hero = ({ scrollToSolutions, scrollToContactForm }) => {
    return(
        <HeroWrapper>
            <Row className="container">
                <Col span={24}>
                    <Menu scrollToSolutions={scrollToSolutions} scrollToContactForm={scrollToContactForm} />

                    <Fade className="fade-container"  triggerOnce={true} fraction={0.3}>
                        <Row style={{ height: 'inherit'}}>
                            <Col xs={{ span: 20, offset: 2 }}
                                 sm={{ span: 20, offset: 2 }}
                                 md={{ span: 20, offset: 2 }}
                                 lg={{ span: 16, offset: 4 }}
                                 xl={{ span: 16, offset: 4 }}>
                                <Row style={{ height: '100%' }}>
                                    <Col xs={24}
                                         sm={24}
                                         md={24}
                                         lg={16}
                                         xl={16} className="banner-container" >
                                        <p className="title">At Gapstack, we help you automate your business relationships and improve your cash flow. </p>

                                        <Row>
                                            <Col xs={24} sm={24} md={24} lg={15} xl={15}>
                                                <p className="description">When you register on our platform, Gapstack allows you to automate your buyer & supplier processes and to unlock funding through early payments and order financing.</p>
                                            </Col>
                                        </Row>
                                        <Button onClick={() => scrollToContactForm()} style={{ color: '#fff', backgroundColor: '#7c60ff', height: 50, borderRadius: 4, marginTop: 50 }}>Contact Us</Button>
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
                                    color: "#777C93",
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
        </HeroWrapper>
    );
}

export default Hero;