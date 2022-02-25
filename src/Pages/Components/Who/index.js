import React from "react";
import { Fade } from "react-awesome-reveal";
import { Col, Row } from "antd";
import styled from "styled-components";
// import { RiUserSearchLine} from 'react-icons/ri'
import { style } from "./styles";
import Star from "../../../assets/User.png";
import Truck from "../../../assets/Truck.svg"
import Hand from "../../../assets/Hand.png"
import Boat from "../../../assets/Boat.svg"
import Item from "./components/item";

const firstListItems = [
{
    title: 'Onboarding For Finance',
    description: 'Our solution, powered by artificial intelligence and connected to key government and business databases, cuts from days to minutes KnowYour Customer (KYC) and Know Your Business (KYB) compliance, resulting in faster decision making.',
    icon: Star,
    borderColor: '#7C60FF4D'
}, {
    title: 'Enterprise Management',
    description: 'We even provide the ERP tools for you tomanage business flows, optimise your finance and improve your credit scoring.',
    icon: Hand,
    borderColor: '#FE99024D'
}];

const secondListItems = [
{
    title: 'Supply Chain Finance',
    description: 'From invoice discounting, reverse factoring to distributor finance, Gapstack unlocks working capital for your trade transactions , allowing you to access finance immediately, via USSD, WhatsApp, Web & Telegram, wherever you are.',
    icon: Truck,
    borderColor: '#1E87F04D'
},{
    title: 'Trade Finance Solutions',
    description: 'Unlock strategic funding pockets for international trade. We have uniquely built robust automation to manage all your trade finance processes while reducing friction in accessing import and export financing.',
    icon: Boat,
    borderColor: '#2CCC714D'
}];

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
                            <Col className="title-container" xs={24} sm={24} md={24} lg={24} xl={24}>
                                <p className="sub-sub-title ">Digitize. Fund. Trade</p>
                                <p className="title">
                                    Trade Operating System
                                </p>
                                <p className="sub-title">Using a single technology platform, and working with key financiers, we provide all the solutions for business to access trade and supply chain finance to expand their markets.</p>
                            </Col>
                        </Row>
                    </Col>
                    <Col xs={{ span: 20, offset: 2 }}
                         sm={{ span: 20, offset: 2 }}
                         md={{ span: 20, offset: 2 }}
                         lg={{ span: 16, offset: 4 }}
                         xl={{ span: 16, offset: 4 }}>
                        <Row gutter={20}>
                            <Col xs={24} sm={24} md={12} lg={12} xl={12}>
                                {
                                    firstListItems.map((item) => (
                                        <Item title={item.title}
                                              description={item.description}
                                              icon={item.icon}
                                              borderColor={item.borderColor}
                                        />
                                    ))
                                }
                            </Col>
                            <Col xs={24} sm={24} md={12} lg={12} xl={12}>
                                {
                                    secondListItems.map((item) => (
                                        <Item title={item.title}
                                              description={item.description}
                                              icon={item.icon}
                                              borderColor={item.borderColor}
                                        />
                                    ))
                                }
                            </Col>
                        </Row>
                    </Col>
                </Row>
            </Fade>
        </WhoWrapper>
    );
}

export default Who;
