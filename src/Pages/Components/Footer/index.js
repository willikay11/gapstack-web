import React from "react";
import {Fade} from "react-awesome-reveal";
import {Button, Col, Row} from "antd";
import gapstackLogo from "../../../assets/gapStackLogo.svg";
import {MdCopyright} from "react-icons/md";
import styled from "styled-components";
import { style } from "./styles";

const FooterWrapper = styled.div`
  ${style}
`;

const Footer = ({ scrollToSolutions, scrollToContactForm }) => {
    return (
        <FooterWrapper>
            <Fade triggerOnce={true} fraction={0.3}>
                <Row className="container">
                    <Col xs={{ span:22, offset:2 }}
                         sm={{ span:22, offset:2 }}
                         md={{ span:22, offset:2 }}
                         lg={{ span:20, offset:4 }}
                         xl={{ span:20, offset:4 }}>
                        <Row gutter={[16, 32]}>
                            <Col xs={24} sm={12} md={12} lg={6} xl={6} className="item">
                                <Row style={{ marginBottom: 10 }}>
                                    <img height={40} src={gapstackLogo} alt='alternate'/>
                                </Row>
                                <p className="email-link">info@gapstack.com</p>

                                <p>Nairobi</p>
                                <p>Ankole Grill</p>
                                <p>Senteu Plaza, Galana Road</p>
                            </Col>

                            <Col xs={24} sm={12} md={12} lg={6} xl={6} className="item">
                                <p className="title">Solutions</p>

                                <Button className="button-link" type='link' onClick={() => scrollToSolutions()}>For Banks</Button>
                                <Button className="button-link" type='link' onClick={() => scrollToSolutions()}>For Businesses</Button>
                                <Button className="button-link" type='link' onClick={() => scrollToSolutions()}>For Agents</Button>
                            </Col>

                            {/*<Col xs={24} sm={24} md={24} lg={6} xl={6} className="item">*/}
                            {/*    <p className="title">Company</p>*/}

                            {/*    <p>About</p>*/}
                            {/*    <p>Careers</p>*/}
                            {/*    <p>Contact Us</p>*/}
                            {/*    <p>Press</p>*/}
                            {/*    <p>Terms & Conditions</p>*/}
                            {/*    <p>Privacy Policy</p>*/}
                            {/*</Col>*/}

                            {/*<Col xs={24} sm={24} md={24} lg={6} xl={6} className="item">*/}
                            {/*    <p className="title">Resources</p>*/}

                            {/*    <p>Blog</p>*/}
                            {/*    <p>Support</p>*/}
                            {/*    <p>Developers</p>*/}
                            {/*</Col>*/}
                        </Row>
                    </Col>
                </Row>

                <Row style={{ height: 100, marginTop: 50, marginBottom: 50, borderTop: '1px solid #F3F4F8' }}>
                    <Col xs={{ span:22, offset:2 }}
                         sm={{ span:22, offset:2 }}
                         md={{ span:22, offset:2 }}
                         lg={{ span:20, offset:4 }}
                         xl={{ span:20, offset:4 }} style={{ display: 'flex', alignItems: 'center' }}>
                        <p><MdCopyright /> Gapstack 2020. All Right Reserved</p>
                    </Col>
                </Row>
            </Fade>
        </FooterWrapper>
    );
}

export default Footer;