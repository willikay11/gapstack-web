import React from "react";
import {Col, Row} from "antd";
import DashboardImage from "../../../assets/Dashboard.svg";
import { FaCodeBranch } from "react-icons/all";
import { BsGraphUp } from "react-icons/all";
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
                            <Col xs={24} sm={24} md={24} lg={8} xl={8}>
                                <p className="title">The Business Growth Platform</p>
                            </Col>
                        </Row>

                        <Row gutter={[32, 42]}>
                            <Col xs={24} sm={24} md={12} lg={8} xl={8} className="item">
                                <BsGraphUp color='#008D3D' size={54} className="icon" />
                                <p className="title">Ecosystem Growth</p>
                                <p className="description" >
                                    Drive loyalty with your suppliers and grow your ecosystem by providing faster payments to your suppliers through early payments.
                                </p>
                            </Col>

                            <Col xs={24} sm={24} md={12} lg={8} xl={8} className="item">
                                <FaCodeBranch color='#1E87F0' size={54} className="icon" />
                                <p className="title">Automate</p>
                                <p className="description"> - Invoicing</p>
                                <p className="description"> - Ordering</p>
                                <p className="description"> - Payments</p>
                                <p className="description"> - Bonds</p>
                            </Col>

                            <Col xs={24} sm={24} md={12} lg={8} xl={8} className="item">
                                <FaCodeBranch color='#1E87F0' size={54} className="icon" />
                                <p className="title"> - Reduce risk & reduce costs</p>
                                <p className="description"> - Validate invoices</p>
                                <p className="description"> - AI driven credit limits</p>
                                <p className="description"> - Marco limits</p>
                                <p className="description"> - Fraud guards</p>
                            </Col>

                            <Col xs={24} sm={24} md={12} lg={8} xl={8} className="item">
                                <FaCodeBranch color='#1E87F0' size={54} className="icon" />
                                <p className="title">Pay early Paid Early</p>
                                <p className="description"> - Pay suppliers early & directly</p>
                                <p className="description"> - Receive capital real time</p>
                            </Col>

                            <Col xs={24} sm={24} md={12} lg={8} xl={8} className="item">
                                <FaCodeBranch color='#1E87F0' size={54} className="icon" />
                                <p className="title">Fund larger orders</p>
                                <p className="description">
                                     - AI powered working capital forecasting
                                </p>
                            </Col>

                            <Col xs={24} sm={24} md={12} lg={8} xl={8} className="item">
                                <FaCodeBranch color='#1E87F0' size={54} className="icon" />
                                <p className="title">Suppliers & buyer loyalty</p>
                                <p className="description">
                                    - Build loyalty through early payments and incentives
                                </p>
                            </Col>

                            <Col xs={24} sm={24} md={12} lg={8} xl={8} className="item">
                                <FaCodeBranch color='#1E87F0' size={54} className="icon" />
                                <p className="title">Build a data trust network</p>
                                <p className="description">
                                    - Map and finance your network
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