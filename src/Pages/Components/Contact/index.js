import React from "react";
import {Fade} from "react-awesome-reveal";
import {Button, Col, Row} from "antd";
import styled from "styled-components";
import HandImage from "../../../assets/hand-image.png";
import { style } from "./styles";

const ContactWrapper = styled.div`
  ${style}
`;

const Contact = () => {
    return (
        <ContactWrapper backgroundImage={HandImage}>
            <Fade triggerOnce={true} fraction={0.3}>
                <Row className="container">
                    <Col span={24}>
                        <Row className="background-container">
                            <div className="linear-gradient-background" />
                            <Col xs={{span:20, offset: 2}}
                                 sm={{ span:20, offset:2 }}
                                 md={{ span:20, offset:2 }}
                                 lg={{ span:10, offset:4 }}
                                 xl={{ span:10, offset:4 }}>
                                <p className="title" >Ready to get started?</p>
                                <p className="description">
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
        </ContactWrapper>
    );
}

export default Contact;