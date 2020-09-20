import React from "react";
import { Row, Col, Button } from "antd";
import gapstackLogo from '../../assets/gapStackLogo.svg';

const Menu = () => {
    return(
        <Row style={{ height: 130, alignItems: 'center', padding: '20px 0px', position: 'relative', zIndex: 10 }}>
            <Col xs={{ span: 10, offset: 2 }}
                 sm={{ span: 10, offset: 2 }}
                 md={{ span: 10, offset: 2 }}
                 lg={{ span: 8, offset: 4 }}
                 xl={{ span: 8, offset: 4 }} style={{ display: 'flex', alignItems: 'center'}}>
                <img height={25} src={gapstackLogo} alt='logo'/>
            </Col>
            <Col xs={{ span: 10, offset: 2 }}
                 sm={{ span: 10, offset: 2 }}
                 md={{ span: 10, offset: 2 }}
                 lg={{ span: 8, offset: 2 }}
                 xl={{ span: 8, offset: 2 }}>
                <Row gutter={32} style={{ display: 'flex', justifyContent: 'flex-start', alignItems: 'center' }}>
                    <Col xs={9} sm={9} md={4} lg={4} xl={6}>
                        <Button type='link' style={{ color: '#39426A'}}>Solutions</Button>
                    </Col>
                    <Col xs={12} sm={12} md={4} lg={4} xl={6}>
                        <Button style={{ color: '#fff', backgroundColor: '#7c60ff', height: 50, borderRadius: 4}}> Contact Sales</Button>
                    </Col>
                </Row>
            </Col>
        </Row>
    )
}

export default Menu;