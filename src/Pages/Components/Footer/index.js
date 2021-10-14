import React from "react";
import {Fade} from "react-awesome-reveal";
import { Col, Row } from "antd";
import { RiCopyrightLine, RiLinkedinFill } from "react-icons/ri";
import moment from "moment";
import gapstackLogo from "../../../assets/Logo.svg";
import FooterImage from "../../../assets/Footer.webp";
import styled from "styled-components";
import { style } from "./styles";

const FooterWrapper = styled.div`
  ${style}
`;

const Footer = ({ scrollToSolutions, scrollToContactForm }) => {
    const goToLinkedIN = () => {
        window.open("https://www.linkedin.com/company/gapstack/about/", "_blank");
    }
    return (
        <FooterWrapper backgroundImage={FooterImage}>
            <Fade triggerOnce={true} fraction={0.3}>
                <Row className="container">
                    <Col xs={{ span:22, offset:2 }}
                         sm={{ span:22, offset:2 }}
                         md={{ span:20, offset:2 }}
                         lg={{ span:16, offset:4 }}
                         xl={{ span:16, offset:4 }}>
                        <Row gutter={[16, 32]}>
                            <Col xs={24} sm={24} md={24} lg={24} xl={6} className="item">
                                <Row style={{ marginBottom: 24 }}>
                                    <img height={50} src={gapstackLogo} alt='alternate'/>
                                </Row>
                            </Col>

                            <Col xs={24} sm={12} md={12} lg={12} xl={6} className="item">
                                <p className="title">Kenya</p>
                                <p className="text">NAIROBI – HEAD OFFICE</p>
                                <p className="text">Kirichwa Rd, Nairobi</p>
                                <p className="text">P.O. Box 19400 Nairobi, Kenya</p>
                                {/*<p className="text">(+254) 0717 663 681</p>*/}
                                <p className="email-link">info@gapstack.com</p>
                            </Col>

                            <Col xs={24} sm={12} md={12} lg={12} xl={6} className="item">
                                <p className="title">USA</p>
                                <p className="text">SAN FRANCISCO</p>
                                <p className="text">39 East 8th St.</p>
                                <p className="text"> San Francisco, CA 94110</p>
                            </Col>

                            <Col xs={24} sm={12} md={12} lg={12} xl={6} className="item">
                                <p className="title">India</p>
                                <p className="text">NEW DELHI</p>
                                <p className="text">Gwalior, M.P</p>
                                <p className="text">Pincode 474009 </p>
                            </Col>
                        </Row>
                        <Row className="footer-footer">
                            <div className="first-container">
                                <RiCopyrightLine color="#ffffff" size={16} />
                                <span className="text">Gapstack {moment().year()}. All Rights Reserved</span>
                            </div>
                            <div className="second-container">
                                <RiLinkedinFill style={{ cursor: 'pointer' }} color="#ffffff" size={16} onClick={goToLinkedIN} />
                            </div>
                        </Row>
                    </Col>
                </Row>
            </Fade>
        </FooterWrapper>
    );
}

export default Footer;
