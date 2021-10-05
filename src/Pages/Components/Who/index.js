import React from "react";
import { Fade } from "react-awesome-reveal";
import { Col, Row } from "antd";
import styled from "styled-components";
import { style } from "./styles";
import Star from "../../../assets/star.svg";
import Truck from "../../../assets/Truck.svg"
import Hand from "../../../assets/Hand.svg"
import Link from "../../../assets/Link.svg"
import Boat from "../../../assets/Boat.svg"
import Item from "./components/item";

const firstListItems = [
{
    title: 'Gapstack Digital Trade',
    description: 'At Gapstack, we digitize your buyer- supplier relationships; unlock funding from your account receivables and account payables while building your unique business ecosystem.',
    icon: Star,
    borderColor: '#d8cfff'
}, {
    title: 'Gapstack Purchase Finance',
    description: 'Drive loyalty with your suppliers and grow your ecosystem by providing faster payments to your suppliers through early payments. Validate their invoices via the Gapstack platform to allow for faster processing. Whether on web, app or USSD, offer your suppliers the ability to access their cash in minutes and to do more.',
    icon: Hand,
    borderColor: '#FFF4CC80'
}, {
    title: 'Gapstack Business Connections',
    description: 'Build your business´ unique and strategic data trust network by mapping & financing your buyer and seller relationships as a lever of growth. Understand the interdependencies in your business for scale and growth.',
    icon: Link,
    borderColor: '#B9C0FF80'
}];

const secondListItems = [
{
    title: 'Gapstack Working Capital',
    description: 'Improve your cash flow by receiving early payments on your invoices to your customers. Liberate the cash needed for your working capital by connecting with your bank or financing partner to receive capital in real time on all your receivables. Our AI powered working capital solution allows you to forecast your larger orders and to unlock the financing needed to fulfil them.',
    icon: Truck,
    borderColor: '#AEFFD180'
},{
    title: 'Gapstack Trade Finance Solutions',
    description: 'Unlock strategic funding pockets for international trade through trade capital financing for pre & post shipment, inventory, freight, and duty charges. Reduce the tie up of capital in global trade with solutions customized to your exact business needs.',
    icon: Boat,
    borderColor: '#6FF9F080'
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
                                <p className="sub-sub-title ">Digitize your business</p>
                                <p className="title">
                                    Trade Operating System
                                </p>
                                <p className="sub-title">At Gapstack, we digitize your buyer- supplier relationships; unlock funding from your account receivables and account payables while building your unique business ecosystem. </p>
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
