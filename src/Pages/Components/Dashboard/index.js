import React from "react";
import { Col, Row, Divider } from "antd";
import FinanceSupplyingMobile from "../../../assets/Finance-Supplying-Mobile.svg";
import PDQ from "../../../assets/PDQ.svg";
import { IoIosCog, IoIosDocument, IoIosWallet, IoMdAnalytics, IoIosCash } from "react-icons/all";
import ImportExport from '../../../assets/ImportExport.svg';
import {Fade} from "react-awesome-reveal";
import styled from "styled-components";
import { style } from "./styles";

const DashboardWrapper = styled.div`
  ${style}
`;

const Dashboard = ({ refProp }) => {
    return (
        <DashboardWrapper ref={refProp}>
            <Fade triggerOnce={true} fraction={0.1}>
                <Row className="container">
                    <Col xs={{ span:20, offset:2 }}
                         sm={{ span:20, offset:2 }}
                         md={{ span:20, offset:2 }}
                         lg={{ span:16, offset:4 }}
                         xl={{ span:16, offset:4 }}>
                        <Row className="title-container">
                            <Col xs={24} sm={24} md={24} lg={16} xl={12}>
                                <p className="title">
                                    Automate
                                    <Divider type='vertical' style={{ height: 35, borderLeft: '2px solid #39426A', margin: '0px 15px' }}/>
                                    Fund
                                    <Divider type='vertical' style={{ height: 35, borderLeft: '2px solid #39426A', margin: '0px 15px' }}/>
                                    Network
                                </p>
                            </Col>
                        </Row>

                        <Row className="description-container">
                            <Col xs={24} sm={24} md={24} lg={16} xl={12}>
                                <p className="description">Transform & position your business today for growth and scale through the Gapstack business growth platform. </p>
                            </Col>
                        </Row>

                        <Row gutter={[32, 42]}>
                            <Col xs={24} sm={24} md={12} lg={12} xl={8} className="item">
                                <IoIosCog color='#7C60FF' size={40} className="icon" />
                                <p className="title">Gapstack Automation</p>
                                <p className="description">
                                    Leverage Gapstack´s automation suite to build a true digital business around your supply chain processes from Invoicing, - Ordering, - Payments and - Bonds. Our agile automation kits connect to your existing business flows and are available both on cloud and on premise to allow your begin your digitization journey today!
                                </p>
                            </Col>

                            <Col xs={24} sm={24} md={12} lg={12} xl={8} className="item">
                                <IoIosDocument color='#1E87F0' size={40} className="icon" />
                                <p className="title">Gapstack Working Capital Solution</p>
                                <p className="description">
                                    Improve your cash flow by receiving early payments on your invoices to your customers. Liberate the cash needed for your working capital by connecting with your bank  or financing partner to receive capital in real time on al your receivables.
                                </p>

                                <p className="description">
                                    Our AI powered working capital solution allows you to forecast your larger orders and to  unlock the financing needed to fulfil them.
                                </p>
                            </Col>

                            <Col xs={24} sm={24} md={12} lg={12} xl={8} className="item">
                                <IoIosWallet color='#F6B93B' size={40} className="icon" />
                                <p className="title">Gapstack Purchasing Finance</p>
                                <p className="description">
                                    Drive loyalty with your suppliers and grow your ecosystem by providing faster payments to your suppliers through early payments.  Validate their invoices via the Gapstack platform to allow for faster processing. Whether on web, app or USSD, offer your suppliers the ability to access their cash in minutes and to do more
                                </p>
                            </Col>

                            <Col xs={24} sm={24} md={12} lg={12} xl={8} className="item">
                                <IoIosCash color='#008D3D' size={40} className="icon" />
                                <p className="title">Gapstack payment solutions</p>
                                <p className="description">
                                    Process validated accounts payables  by the touch of a button where processing to bank account or a mobile money wallet.  Control funds disbursement processes through our  AI driven credit & macro limits. Track the live status updates of money transfer, due payables and receivables making it easier for you to forecast cash flow
                                </p>
                            </Col>

                            <Col xs={24} sm={24} md={12} lg={12} xl={8} className="item">
                                <IoMdAnalytics color='#E55039' size={40} className="icon" />
                                <p className="title">Gapstack Data Network</p>
                                <p className="description">
                                    Build your business´ unique data trust network by mapping & financing your buyer and seller relationships as a lever of growth.
                                </p>
                            </Col>

                            <Col xs={24} sm={24} md={12} lg={12} xl={8} className="item">
                                <img src={ImportExport} className="icon" alt="trade" />
                                <p className="title">Gapstack Trade Finance Solutions</p>
                                <p className="description">
                                    Unlock strategic funding pockets for international trade through our trade capital financing for pre & post shipment, inventory, freight, and duty charges. Reduce the tie up of capital in global trade  with solutions customized to your exact business needs
                                </p>
                            </Col>

                            <Col xs={24} sm={24} md={12} lg={12} xl={16} className="item">
                                <img style={{ width: '100%' }} src={PDQ} alt="icon" />
                            </Col>

                            <Col xs={24} sm={24} md={12} lg={12} xl={8} className="item">
                                <img style={{ width: '100%' }} src={FinanceSupplyingMobile} alt="icon" />
                            </Col>
                        </Row>
                    </Col>
                </Row>
            </Fade>
        </DashboardWrapper>
    );
}

export default Dashboard;