import React from "react";
import { Row, Col, Button } from "antd";
import gapstackLogo from '../../assets/gapStackLogo.svg';

const Menu = () => {
    return(
        <Row style={{ height: 130, alignItems: 'center', padding: '20px 0px', position: 'relative', zIndex: 10 }}>
            <Col offset={4} span={12} style={{ display: 'flex', alignItems: 'center'}}>
                <img height={25} src={gapstackLogo} alt='logo'/>
            </Col>
            <Col span={8}>
                <Row gutter={32} style={{ display: 'flex', justifyContent: 'flex-start', alignItems: 'center' }}>
                    <Col span={4}>
                        <Button type='link' style={{ color: '#39426A'}}>Solutions</Button>
                    </Col>
                    <Col span={4}>
                        <Button style={{ color: '#fff', backgroundColor: '#7c60ff', height: 50, borderRadius: 4}}> Contact Sales</Button>
                    </Col>
                </Row>
            </Col>
        </Row>
    )
}

export default Menu;