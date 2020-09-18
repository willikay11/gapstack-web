import React from "react";
import { Row, Col, Button } from "antd";
import gapstackLogo from '../../assets/gapStackLogo.svg';

const Menu = () => {
    return(
        <Row style={{ height: 130, alignItems: 'center', padding: 20 }}>
            <Col offset={2} span={10} style={{ display: 'flex', alignItems: 'center'}}>
                <img height={25} src={gapstackLogo} />
            </Col>
            <Col span={11}>
                <Row style={{ display: 'flex', justifyContent: 'flex-end', alignItems: 'center' }}>
                    <Col span={3}>
                        <a href="#" style={{ color: '#39426A'}}>Platform</a>
                    </Col>
                    <Col span={3}>
                        <a href="#" style={{ color: '#39426A'}}>Solutions</a>
                    </Col>
                    <Col span={3}>
                        <a href="#" style={{ color: '#39426A'}}>About Us</a>
                    </Col>
                    <Col span={3}>
                        <a href="#" style={{ color: '#39426A'}}>Contact Us</a>
                    </Col>
                    <Col span={3}>
                        <Button style={{ color: '#fff', backgroundColor: '#7c60ff', height: 50, borderRadius: 4}}> Get Started</Button>
                    </Col>
                </Row>
            </Col>
        </Row>
        // <div style={{ width: '100%', backgroundColor: '#fff', minHeight: 100, padding: 20, display: 'flex', alignItems: 'center' }}>
        //     <div style={{ display: 'flex', justifyContent: 'flex-start', flex: 1 }}>Logo</div>
        //     <div style={{ display: 'flex', justifyContent: 'flex-start', flex: 1 }}>Menu Links</div>
        // </div>
    )
}

export default Menu;