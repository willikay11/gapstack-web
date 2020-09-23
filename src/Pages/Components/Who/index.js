import React,  { useState } from "react";
import { Fade } from "react-awesome-reveal";
import { Button, Col, Row } from "antd";
import styled from "styled-components";
import { style } from "./styles";

const WhoWrapper = styled.div`
  ${style}
`;

const Who = () => {
    const [showMore, setShowMore ] = useState(false);
    const show = () => {
        setShowMore(!showMore);
    }

    return (
        <WhoWrapper>
            <Fade triggerOnce={true} fraction={0.3}>
                <Row className="container">
                    <Col xs={{ span: 20, offset: 2 }}
                         sm={{ span: 20, offset: 2 }}
                         md={{ span: 20, offset: 2 }}
                         lg={{ span: 16, offset: 4 }}
                         xl={{ span: 16, offset: 4 }}>
                        <Row>
                            <Col xs={24} sm={24} md={24} lg={24} xl={12}>
                                <p className="sub-title">Who we are</p>
                                <p className="title">At Gaptstack, we are on a mission to build a digital ecosystem</p>
                                <p className="description">We believe in giving businesses the liberty to automate buy & sell processes, unlock & build business networks and access funding at scale.</p>
                                <Button onClick={show} className="button-link" type='link'>{ showMore ? 'Read Less' : 'Read More' }</Button>
                            </Col>
                        </Row>
                        {
                            showMore ? (
                                <Fade>
                                    <Row>
                                        <Col xs={24} sm={24} md={24} lg={24} xl={12} >
                                            <p className="description">In a unified and comprehensive technology platform, businesses of all sizes  can start their digitization journey targeting the heart of their operations – the source of their cash.  A business can automate their accounts payables and accounts receivables, eliminating the need for paper based transactions.</p>
                                            <p className="description">We understand the importance of working capital to the operations of a business and have offered a unique ability to liberate this cash from your accounts receivables.  Instead of waiting 30- 180 days to get paid, access your capital in days to grow and scale.  We know you want to fund larger orders as part of your growth mission and avail a seamless channel to access the capital needed to unlock these opportunities.</p>
                                            <p className="description">A true digital business cannot exist without understanding its dependencies and we map your entire business network around your buying and selling relationships through our AI powered engine, to  identify important nodes in your network and how they affect your growth and scale.</p>
                                        </Col>
                                    </Row>
                                </Fade>
                            ) : null
                        }
                    </Col>
                </Row>
            </Fade>
        </WhoWrapper>
    );
}

export default Who;