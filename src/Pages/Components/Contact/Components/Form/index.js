import React from "react";
import { Modal, Row, Col, Form, Input, Button } from 'antd';

const ContactForm = ({ visible, setModalVisibility }) => {

    const sendNotification = (values) => {
        console.log(values);
        setModalVisibility(false);
    }

    return (
        <Modal
            title="Send Us A Message"
            centered
            visible={visible}
            footer={null}
            onCancel={() => setModalVisibility(false)}
        >
            <Form size='large' onFinish={(values) => sendNotification(values)}>
                <Row gutter={16}>
                    <Col span={12}>
                        <Form.Item
                            name="name"
                            rules={[{ required: true, message: 'Please input your name!' }]}
                        >
                            <Input placeholder="Name" style={{ border: 0, borderBottom: '1px solid #9C9CD0' }}/>
                        </Form.Item>
                    </Col>
                    <Col span={12}>
                        <Form.Item
                            name="email"
                            rules={[{ required: true, type: 'email', message: 'Please input a valid email address!' }]}
                        >
                            <Input placeholder="Email" style={{ border: 0, borderBottom: '1px solid #9C9CD0' }}/>
                        </Form.Item>
                    </Col>
                </Row>

                <Row>
                    <Form.Item
                        name="subject"
                        rules={[{ required: true, message: 'Please input a subject!' }]}
                        style={{ width: '100%' }}
                    >
                        <Input placeholder="Subject" style={{ border: 0, borderBottom: '1px solid #9C9CD0' }}/>
                    </Form.Item>
                </Row>

                <Row>
                    <Form.Item
                        name="message"
                        rules={[{ required: true, message: 'Please input your name!' }]}
                        style={{ width: '100%' }}
                    >
                        <Input.TextArea placeholder="Message" style={{ border: 0, borderBottom: '1px solid #9C9CD0' }}/>
                    </Form.Item>
                </Row>

                <Form.Item style={{ display: 'flex', alignItems: 'center' }}>
                    <Button style={{ color: '#fff', backgroundColor: '#7c60ff', height: 50, borderRadius: 4, marginTop: 20 }} htmlType="submit">
                        Send
                    </Button>
                </Form.Item>
            </Form>
        </Modal>
    );
}

export default ContactForm;