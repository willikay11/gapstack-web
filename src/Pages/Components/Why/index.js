import React from "react";
import {Button, Col, Row} from "antd";
import {MdLocalOffer, MdPayment, MdPeople} from "react-icons/md";
import {FaChartBar, FaGlobe, FaWallet} from "react-icons/fa";
import {Fade} from "react-awesome-reveal";
import styled from "styled-components";
import { style } from "./styles";

const WhyWrapper = styled.div`
  ${style}
`;

const Why = () => {
    return (
        <WhyWrapper>
            <Fade triggerOnce={true} fraction={0.3}>
                <Row className="container">
                    <Col offset={4} span={16}>
                        <Row>
                            <Col span={8}>
                                <p className="title">Why Gapstack</p>
                            </Col>
                        </Row>

                        <Row gutter={[16, 80]}>
                            <Col xs={24} sm={24} md={12} lg={8} xl={8} className="item">
                                <MdPeople color='#7C60FF' size={54}/>
                                <p className="title">Connected Buyers & Suppliers</p>
                                <p className="description" style={{ marginBottom: '.5rem' }}>Create & send your invoices and orders on Gapstack</p>
                                <p className="description" style={{ marginBottom: '.5rem' }}>- Create, upload & send your orders to suppliers</p>
                                <p className="description" style={{ marginBottom: '.5rem' }}>- Create, upload & send purchase invoices</p>
                                <p className="description" style={{ marginBottom: '.5rem' }}>- Track payment of invoices</p>
                            </Col>

                            <Col xs={24} sm={24} md={12} lg={8} xl={8} className="item">
                                <MdPayment color='#E74C3C' size={54} />
                                <p className="title">Seamless Payments</p>
                                <p className="description">
                                    Pay your suppliers and receive payments from your buyers to your bank account or mobile wallet with the touch of a button
                                </p>
                            </Col>

                            <Col xs={24} sm={24} md={12} lg={8} xl={8} className="item">
                                <MdLocalOffer color='#008D3D' size={54} />
                                <p className="title">Get Early Payment on Your Invoices</p>
                                <p className="description">
                                    Connect with your bank and improve your cashflows by discounting or factoring your customer invoices
                                </p>
                            </Col>

                            <Col xs={24} sm={24} md={12} lg={8} xl={8} className="item">
                                <FaWallet color='#39426A' size={54} />
                                <p className="title">Pay Your Suppliers Early</p>
                                <p  className="description">
                                    Drive loyalty with your suppliers and grow your ecosystem by providing faster payments to your suppliers through early payments
                                </p>
                            </Col>

                            <Col xs={24} sm={24} md={12} lg={8} xl={8} className="item">
                                <FaChartBar color='#F6B93B' size={54} />
                                <p className="title">Robust Data & Analytics</p>
                                <p className="description">
                                    Generate insight into your entire operations by slicing and dicing data on your business through our analytics engine
                                </p>
                            </Col>

                            <Col xs={24} sm={24} md={12} lg={8} xl={8} className="item">
                                <FaGlobe color='#E55039' size={54} />
                                <p className="title">Cross Border Payments</p>
                                <p className="description">
                                    Automate your business and improve cashflow. Create sales orders & invoices or upload supplier documents and connect to your bank to receive early payments
                                </p>
                            </Col>

                            <Col span={24}>
                                <Button style={{ color: '#fff', backgroundColor: '#7C60FF', height: 50, borderRadius: 4 }}>Create Your Free Account Today</Button>
                            </Col>
                        </Row>
                    </Col>
                </Row>
            </Fade>
        </WhyWrapper>
    );
}

export default Why;