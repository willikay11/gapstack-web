import React from "react";
import { Col, Row } from "antd";
import { IoIosCog, IoIosDocument, IoIosWallet } from "react-icons/all";
import CountryFlags from '../../../assets/country-flags.webp';
import {Fade} from "react-awesome-reveal";
import styled from "styled-components";
import { style } from "./styles";

const DashboardWrapper = styled.div`
  ${style}
`;

const Dashboard = ({ refProp }) => {
    return (
        <DashboardWrapper ref={refProp} backgroundImage={CountryFlags}>
            <Fade triggerOnce={true} fraction={0.1}>
                <Row className="container">
                    <div className="container-two">
                        <Col xs={{ span:20, offset:2 }}
                             sm={{ span:20, offset:2 }}
                             md={{ span:20, offset:2 }}
                             lg={{ span:16, offset:4 }}
                             xl={{ span:16, offset:4 }}>
                            <Row className="title-container">
                                <Col xs={24} sm={24} md={24} lg={18} xl={16}>
                                    {/*<p className="title">*/}
                                    {/*    Automate*/}
                                    {/*    <Divider type='vertical' style={{ height: 35, borderLeft: '2px solid #39426A', margin: '0px 15px' }}/>*/}
                                    {/*    Fund*/}
                                    {/*    <Divider type='vertical' style={{ height: 35, borderLeft: '2px solid #39426A', margin: '0px 15px' }}/>*/}
                                    {/*    Network*/}
                                    {/*</p>*/}
                                    <p className="title">
                                        Powerful Digital Supply Chain & Trade Finance Platform
                                    </p>
                                </Col>
                            </Row>

                            {/*<Row className="description-container">*/}
                            {/*    <Col xs={24} sm={24} md={24} lg={16} xl={12}>*/}
                            {/*        <p className="description">Transform & position your business today for growth and scale through the Gapstack business growth platform. </p>*/}
                            {/*    </Col>*/}
                            {/*</Row>*/}

                            <Row gutter={[32, 42]}>
                                <Col xs={24} sm={24} md={12} lg={12} xl={8} className="item">
                                    <IoIosCog color='#7C60FF' size={40} className="icon" />
                                    <p className="title">Business Automation</p>
                                    <p className="description">
                                        Leverage our automation suite to build a true digital business around your supply chain processes from invoicing, ordering, payments and bonds.
                                    </p>
                                </Col>

                                <Col xs={24} sm={24} md={12} lg={12} xl={8} className="item">
                                    <IoIosDocument color='#1E87F0' size={40} className="icon" />
                                    <p className="title">Working Capital & Order Financing</p>
                                    <p className="description">
                                        Liberate cash to boost and grow your business through faster access to financing from your invoices and orders.
                                    </p>
                                </Col>

                                <Col xs={24} sm={24} md={12} lg={12} xl={8} className="item">
                                    <IoIosWallet color='#F6B93B' size={40} className="icon" />
                                    <p className="title">Trade Finance</p>
                                    <p className="description">
                                        Reduce the tie up of capital in global trade with customized solutions. Unlock international trade capital financing for pre & post shipment, inventory, freight, and duty charges.
                                    </p>
                                </Col>

                                <Col xs={24} sm={24} md={12} lg={12} xl={8} className="item">
                                    <p className="title">The Gapstack Advantage</p>

                                    <div style={{ display: 'flex', alignItems: 'center' }}>
                                        <div className="bullet" />
                                        <p className="description">
                                            Cross border trade financing.
                                        </p>
                                    </div>

                                    <div style={{ display: 'flex', alignItems: 'center' }}>
                                        <div className="bullet" />
                                        <p className="description">
                                            Growth in business networks and net worth.
                                        </p>
                                    </div>

                                </Col>

                                <Col xs={24} sm={24} md={12} lg={12} xl={8} className="item">
                                    <div style={{ marginTop: '11.5%' }}/>

                                    <div style={{ display: 'flex', alignItems: 'center' }}>
                                        <div className="bullet" />
                                        <p className="description">
                                            Get paid early and pay early.
                                        </p>
                                    </div>

                                    <div style={{ display: 'flex', alignItems: 'center' }}>
                                        <div className="bullet" />
                                        <p className="description">
                                            Real time view of business performance.
                                        </p>
                                    </div>
                                </Col>
                            </Row>
                        </Col>
                    </div>
                </Row>
            </Fade>
        </DashboardWrapper>
    );
}

export default Dashboard;
