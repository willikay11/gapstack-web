import React from "react";
import { Row, Col, Button } from "antd";
import gapstackLogo from '../../assets/gapStackLogo.svg';
import styled from "styled-components";
import { style } from "./styles";

const MenuWrapper = styled.div`
  ${style}
`;

const Menu = ({ scrollToSolutions, scrollToContactForm }) => {
    return(
        <MenuWrapper>
            <Row className="menu-container">
                <Col xs={{ span: 7, offset: 2 }}
                     sm={{ span: 7, offset: 2 }}
                     md={{ span: 10, offset: 2 }}
                     lg={{ span: 8, offset: 4 }}
                     xl={{ span: 8, offset: 4 }} style={{ display: 'flex', alignItems: 'center'}}>
                    <img height={25} className="logo" src={gapstackLogo} alt='logo'/>
                </Col>
                <Col xs={{ span: 11, offset: 1 }}
                     sm={{ span: 11, offset: 1 }}
                     md={{ span: 10, offset: 2 }}
                     lg={{ span: 5, offset: 2 }}
                     xl={{ span: 5, offset: 2 }}>
                    <Row gutter={42} style={{ display: 'flex', justifyContent: 'flex-start', alignItems: 'center' }}>
                        <Col xs={9} sm={9} md={9} lg={4} xl={6}>
                            <Button type='link' style={{ color: '#39426A'}} onClick={() => scrollToSolutions()}>Solutions</Button>
                        </Col>
                        <Col xs={12} sm={12} md={12} lg={4} xl={6}>
                            <Button style={{ color: '#fff', backgroundColor: '#7c60ff', height: 50, borderRadius: 4}}
                                    onClick={() => scrollToContactForm()}
                            >Contact Us</Button>
                        </Col>
                    </Row>
                </Col>
            </Row>
        </MenuWrapper>
    )
}

export default Menu;