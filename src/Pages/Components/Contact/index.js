import React from "react";
import {Fade} from "react-awesome-reveal";
import {Button, Col, Row} from "antd";
import HandImage from "../../../assets/hand-image.png";

const Contact = () => {
    return (
        <Fade triggerOnce={true} fraction={0.3}>
            <Row style={{ height: 400 }}>
                <Col span={24}>
                    <Row style={{
                        backgroundImage: `url(${HandImage})`,
                        height: '100%',
                        backgroundSize: 'cover',
                        backgroundRepeat: 'no-repeat',
                        display: 'flex',
                        justifyContent: 'flex-start',
                        alignItems: 'center'
                    }}>
                        <div style={{ background: 'linear-gradient(90deg, rgba(124, 96, 255, 0.9) 31.02%, rgba(0, 0, 0, 0.25) 99.17%)', height: '100%', position: 'absolute', top: 0, bottom: 0, left: 0, right: 0 }}/>
                        <Col offset={4} xs={20} sm={20} md={20} lg={10} xl={10}>
                            <p style={{ color: '#fff', fontSize: '44px', lineHeight: '135.2%', zIndex: 10 }}>Ready to get started?</p>
                            <p style={{ fontSize: 16, lineHeight: '30px', color: '#fff' }}>
                                We are on deck to help you build your businesses digital trade ecosystem today
                            </p>
                            <Row gutter={16}>
                                <Col>
                                    <Button style={{ color: '#7C60FF', backgroundColor: '#fff', borderRadius: 4, height: 50 }}>Create a Free Account</Button>
                                </Col>
                                <Col style={{ display: 'flex', alignItems: 'center' }}>
                                    <Button type='link' style={{ color: '#fff', textDecoration: 'underline' }}>Let Us Call You</Button>
                                </Col>
                            </Row>
                        </Col>
                    </Row>
                </Col>
            </Row>
        </Fade>
    );
}

export default Contact;