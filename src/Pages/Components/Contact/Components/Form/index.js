import React, { useState } from "react";
import { Modal, Row, Col, Form, Input, Button, notification } from 'antd';
import axios from 'axios';

const ContactForm = ({ visible, setModalVisibility }) => {
    const [form] = Form.useForm();
    const [ loading, setLoading ] = useState(false);
    const sendNotification = (values) => {
        setLoading(true);
        axios.post('https://api.staging.gapstack.com/website-backend/api/message', values).then(response => {
            setLoading(false);
            if (response.status === 201) {
                notification.success({
                    message: 'Success',
                    description: 'We have received your message and we will contact you'
                });
                form.resetFields();
                setModalVisibility(false);
                return null;
           }

           notification.error({
               message: 'Error',
               description: response.data.message
           });
        }).catch(error => {
            console.log('Error: ', error);
        });
    }

    return (
        <Modal
            title="Contact Sales"
            centered
            visible={visible}
            footer={null}
            onCancel={() => setModalVisibility(false)}
            width="40%"
        >
            <Form size='large' layout="vertical" form={form} onFinish={(values) => sendNotification(values)}>
                <Row gutter={16}>
                    <Col span={12}>
                        <Form.Item
                            label="Full Name"
                            name="name"
                            rules={[{ required: true, message: 'Please input your name!' }]}
                        >
                            <Input placeholder="Name" />
                        </Form.Item>
                    </Col>
                    <Col span={12}>
                        <Form.Item
                            label="Email"
                            name="email"
                            rules={[{ required: true, type: 'email', message: 'Please input a valid email address!' }]}
                        >
                            <Input placeholder="Email" />
                        </Form.Item>
                    </Col>
                </Row>

                <Row>
                    <Form.Item
                        label="Subject"
                        name="subject"
                        rules={[{ required: true, message: 'Please input a subject!' }]}
                        style={{ width: '100%' }}
                    >
                        <Input placeholder="Subject" />
                    </Form.Item>
                </Row>

                <Row>
                    <Form.Item
                        label="Message"
                        name="message"
                        rules={[{ required: true, message: 'Please input your name!' }]}
                        style={{ width: '100%' }}
                    >
                        <Input.TextArea rows={5} placeholder="Message" />
                    </Form.Item>
                </Row>

                <Form.Item style={{ display: 'flex', alignItems: 'center' }}>
                    <Button style={{ color: '#fff', backgroundColor: '#7c60ff', height: 50, borderRadius: 4, marginTop: 20 }}
                            loading={loading}
                            disabled={loading}
                            htmlType="submit">
                        Send
                    </Button>
                </Form.Item>
            </Form>
        </Modal>
    );
}

export default ContactForm;
