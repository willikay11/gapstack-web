import React from "react";
import { Fade } from "react-awesome-reveal";
import { Col, Row } from "antd";
import OwlCarousel from 'react-owl-carousel';
// import 'owl.carousel/dist/assets/owl.carousel.css';
// import 'owl.carousel/dist/assets/owl.theme.default.css';
import styled from "styled-components";
import { style } from "./styles";
import { BiChip } from "react-icons/all";
import {MdPayment, MdPeople} from "react-icons/md";
import {FaChartBar, FaGlobe} from "react-icons/fa";

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
                                <p className="sub-title">Who we are</p>
                                <p className="title">At Gap stack, we are on a mission to build a  funding ecosystem for Businesses</p>
                            </Col>
                        </Row>
                    </Col>
                    <Col xs={{ span: 20, offset: 2 }}
                         sm={{ span: 20, offset: 2 }}
                         md={{ span: 20, offset: 2 }}
                         lg={{ span: 20, offset: 4 }}
                         xl={{ span: 20, offset: 4 }}>
                        <Row>
                            <Col xs={24} sm={24} md={24} lg={24} xl={8} style={{ paddingRight: 40 }}>
                                <p className="description">We believe in giving businesses the liberty to automate buy & sell processes, unlock & build business networks and access funding at scale.</p>
                                <p className="description">In a unified and comprehensive technology platform, businesses of all sizes  can start their digitization journey targeting the heart of their operations – the source of their cash.  A business can automate their accounts payables and accounts receivables, eliminating the need for paper based transactions.</p>
                                <p className="description">We understand the importance of working capital to the operations of a business and have offered a unique ability to liberate this cash from your accounts receivables.  Instead of waiting 30- 180 days to get paid, access your capital in days to grow and scale.  We know you want to fund larger orders as part of your growth mission and avail a seamless channel to access the capital needed to unlock these opportunities.</p>
                                <p className="description">A true digital business cannot exist without understanding its dependencies and we map your entire business network around your buying and selling relationships through our AI powered engine, to  identify important nodes in your network and how they affect your growth and scale.</p>
                            </Col>
                            <Col xs={24} sm={24} md={24} lg={24} xl={16}>
                                <OwlCarousel items={2.75} className="owl-theme" loop nav margin={20} autoWidth>
                                    <div className="owl-container">
                                        <BiChip color='#1E87F0' className="icon" size={40}/>
                                        <p className="title">Digital trade network</p>
                                        <p className="description">An AI powered platform at the core of your operations. In a snapshot, our demand and supply prediction tools will highlight cash drivers in your business from  finance, sales, procurement for smarter decision making</p>
                                    </div>
                                    <div className="owl-container">
                                        <MdPeople color='#7C60FF' className="icon" size={40}/>
                                        <p className="title">Connected Buyers & Suppliers</p>
                                        <p className="description" style={{ marginBottom: '.5rem' }}>Map each relationship between your buyers and suppliers to understand each node</p>
                                        <p className="description" style={{ marginBottom: '.5rem' }}>- Create, upload & send your orders, POs & invoices from a unified channel</p>
                                        <p className="description" style={{ marginBottom: '.5rem' }}>- Create, upload & send purchase invoices</p>
                                        <p className="description" style={{ marginBottom: '.5rem' }}>- Track payment of invoices</p>                                    </div>
                                    <div className="owl-container">
                                        <MdPayment color='#2CCC71' className="icon" size={40} />
                                        <p className="title">Seamless Payments</p>
                                        <p className="description">
                                            Pay your suppliers and receive payments from your buyers to your bank account or mobile wallet with the touch of a button
                                        </p>
                                    </div>
                                    <div className="owl-container">
                                        <FaChartBar color='#F6B93B' className="icon" size={40} />
                                        <p className="title">Robust Data & Analytics</p>
                                        <p className="description">
                                            Generate insight into your entire operations by slicing and dicing data on your business through our analytics engine
                                        </p>
                                    </div>
                                    <div className="owl-container">
                                        <FaGlobe color='#39426A' className="icon" size={40} />
                                        <p className="title">Intuitive & Scalable  technology</p>
                                        <p className="description">
                                            Built on highly resilient microservices architecture with cloud and on prem hybrid to cater for data residency but at the same time agile technologies to connect to ERPs and Banking systems
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