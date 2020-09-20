import React from "react";
import {Fade} from "react-awesome-reveal";
import {Col, Row} from "antd";
import OwlCarousel from "react-owl-carousel";
import CoolKidsMeeting from "../../../assets/Cool-Kids-Pitch-Meeting.svg";
import CoolKidsDiscussion from "../../../assets/Cool-Kids-Discussion.svg";

const Users = () => {
    return (
        <Fade triggerOnce={true} fraction={0.3}>
            <Row style={{ minHeight: 500, marginTop: 50, marginBottom: 50 }}>
                <Col offset={4} span={20}>
                    <Row>
                        <Col span={10}>
                            <p style={{ color: '#E74C3C', fontSize:16, fontWeight: '500', lineHeight: '25px' }}>How we do it</p>
                            <p style={{ color: '#39426A', fontSize:44, fontWeight: '800', lineHeight: '135.2%' }}>The Business Growth Platform </p>
                            <p style={{ color: '#39426A', fontSize: 16, lineHeight: '30px' }}>Thousands of organizations of all sizes trust Gapstack to grow their business.</p>
                        </Col>
                    </Row>
                    <Row style={{ marginTop: 10, marginBottom: 10 }}>
                        <OwlCarousel items={2.5}
                                     className="owl-theme"
                                     loop
                                     nav
                                     margin={20} >
                            <div style={{ backgroundColor: '#fff', borderRadius: '5px', boxShadow: '0px 0px 4px rgba(0, 0, 0, 0.1)', padding: 20 }}>
                                <img className="img" src={CoolKidsMeeting} height='350px' alt='alternate'/>
                                <p style={{ fontSize: 34, color: '#39426A', fontWeight: 800 }}>Gapstack for Banks</p>
                                <p style={{ fontSize: 16, color: '#39426A', lineHeight: '30px' }}>
                                    Deepen your relationship with the value chain ecosystem and understand your customer's business more intimately. Gapstack gives you insights to your customers operations and de-risks supply chain financing.
                                </p>
                            </div>

                            <div style={{ backgroundColor: '#fff', borderRadius: '5px', boxShadow: '0px 0px 4px rgba(0, 0, 0, 0.1)', padding: 20 }}>
                                <img className="img" src= {CoolKidsDiscussion} height='350px' alt='alternate'/>
                                <p style={{ fontSize: 34, color: '#39426A', fontWeight: 800 }}>Gapstack for Business</p>
                                <p style={{ fontSize: 16, color: '#39426A', lineHeight: '30px' }}>
                                    Automate & digitize your entire business operations and get funding when you need it. From Bank guarantees such as bid bonds to advance payment guarantees. Get it all.
                                </p>
                            </div>

                            <div style={{ backgroundColor: '#fff', borderRadius: '5px', boxShadow: '0px 0px 4px rgba(0, 0, 0, 0.1)', padding: 20 }}>
                                <img className="img" src= {CoolKidsMeeting} height='350px' alt='alternate'/>
                                <p style={{ fontSize: 34, color: '#39426A', fontWeight: 800 }}>Gapstack for Agents</p>
                                <p style={{ fontSize: 16, color: '#39426A', lineHeight: '30px' }}>
                                    Gapstack provides and end to end process flow for customer due diligence, financing and guarantee workflows and Automated integrations to the banks you serve.
                                </p>
                            </div>
                        </OwlCarousel>
                    </Row>
                </Col>
            </Row>
        </Fade>
    );
}

export default Users;