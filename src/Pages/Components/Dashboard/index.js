import React from "react";
import {Col, Row} from "antd";
import DashboardImage from "../../../assets/Dashboard.svg";
import { FaWallet, FaCodeBranch } from "react-icons/all";
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

                        <Row gutter={32}>
                            <Col xs={24} sm={24} md={12} lg={8} xl={8} className="item">
                                <FaWallet color='#008D3D' size={54} className="icon" />
                                <p className="title">Allows know what you pay</p>
                                <p className="description" >
                                    Drive loyalty with your suppliers and grow your ecosystem by providing faster payments to your suppliers through early payments.
                                </p>
                            </Col>

                            <Col xs={24} sm={24} md={12} lg={8} xl={8} className="item">
                                <FaCodeBranch color='#1E87F0' size={54} className="icon" />
                                <p className="title">Start your integration</p>
                                <p className="description">
                                    Built on highly resilient microservices architecture with cloud and on prem hybrid to
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