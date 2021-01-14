import React from "react";
import { Fade } from "react-awesome-reveal";
import { Col, Row, Divider } from "antd";
import OwlCarousel from 'react-owl-carousel';
// import 'owl.carousel/dist/assets/owl.carousel.css';
// import 'owl.carousel/dist/assets/owl.theme.default.css';
import styled from "styled-components";
import { style } from "./styles";
import {BiChip, IoMdAnalytics} from "react-icons/all";
import {MdPayment } from "react-icons/md";
import {FaGlobe} from "react-icons/fa";

const WhoWrapper = styled.div`
  ${style}
`;

const Who = () => {
    return (
        <WhoWrapper>
            <Fade triggerOnce={true} fraction={0.1}>
                <Row className="container">
                    <Col xs={{ span: 20, offset: 2 }}
                         sm={{ span: 20, offset: 2 }}
                         md={{ span: 20, offset: 2 }}
                         lg={{ span: 16, offset: 4 }}
                         xl={{ span: 16, offset: 4 }}>
                        <Row>
                            <Col xs={24} sm={24} md={24} lg={18} xl={18}>
                                <p className="title">
                                    Automate
                                    <Divider type='vertical' style={{ height: 35, borderLeft: '2px solid #39426A', margin: '0px 15px' }}/>
                                    Fund
                                    <Divider type='vertical' style={{ height: 35, borderLeft: '2px solid #39426A', margin: '0px 15px' }}/>
                                    Network
                                </p>
                                <p className="sub-title">Trade made easy. Manage all your business transactions, local and global on one platform.</p>
                            </Col>
                        </Row>
                    </Col>
                    <Col xs={{ span: 20, offset: 2 }}
                         sm={{ span: 20, offset: 2 }}
                         md={{ span: 20, offset: 2 }}
                         lg={{ span: 20, offset: 4 }}
                         xl={{ span: 20, offset: 4 }}>
                        <Row>
                            <Col xs={24} sm={24} md={24} lg={24} xl={24}>
                                <OwlCarousel className="owl-carousel owl-theme"
                                             loop
                                             responsiveClass={true}
                                             nav
                                             dots={false}
                                             margin={10}
                                             responsive={
                                                 {
                                                     0: {
                                                         items: 1
                                                     },
                                                     600: {
                                                         items: 2
                                                     },
                                                     1000: {
                                                         items: 3.5
                                                     },
                                                     1800: {
                                                         items: 3.5
                                                     }
                                                 }
                                             }
                                >
                                    <div className="owl-container item">
                                        <FaGlobe color='#39426A' className="icon" size={40} />
                                        <p className="title">Working Capital</p>
                                        <p className="description">
                                            Improve the liquidity of your business by faster financing options including invoice discounting, inventory, trade and distributor finance. Access business financing when you need it.
                                        </p>
                                    </div>
                                    <div className="owl-container item">
                                        <BiChip color='#1E87F0' className="icon" size={40}/>
                                        <p className="title">Digital Trade</p>
                                        <p className="description">
                                            Connect with your domestic and international buyers & suppliers on a single trade platform. View your financial capacity, trends and relationships.
                                        </p>
                                    </div>
                                    <div className="owl-container item">
                                        <IoMdAnalytics color='#E55039' className="icon" size={40} />
                                        <p className="title">Data Analytics</p>
                                        <p className="description">
                                            Using our dashboard, monitor your company’s performance at a glance. Make sound business decisions based on data-driven insights.
                                        </p>
                                    </div>
                                    <div className="owl-container item">
                                        <MdPayment color='#2CCC71' className="icon" size={40} />
                                        <p className="title">Secure Payments</p>
                                        <p className="description">
                                            Execute and track payments using your bank account or mobile wallet from one place. Get real time updates on all your money matters.
                                        </p>
                                    </div>
                                </OwlCarousel>
                            </Col>
                        </Row>
                    </Col>
                </Row>
            </Fade>
        </WhoWrapper>
    );
}

export default Who;
