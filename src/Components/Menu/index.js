import React, {useState} from "react";
import { Row, Col, Button } from "antd";
import gapstackLogo from '../../assets/GapstackPurpleLogo.svg';
import styled from "styled-components";
import { style } from "./styles";
import ContactForm from "../../Pages/Components/Contact/Components/Form";

const MenuWrapper = styled.div`
  ${style}
`;

const Menu = ({ scrollToSolutions, scrollToContactForm }) => {
    const [visible, setVisibility] = useState(false)

    const setModalVisibility = (visible) => {
        setVisibility(visible);
    }
    return(
        <MenuWrapper>
            <ContactForm visible={visible} setModalVisibility={setModalVisibility} />
            <Row className="menu-container">
                <Col xs={{ span: 7, offset: 2 }}
                     sm={{ span: 7, offset: 2 }}
                     md={{ span: 8, offset: 2 }}
                     lg={{ span: 8, offset: 4 }}
                     xl={{ span: 8, offset: 4 }} style={{ display: 'flex', alignItems: 'center'}}>
                    <img height={60} className="logo" src={gapstackLogo} alt='logo'/>
                </Col>
                <Col xs={{ span: 11, offset: 1 }}
                     sm={{ span: 11, offset: 1 }}
                     md={{ span: 12, offset: 2 }}
                     lg={{ span: 8, offset: 2 }}
                     xl={{ span: 5, offset: 2 }}>
                    <Row gutter={42} className="action-container">
                        {/*<Col xs={9} sm={9} md={9} lg={10} xl={8}>*/}
                        {/*    <Button type='link' style={{ color: '#ffffff'}} onClick={() => scrollToSolutions()}>Solutions</Button>*/}
                        {/*</Col>*/}
                        <Col xs={12} sm={12} md={12} lg={10} xl={6}>
                            <Button style={{ color: '#fff', backgroundColor: '#7c60ff', height: 50, borderRadius: 4, borderColor: '#7c60ff', minWidth: 140 }}
                                    onClick={() => setModalVisibility(true)}
                            >Contact Us</Button>
                        </Col>
                    </Row>
                </Col>
            </Row>
        </MenuWrapper>
    )
}

export default Menu;
