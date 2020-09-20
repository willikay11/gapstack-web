import React from "react";
import {Fade} from "react-awesome-reveal";
import {Col, Row} from "antd";
import OwlCarousel from "react-owl-carousel";
import styled from "styled-components";
import { style } from "./styles";
import CoolKidsMeeting from "../../../assets/Cool-Kids-Pitch-Meeting.svg";
import CoolKidsDiscussion from "../../../assets/Cool-Kids-Discussion.svg";
const UsersWrapper = styled.div`
  ${style}
`;

const options = {
    margin: 20,
    loop: true,
    nav: true,
    responsive: {
        0: {
            items: 1,
        },
        400: {
            items: 1,
        },
        600: {
            items: 2,
        },
        700: {
            items: 3,
        },
        1000: {
            items: 2.5
        }
    }
}

const Solutions = ({ refProp }) => {
    return (
        <UsersWrapper ref={refProp}>
            <Fade triggerOnce={true} fraction={0.3}>
                <Row className="container">
                    <Col xs={{ offset: 2, span: 22 }}
                         sm={{ offset: 2, span: 22 }}
                         md={{ offset: 2, span: 22 }}
                         lg={{ offset: 4, span: 20 }}
                         xl={{ offset: 4, span: 20 }}>
                        <Row>
                            <Col xs={24} sm={24} md={24} lg={10} xl={10}>
                                <p className="sub-title">How we do it</p>
                                <p className="title">The Business Growth Platform </p>
                                <p className="description">Thousands of organizations of all sizes trust Gapstack to grow their business.</p>
                            </Col>
                        </Row>
                        <Row className="owl-carousel-container">
                            <OwlCarousel className="owl-theme" {...options}>
                                <div className="item">
                                    <img className="img image" src={CoolKidsMeeting} alt='alternate'/>
                                    <p className="title">Gapstack for Banks</p>
                                    <p className="description">
                                        Deepen your relationship with the value chain ecosystem and understand your customer's business more intimately. Gapstack gives you insights to your customers operations and de-risks supply chain financing.
                                    </p>
                                </div>

                                <div className="item">
                                    <img className="img image" src= {CoolKidsDiscussion} height='350px' alt='alternate'/>
                                    <p className="title">Gapstack for Business</p>
                                    <p style={{ fontSize: 16, color: '#39426A', lineHeight: '30px' }}>
                                        Automate & digitize your entire business operations and get funding when you need it. From Bank guarantees such as bid bonds to advance payment guarantees. Get it all.
                                    </p>
                                </div>

                                <div className="item">
                                    <img className="img" src= {CoolKidsMeeting} height='350px' alt='alternate'/>
                                    <p className="title">Gapstack for Agents</p>
                                    <p className="description">
                                        Gapstack provides and end to end process flow for customer due diligence, financing and guarantee workflows and Automated integrations to the banks you serve.
                                    </p>
                                </div>
                            </OwlCarousel>
                        </Row>
                    </Col>
                </Row>
            </Fade>
        </UsersWrapper>
    );
}

export default Solutions;