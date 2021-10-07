import React, {useState} from "react";
import {Fade} from "react-awesome-reveal";
import {Col, Row} from "antd";
import styled from "styled-components";
import { style } from "./styles";
import ContactForm from "../Contact/Components/Form";
import {GapstackButton} from "../../../Components/Buttons";
import SailingShip from "../../../assets/SailingShip.svg";
import Port from "../../../assets/Port.svg";
import PortDock from "../../../assets/PortDock.svg";

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
                                <GapstackButton type="orange" buttonName="Contact Sales" onClick={() => setModalVisibility(true)} />
                            </Col>
                        </Row>
                        <Row style={{ marginTop: 20 }} gutter={20}>
                            <Col xs={24} sm={24} md={24} lg={14} xl={14}>
                                <div className="background-content large-image" style={{ backgroundImage: `url(${SailingShip})` }}>
                                    <div className="text-container">
                                        <p className="title">Gapstack for Banks</p>
                                        <p className="description">Optimize your eco-system and value chain financing processes. Enrich your market acquisition strategy and grow your customer wallet share</p>
                                    </div>
                                </div>
                            </Col>
                            <Col xs={24} sm={24} md={24} lg={10} xl={10}>
                                <Row>
                                    <div className="background-content small-image" style={{ backgroundImage: `url(${Port})` }}>
                                        <div className="text-container">
                                            <p className="title">Gapstack for Businesses</p>
                                            <p className="description">Automate & digitize your entire business operations. Scale and grow your business by faster access to finance when you need it.</p>
                                        </div>
                                    </div>

                                    <div className="background-content small-image" style={{ marginTop: 20, backgroundImage: `url(${PortDock})` }}>
                                        <div className="text-container">
                                            <p className="title">Gapstack for Agents</p>
                                            <p className="description">Digitize connections to your financial partners. Realize greater opportunities to scale and grow your network’s access to financing.</p>
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
