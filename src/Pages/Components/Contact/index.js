import React, { useState } from "react";
import {Fade} from "react-awesome-reveal";
import {Button, Col, Row} from "antd";
import {IoIosCall, IoIosEasel} from "react-icons/all";
import styled from "styled-components";
import ContactForm from "./Components/Form/index";
import { style } from "./styles";
import ConnectedIcon from '../../../assets/Connected.png';

const ContactWrapper = styled.div`
  ${style}
`;

const Contact = ({ refProp }) => {
    const [visible, setVisibility] = useState(false)

    const setModalVisibility = (visible) => {
        setVisibility(visible);
    }

    return (
        <ContactWrapper ref={refProp}>
            <ContactForm visible={visible} setModalVisibility={setModalVisibility} />
            <Fade triggerOnce={true} fraction={0.3}>
                <Row className="container">
                    <Col xs={{ offset: 2, span: 20 }}
                         sm={{ offset: 2, span: 22 }}
                         md={{ offset: 2, span: 22 }}
                         lg={{ offset: 4, span: 16 }}
                         xl={{ offset: 4, span: 16 }}>
                        <Row>
                            {/*<div className="linear-gradient-background" />*/}
                            <Col xs={{ span:20 }}
                                 sm={{ span:20 }}
                                 md={{ span:20 }}
                                 lg={{ span:14 }}
                                 xl={{ span:14 }}>
                                <p className="title">Ready to take your business to the next level?</p>
                            </Col>
                        </Row>
                        <Row gutter={16}>
                            <Col xs={{ span:20 }}
                                 sm={{ span:20 }}
                                 md={{ span:10 }}
                                 lg={{ span:8 }}
                                 xl={{ span:8 }}>
                                <IoIosCall color='#1E87F0' size={40} className="icon" />
                                <p className="title-two">
                                    Contact Us Now
                                </p>
                                <p className="description">
                                    We can’t wait to have a chat with you and start the journey together.
                                </p>
                                <p className="description">
                                    Leave us a message.
                                </p>
                            </Col>

                            <Col xs={{ span:20 }}
                                 sm={{ span:20 }}
                                 md={{ span:8 }}
                                 lg={{ span:8 }}
                                 xl={{ span:8 }}>
                                <img src={ConnectedIcon} width={40} style={{ marginBottom: 5 }} alt="Connected Icon" />
                                <p className="title-two">
                                    Get Connected
                                </p>
                                <p className="description">
                                    Start your integration with our user friendly and state of the art technology.
                                </p>
                            </Col>

                            <Col xs={{ span:20 }}
                                 sm={{ span:20 }}
                                 md={{ span:8 }}
                                 lg={{ span:8 }}
                                 xl={{ span:8 }}>
                                <IoIosEasel color='#39426A' size={40} className="icon" />
                                <p className="title-two">
                                    Personalize Your Platform
                                </p>
                                <p className="description">
                                    Automate your business while maintaining your business processes & branding.
                                </p>
                            </Col>
                        </Row>
                        <Row style={{ display: 'flex', justifyContent: 'flex-start' }}>
                            <Col>
                                <Button onClick={() => setModalVisibility(true)}
                                        style={{ color: '#fff', backgroundColor: '#7C60FF', borderRadius: 4, height: 50 }}>
                                    Leave us a message
                                </Button>
                            </Col>
                        </Row>
                    </Col>
                </Row>
            </Fade>
        </ContactWrapper>
    );
}

export default Contact;
