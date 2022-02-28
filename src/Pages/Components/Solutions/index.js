import React, {useState} from "react";
import {Fade} from "react-awesome-reveal";
import {Col, Row} from "antd";
import styled from "styled-components";
import { style } from "./styles";
import ContactForm from "../Contact/Components/Form";
import {GapstackButton} from "../../../Components/Buttons";
import SailingShip from "../../../assets/Member1.webp";
import Port from "../../../assets/Member2.webp";
import PortDock from "../../../assets/Member3.webp";

const UsersWrapper = styled.div`
  ${style}
`;

const Solutions = () => {
    const [visible, setVisibility] = useState(false)

    const setModalVisibility = (visible) => {
        setVisibility(visible);
    }
    return (
        <UsersWrapper>
            <ContactForm visible={visible} setModalVisibility={setModalVisibility} />
            <Fade triggerOnce={true} fraction={0.3}>
                <Row className="container">
                    <Col xs={{ offset: 2, span: 20 }}
                         sm={{ offset: 2, span: 22 }}
                         md={{ offset: 2, span: 22 }}
                         lg={{ offset: 4, span: 16 }}
                         xl={{ offset: 4, span: 16 }}>
                        <Row>
                            <Col xs={24} sm={24} md={24} lg={10} xl={10}>
                                <p className="title">Explore the Gapstack Advantage Now</p>
                            </Col>
                            <Col className="button-container" xs={24} sm={24} md={24} lg={14} xl={14}>
                                <GapstackButton type="purple" buttonName="Contact Sales" onClick={() => setModalVisibility(true)} />
                            </Col>
                        </Row>
                        <Row style={{ marginTop: 20 }} gutter={20}>
                            <Col xs={24} sm={24} md={24} lg={14} xl={14}>
                                <div className="background-content large-image" style={{ backgroundImage: `url(${SailingShip})` }}>
                                    <div className="text-container">
                                        <p className="title">Gapstack for Banks</p>
                                        <p className="description">Optimize your eco-system and value chain financing processes with Gapstack. Enrich your market acquisition strategy through our comprehensive digital onboarding tool and manage credit risk dynamically through our data engine to grow profitable relationship with new and existing customers.</p>
                                    </div>
                                </div>
                            </Col>
                            <Col xs={24} sm={24} md={24} lg={10} xl={10}>
                                <Row>
                                    <div className="background-content small-image" style={{ backgroundImage: `url(${Port})` }}>
                                        <div className="text-container">
                                            <p className="title">Gapstack for Businesses</p>
                                            <p className="description">Access working capital. Grow your business. Gapstack provides the means to scale , allowing you to manage your relationships with your buyers, suppliers and financiers.</p>
                                        </div>
                                    </div>

                                    <div className="background-content small-image" style={{ marginTop: 20, backgroundImage: `url(${PortDock})` }}>
                                        <div className="text-container">
                                            <p className="title">Gapstack for Agents</p>
                                            <p className="description">Digitize your capital deployment and explore new trade asset classes. Build verticals of interest to your investment strategy. Manage your portfolio directly on the platform..</p>
                                        </div>
                                    </div>
                                </Row>
                            </Col>
                        </Row>
                    </Col>
                </Row>
            </Fade>
        </UsersWrapper>
    );
}

export default Solutions;
