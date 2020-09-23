import React from "react";
import { Col, Row} from "antd";
import { MdPayment, MdPeople } from "react-icons/md";
import { FaChartBar, FaGlobe } from "react-icons/fa";
import { BiChip } from "react-icons/all";
import { Fade } from "react-awesome-reveal";
import styled from "styled-components";
import { style } from "./styles";

const WhyWrapper = styled.div`
  ${style}
`;

const Why = () => {
    return (
        <WhyWrapper>
            <Fade triggerOnce={true} fraction={0.1}>
                <Row className="container">
                    <Col xs={{ span: 20, offset: 2 }}
                         sm={{ span: 20, offset: 2 }}
                         md={{ span: 20, offset: 2 }}
                         lg={{ span: 16, offset: 4 }}
                         xl={{ span: 16, offset: 4 }}>
                        <Row>
                            <Col xs={24} sm={24} md={24} xl={8} lg={8}>
                                <p className="title">Why Gapstack</p>
                            </Col>
                        </Row>

                        <Row gutter={[32, 42]}>
                            <Col xs={24} sm={24} md={12} lg={12} xl={8} className="item">
                                <BiChip color='#1E87F0' className="icon" size={40}/>
                                <p className="title">Digital trade network</p>
                                <p className="description">A comprehensive & AI powered platform at the core of your operations from finance, sales, procurement to technology to identify key levers for growth and scale  in a snapshot.</p>
                            </Col>

                            <Col xs={24} sm={24} md={12} lg={12} xl={8} className="item">
                                <MdPeople color='#7C60FF' className="icon" size={40}/>
                                <p className="title">Connected Buyers & Suppliers</p>
                                <p className="description" style={{ marginBottom: '.5rem' }}>Map each relationship between your buyers and suppliers to understand each node</p>
                                <p className="description" style={{ marginBottom: '.5rem' }}>- Create, upload & send your orders to buyers & suppliers</p>
                                <p className="description" style={{ marginBottom: '.5rem' }}>- Create, upload & send purchase invoices</p>
                                <p className="description" style={{ marginBottom: '.5rem' }}>- Track payment of invoices</p>
                            </Col>

                            <Col xs={24} sm={24} md={12} lg={12} xl={8} className="item">
                                <MdPayment color='#2CCC71' className="icon" size={40} />
                                <p className="title">Seamless Payments</p>
                                <p className="description">
                                    Pay your suppliers and receive payments from your buyers to your bank account or mobile wallet with the touch of a button
                                </p>
                            </Col>

                            <Col xs={24} sm={24} md={12} lg={12} xl={8} className="item">
                                <FaChartBar color='#F6B93B' className="icon" size={40} />
                                <p className="title">Robust Data & Analytics</p>
                                <p className="description">
                                    Generate insight into your entire operations by slicing and dicing data on your business through our analytics engine
                                </p>
                            </Col>

                            <Col xs={24} sm={24} md={12} lg={12} xl={8} className="item">
                                <FaGlobe color='#39426A' className="icon" size={40} />
                                <p className="title">Intuitive & Scalable  technology</p>
                                <p className="description">
                                    Built on highly resilient microservices architecture with cloud and on prem hybrid to cater for data residency but at the same time agile technologies to connect to ERPs and Banking systems                                </p>
                            </Col>
                        </Row>
                    </Col>
                </Row>
            </Fade>
        </WhyWrapper>
    );
}

export default Why;