import React from "react";
import {Col, Row} from "antd";
import DashboardImage from "../../../assets/Dashboard.svg";
import {MdReceipt} from "react-icons/md";
import {Fade} from "react-awesome-reveal";
import styled from "styled-components";
import { style } from "./styles";

const DashboardWrapper = styled.div`
  ${style}
`;

const Dashboard = () => {
    return (
        <DashboardWrapper>
            <Fade triggerOnce={true} fraction={0.3}>
                <Row className="container">
                    <Col offset={4} span={16} className="image-container">
                        <Row>
                            <Col span={24}>
                                <img src={DashboardImage} alt="alternate" width='100%' />
                            </Col>
                        </Row>

                        <Row className="title-container">
                            <Col span={8}>
                                <p className="title">The Business Growth Platform</p>
                            </Col>
                        </Row>

                        <Row gutter={32}>
                            <Col span={8} className="item">
                                <MdReceipt color='#008D3D' size={54} className="icon" />
                                <p className="title">Allows know what you pay</p>
                                <p className="description" >
                                    Drive loyalty with your suppliers and grow your ecosystem by providing faster payments to your suppliers through early payments.
                                </p>
                            </Col>

                            <Col span={8} className="item">
                                <MdReceipt color='#008D3D' size={54} className="icon" />
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