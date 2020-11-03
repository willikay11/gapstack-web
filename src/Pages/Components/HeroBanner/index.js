import React from "react";
import {Col, Row} from "antd";
import Menu from "../../../Components/Menu";
// import CoolKidsBrainstorming from '../../../assets/Cool-Kids-Brainstorming.svg';
import { Fade } from "react-awesome-reveal";
// import Particles from "react-particles-js";
import styled from "styled-components";
import { style } from "./styles";
import FirstTimeRegistrationDashboard from "../../../assets/First-Time-Registration-Dashboard.svg";
import mobile from "../../../assets/mobile.svg";

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
                                         lg={24}
                                         xl={24} className="banner-container">
                                        <Row style={{ marginBottom: 40 }}>
                                            <Col xs={24} sm={24} md={24} lg={16} xl={16}>
                                                <p className="title">Powerful Digital Trade  & Supply Chain Financing platform.</p>
                                                <p className="description">At Gapstack, we believe in giving businesses the liberty to access working capital to launch, grow & scale. When you register on Gapstack, we help you automate your buyer-supplier relationships, unlock funding from your receivables – POs, invoices, orders  and your payables – POs, vendor invoices and build your unique business ecosystem.   </p>
                                            </Col>
                                        </Row>

                                        <Row style={{ width: '100%' }}>
                                            <Col span={24}>
                                                <img width='100%' src={FirstTimeRegistrationDashboard} alt="Dashboard" />
                                                <img src={mobile} alt="mobile" style={{ position: 'absolute', width: '25%', top: 250, right: -120 }} />
                                            </Col>
                                        </Row>
                                        {/*<Button onClick={() => scrollToContactForm()} style={{ color: '#fff', backgroundColor: '#7c60ff', height: 50, borderRadius: 4, marginTop: 50 }}>Contact Us</Button>*/}
                                    </Col>
                                </Row>
                            </Col>
                        </Row>
                    </Fade>

                    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', position: 'absolute', top: 0, left: 0, right: 0, bottom: 0, zIndex: 0 }}>
                        <div className="circle first" />
                        <div className="circle second" />
                        <div className="circle third" />
                    </div>

                    {/*<Particles*/}
                    {/*    style={{ position: 'absolute', top: 0, left: 0, right: 0, bottom: 0, zIndex: 0 }}*/}
                    {/*    params={{*/}
                    {/*        particles: {*/}
                    {/*            number: {*/}
                    {/*                value: 80,*/}
                    {/*                density: {*/}
                    {/*                    enable: true,*/}
                    {/*                }*/}
                    {/*            },*/}
                    {/*            links: {*/}
                    {/*                color: "#777C93",*/}
                    {/*                distance: 150,*/}
                    {/*                enable: true,*/}
                    {/*                opacity: 0.5,*/}
                    {/*                width: 1,*/}
                    {/*            },*/}
                    {/*            shape: {*/}
                    {/*                type: "circle",*/}
                    {/*            },*/}
                    {/*            size: {*/}
                    {/*                random: true,*/}
                    {/*                value: 5,*/}
                    {/*            },*/}
                    {/*        },*/}
                    {/*    }}*/}
                    {/*/>*/}
                </Col>
            </Row>
        </HeroWrapper>
    );
}

export default Hero;