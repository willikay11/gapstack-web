import React from "react";
import {Fade} from "react-awesome-reveal";
import {Col, Row} from "antd";
import styled from "styled-components";
import { style } from "./styles";
import CoolKidsMeeting from "../../../assets/Cool-Kids-Pitch-Meeting.webp";
import CoolKidsDiscussion from "../../../assets/Cool-Kids-Discussion.webp";
import CoolKidsStanding from "../../../assets/Cool-Kids-Standing.webp";
const UsersWrapper = styled.div`
  ${style}
`;

const Solutions = () => {
    return (
        <UsersWrapper>
            <Fade triggerOnce={true} fraction={0.3}>
                <Row className="container">
                    <Col xs={{ offset: 2, span: 20 }}
                         sm={{ offset: 2, span: 22 }}
                         md={{ offset: 2, span: 22 }}
                         lg={{ offset: 4, span: 16 }}
                         xl={{ offset: 4, span: 16 }}>
                        <Row>
                            <Col xs={24} sm={24} md={24} lg={10} xl={10}>
                                <p className="title">The Business Growth Platform </p>
                                {/*<p className="description">Thousands of organizations of all sizes trust Gapstack to grow their business.</p>*/}
                            </Col>
                        </Row>
                        <Row className="owl-carousel-container" gutter={20}>
                            <Col xs={22}
                                 sm={22}
                                 md={22}
                                 lg={8}
                                 xl={8}>
                                <div className="item">
                                    <img className="img image" src={CoolKidsMeeting} alt='alternate'/>
                                    <div className="description-container">
                                        <p className="title">Gapstack for Banks</p>
                                        <p style={{ fontSize: 16, color: '#39426A', lineHeight: '30px' }}>
                                            Optimize your eco-system and value chain financing processes. Enrich your market acquisition strategy and grow your customer wallet share.                                        </p>
                                    </div>
                                </div>
                            </Col>

                            <Col xs={22}
                                 sm={22}
                                 md={22}
                                 lg={8}
                                 xl={8}>
                                <div className="item">
                                    <img className="img image" src={CoolKidsDiscussion} alt='alternate'/>
                                    <div className="description-container">
                                        <p className="title">Gapstack for Businesses</p>
                                        <p style={{ fontSize: 16, color: '#39426A', lineHeight: '30px' }}>
                                            Automate & digitize your entire business operations. Scale and grow your business by faster access to finance when you need it.                                        </p>
                                    </div>
                                </div>
                            </Col>

                            <Col xs={22}
                                 sm={22}
                                 md={22}
                                 lg={8}
                                 xl={8}>
                                <div className="item">
                                    <img className="img image" src= {CoolKidsStanding} alt='alternate'/>
                                    <div className="description-container">
                                        <p className="title">Gapstack for Agents</p>
                                        <p style={{ fontSize: 16, color: '#39426A', lineHeight: '30px' }}>
                                            Digitize connections to your financial partners. Realize greater opportunities to scale and grow your network’s access to financing.
                                        </p>
                                    </div>
                                </div>
                            </Col>
                        </Row>
                    </Col>
                </Row>
            </Fade>
        </UsersWrapper>
    );
}

export default Solutions;
