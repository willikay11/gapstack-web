import React from "react";
import {Fade} from "react-awesome-reveal";
import {Col, Row} from "antd";
import gapstackLogo from "../../../assets/gapStackLogo.svg";
import {MdCopyright} from "react-icons/md";

const Footer = () => {
    return (
        <Fade triggerOnce={true} fraction={0.3}>
            <Row style={{ marginTop: 50, marginBottom: 50 }}>
                <Col offset={4} span={16}>
                    <Row gutter={16}>
                        <Col span={6}>
                            <Row style={{ marginBottom: 10 }}>
                                <img height={40} src={gapstackLogo} alt='alternate'/>
                            </Row>
                            <p style={{ marginBottom: 10, color: '#40a9ff'}}>info@gapstack.com</p>

                            <p>Nairobi</p>
                            <p>Ankole Grill</p>
                            <p>Senteu Plaza, Galana Road</p>
                        </Col>

                        <Col span={6}>
                            <p style={{ marginBottom: 10, color: '#39426A', fontWeight: 600, fontSize: 18 }}>Solutions</p>

                            <p>For Banks</p>
                            <p>For Businesses</p>
                            <p>For Agents</p>
                        </Col>

                        <Col span={6}>
                            <p style={{ marginBottom: 10, color: '#39426A', fontWeight: 600, fontSize: 18 }}>Company</p>

                            <p>About</p>
                            <p>Careers</p>
                            <p>Contact Us</p>
                            <p>Press</p>
                            <p>Terms & Conditions</p>
                            <p>Privacy Policy</p>
                        </Col>

                        <Col span={6}>
                            <p style={{ marginBottom: 10, color: '#39426A', fontWeight: 600, fontSize: 18 }}>Resources</p>

                            <p>Blog</p>
                            <p>Support</p>
                            <p>Developers</p>
                        </Col>

                    </Row>
                </Col>
            </Row>

            <Row style={{ height: 100, marginTop: 50, marginBottom: 50, borderTop: '1px solid #F3F4F8' }}>
                <Col offset={4} style={{ display: 'flex', alignItems: 'center' }}>
                    <p><MdCopyright /> Gapstack 2020. All Right Reserved</p>
                </Col>
            </Row>
        </Fade>
    );
}

export default Footer;