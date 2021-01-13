import React, { useState } from "react";
import {Fade} from "react-awesome-reveal";
import {Button, Col, Row} from "antd";
import {BiGitBranch, IoIosWallet} from "react-icons/all";
import styled from "styled-components";
import ContactForm from "./Components/Form/index";
import { style } from "./styles";

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
                                <div style={{ marginTop: '7.5vh' }} />
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
                                <IoIosWallet color='#008D3D' size={40} className="icon" />
                                <p className="title-two">
                                    Always know what you pay
                                </p>
                                <p className="description">
                                    Drive loyalty with your suppliers and grow your ecosystem by providing faster payments to your suppliers through early payments.
                                </p>
                            </Col>

                            <Col xs={{ span:20 }}
                                 sm={{ span:20 }}
                                 md={{ span:8 }}
                                 lg={{ span:8 }}
                                 xl={{ span:8 }}>
                                <BiGitBranch color='#FE9902' size={40} className="icon" />
                                <p className="title-two">
                                    Start your integration
                                </p>
                                <p className="description">
                                    Built on highly resilient microservices architecture with cloud and on prem hybrid to
                                </p>
                            </Col>
                        </Row>
                        <Row style={{ display: 'flex', justifyContent: 'flex-end' }}>
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
