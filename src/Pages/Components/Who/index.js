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
                                <p className="title">At Gap stack, we are on a mission to build a trade operating system for all Businesses.</p>
                            </Col>
                        </Row>
                    </Col>
                    <Col xs={{ span: 20, offset: 2 }}
                         sm={{ span: 20, offset: 2 }}
                         md={{ span: 20, offset: 2 }}
                         lg={{ span: 20, offset: 4 }}
                         xl={{ span: 20, offset: 4 }}>
                        <Row>
                            <Col xs={24} sm={24} md={24} lg={24} xl={10} className="left-content">
                                <p className="description">
                                    In a unified and connected technology platform, businesses of all sizes can start their digitization journey targeting the heart of their operations – the source of their cash. A business can automate their accounts payables and accounts receivables, eliminating the need for paper based transactions.
                                </p>

                                <p className="description">
                                    We understand the importance of working capital to the operations of a business and have offered a unique ability to liberate this cash from your accounts receivables. Instead of waiting 30- 180 days to get paid, access your capital in days to grow and scale. We know you want to fund larger orders as part of your growth mission and avail a seamless channel to access the capital needed to unlock these opportunities.
                                </p>

                                <p className="description">
                                    Whether sourcing or selling, locally or globally efficiency is of critical importance. A true digital business cannot exist without understanding its dependencies and we map your entire business network around your buying and selling relationships through our AI powered engine, to identify important nodes in your network and how they affect your growth and scale.
                                </p>
                            </Col>
                            <Col xs={24} sm={24} md={24} lg={24} xl={14}>
                                <OwlCarousel className="owl-carousel owl-theme"
                                             loop
                                             responsiveClass={true}
                                             nav
                                             margin={30}
                                             responsive={
                                                 {
                                                     0: {
                                                         items: 1
                                                     },
                                                     600: {
                                                         items: 2
                                                     },
                                                     1000: {
                                                         items: 2
                                                     },
                                                     1800: {
                                                         items: 2
                                                     }
                                                 }
                                             }
                                >
                                    <div className="owl-container item">
                                        <BiChip color='#1E87F0' className="icon" size={40}/>
                                        <p className="title">Digital trade network</p>
                                        <p className="description">Like Social Networks & friends,
                                            Gapstack helps organizations digitize supply chain networks with our AI powered platform at the core of your operations. Whether local or global, go beyond transactional engagements with your relationships to understand dependencies with your business and their impact.</p>
                                    </div>
                                    <div className="owl-container item">
                                        <MdPeople color='#7C60FF' className="icon" size={40}/>
                                        <p className="title">Connected Buyers & Suppliers</p>
                                        <p className="description">With Gapstack´s ecosystem tool, comprehensively map relationships between your buyers and supplier nodes and optimize for each. Our demand and supply prediction tools will highlight cash drivers in your business from  finance, sales, supply, distribution, procurement for efficient, smarter and data driven business decision making.</p>
                                    </div>
                                    <div className="owl-container item">
                                        <MdPayment color='#2CCC71' className="icon" size={40} />
                                        <p className="title">Seamless Payments</p>
                                        <p className="description">
                                            Securely  Pay your suppliers and receive payments from your buyers, both local and global to your bank account or mobile wallet with the ability to  tag each transaction to your business processes. Our payment tracker offers live status updates of your money transfer, due payables and receivables making it easier for you to forecast cash flow
                                        </p>
                                    </div>
                                    <div className="owl-container item">
                                        <FaChartBar color='#F6B93B' className="icon" size={40} />
                                        <p className="title">Robust Data & Analytics</p>
                                        <p className="description">
                                            Visualize your data across your different business segments to generate insight into your entire operations by slicing and dicing data on your business through our analytics engine
                                        </p>
                                    </div>
                                    <div className="owl-container item">
                                        <FaGlobe color='#39426A' className="icon" size={40} />
                                        <p className="title">Intuitive & Scalable  technology</p>
                                        <p className="description">
                                            Built on highly resilient microservices architecture with cloud and on prem hybrid to cater for data residency but at the same time agile technologies to connect to ERPs and Banking systems at scale.
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