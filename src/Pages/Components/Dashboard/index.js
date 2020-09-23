import React from "react";
import {Col, Row} from "antd";
import DashboardImage from "../../../assets/Dashboard.svg";
import { IoIosCog, IoIosDocument, IoIosWallet, IoMdAnalytics, IoIosCash } from "react-icons/all";
import {Fade} from "react-awesome-reveal";
import styled from "styled-components";
import { style } from "./styles";

const DashboardWrapper = styled.div`
  ${style}
`;

const Dashboard = () => {
    return (
        <DashboardWrapper>
            <Fade triggerOnce={true} fraction={0.1}>
                <Row className="container">
                    <Col xs={{ span:20, offset:2 }}
                         sm={{ span:20, offset:2 }}
                         md={{ span:20, offset:2 }}
                         lg={{ span:16, offset:4 }}
                         xl={{ span:16, offset:4 }} className="image-container">
                        <Row>
                            <Col span={24}>
                                <img src={DashboardImage} alt="alternate" width='100%' />
                            </Col>
                        </Row>

                        <Row className="title-container">
                            <Col xs={24} sm={24} md={24} lg={12} xl={12}>
                                <p className="title">Automate. Fund. Network.</p>
                            </Col>
                        </Row>

                        <Row className="description-container">
                            <Col xs={24} sm={24} md={24} lg={12} xl={12}>
                                <p className="description">Transform & position your business today for growth and scale through the Gapstack business growth platform. </p>
                            </Col>
                        </Row>

                        <Row gutter={[32, 42]}>
                            <Col xs={24} sm={24} md={12} lg={8} xl={8} className="item">
                                <IoIosCog color='#7C60FF' size={40} className="icon" />
                                <p className="title">Gapstack Automation</p>
                                <p className="description">
                                    Leverage Gapstack´s automation suite to build a true digital business around your supply chain processes from   Invoicing,  - Ordering, - Payments and - Bonds.  Our agile automation kits connect to your existing business flows and are available both on cloud and on premise.
                                </p>
                            </Col>

                            <Col xs={24} sm={24} md={12} lg={8} xl={8} className="item">
                                <IoIosDocument color='#1E87F0' size={40} className="icon" />
                                <p className="title">Gapstack Working Capital Solution</p>
                                <p className="description">Improve your cash flow by receiving early payments on your invoices to your customers. Liberate the cash needed for your working capital by connecting with your bank to receive capital in real time.  Our AI powered working capital solution allows you to forecast your larger orders and to fulfill them.</p>
                            </Col>

                            <Col xs={24} sm={24} md={12} lg={8} xl={8} className="item">
                                <IoIosWallet color='#F6B93B' size={40} className="icon" />
                                <p className="title">Gapstack Purchasing Finance</p>
                                <p className="description">Drive loyalty with your suppliers and grow your ecosystem by providing faster payments to your suppliers through early payments.  Validate their invoices via the Gapstack platform to allow for faster processing. Whether on web, app or USSD, offer your suppliers the ability to access their cash in minutes and to do more</p>
                            </Col>

                            <Col xs={24} sm={24} md={12} lg={8} xl={8} className="item">
                                <IoMdAnalytics color='#E55039' size={40} className="icon" />
                                <p className="title">Gapstack data network</p>
                                <p className="description">
                                    Build your business´ unique data trust network by mapping & financing your buyer and seller relationships as a lever of growth
                                </p>
                            </Col>

                            <Col xs={24} sm={24} md={12} lg={8} xl={8} className="item">
                                <IoIosCash color='#008D3D' size={40} className="icon" />
                                <p className="title">Gapstack payment solutions</p>
                                <p className="description">
                                    Process validated accounts payables  by the touch of a button where processing to bank account or a mobile money wallet.  Control funds disbursement processes through our  AI driven credit & macro limits.
                                </p>
                            </Col>
                        </Row>
                    </Col>
                </Row>
            </Fade>
        </DashboardWrapper>
    );
}

export default Dashboard;