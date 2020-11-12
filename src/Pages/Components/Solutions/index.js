import React from "react";
import {Fade} from "react-awesome-reveal";
import {Col, Row} from "antd";
import styled from "styled-components";
import { style } from "./styles";
import CoolKidsMeeting from "../../../assets/Cool-Kids-Pitch-Meeting.svg";
import CoolKidsDiscussion from "../../../assets/Cool-Kids-Discussion.svg";
import CoolKidsStanding from "../../../assets/Cool-Kids-Standing.svg";
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
                                <p className="description">Thousands of organizations of all sizes trust Gapstack to grow their business.</p>
                            </Col>
                        </Row>
                        <Row className="owl-carousel-container" gutter={20}>
                            <Col xs={22}
                                 sm={22}
                                 md={22}
                                 lg={8}
                                 xl={8}>
                                <div>
                                    <img className="img image" src={CoolKidsMeeting} alt='alternate'/>
                                    <div className="description-container">
                                        <p className="title">Gapstack for Banks</p>
                                        <p style={{ fontSize: 16, color: '#39426A', lineHeight: '30px' }}>
                                            Gapstack provides and end to end process flow for customer due diligence, financing and guarantee workflows and Automated integrations to the banks you serve.
                                        </p>
                                    </div>
                                </div>
                            </Col>

                            <Col xs={22}
                                 sm={22}
                                 md={22}
                                 lg={8}
                                 xl={8}>
                                <div>
                                    <img className="img image" src={CoolKidsDiscussion} alt='alternate'/>
                                    <div className="description-container">
                                        <p className="title">Gapstack for Businesses</p>
                                        <p style={{ fontSize: 16, color: '#39426A', lineHeight: '30px' }}>
                                            Automate & digitize your entire business operations and get funding when you need it. From Bank guarantees such as bid bonds to advance payment guarantees. Get it all.
                                        </p>
                                    </div>
                                </div>
                            </Col>

                            <Col xs={22}
                                 sm={22}
                                 md={22}
                                 lg={8}
                                 xl={8}>
                                <div>
                                    <img className="img image" src= {CoolKidsStanding} alt='alternate'/>
                                    <div className="description-container">
                                        <p className="title">Gapstack for Agents</p>
                                        <p style={{ fontSize: 16, color: '#39426A', lineHeight: '30px' }}>
                                            Gapstack provides and end to end process flow for customer due diligence, financing and guarantee workflows and Automated integrations to the banks you serve.
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