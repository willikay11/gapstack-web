import React from "react";
import { Row, Col } from "antd";

const Section = () => {
    return (
        <Row style={{ flexGrow: 1}}>
            <Col offset={2} span={22}>
                <Row style={{ height: '100%' }}>
                    <Col span={12} style={{ display: 'flex', alignItems: 'flex-start', justifyContent: 'center', flexDirection: 'column' }}>
                        <p style={{ fontSize: 32 }}>Gapstack</p>
                        <p>powerful digital trade & supply chain financing platform</p>
                    </Col>
                    <Col span={12} style={{ display: 'flex', alignItems: 'flex-start', justifyContent: 'center', flexDirection: 'column' }}>
                        <p style={{ fontSize: 32 }}>Image Comes Here</p>
                    </Col>
                </Row>

            </Col>
        </Row>
    );
}

export default Section;