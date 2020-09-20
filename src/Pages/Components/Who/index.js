import React from "react";
import {Fade} from "react-awesome-reveal";
import {Button, Col, Row} from "antd";
import styled from "styled-components";
import { style } from "./styles";

const WhoWrapper = styled.div`
  ${style}
`;

const Who = () => {
    return (
        <WhoWrapper>
            <Fade triggerOnce={true} fraction={0.3}>
                <Row className="container">
                    <Col offset={4} span={16}>
                        <Row>
                            <Col span={12}>
                                <p className="sub-title">Who we are</p>
                                <p className="title">At Gaptstack, we are on a mission to build a digital ecosystem</p>
                                <p className="description">We believe in giving businesses the liberty to automate buy & sell processes, unlock & build business networks and access funding at scale.</p>
                                <Button type='link'>Read More</Button>
                            </Col>
                        </Row>
                    </Col>
                </Row>
            </Fade>
        </WhoWrapper>
    );
}

export default Who;