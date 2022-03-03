import React, {useRef, useState} from "react";
import { Col, Form, Input, Button, notification, Drawer, Progress } from 'antd';
import axios from 'axios';
import styled from "styled-components";
import Slider from "react-slick";
import {style} from "./styles";

const FormWrapper = styled.div`
  ${style}
`;


const CustomSlide = (props) => {
  return (
      <div style={{ display: "flex", alignItems: "center", height: '100%' }}>
          {props?.children}
      </div>
  )
}

const totalFields = 4;

const ContactForm = ({ visible, setModalVisibility }) => {
    const [form] = Form.useForm();
    const carousel = useRef(null);
    const [completeFields, setCompleteFields] = useState(0);
    const [ loading, setLoading ] = useState(false);

    console.log(loading);

    const settings = {
        dots: false,
        infinite: false,
        slidesToShow: 1,
        slidesToScroll: 1,
        vertical: true,
        verticalSwiping: true,
    };

    const sendNotification = (values) => {
        setLoading(true);
        axios.post('https://api.staging.gapstack.com/website-backend/message', values).then(response => {
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

    const checkPressedKey = async (e, formItemName) => {
      if (e.key === 'Enter') {
          await form.validateFields([formItemName]).then(() => {
              const values = Object.values(form.getFieldsValue());
              setCompleteFields(values.filter(value => value !== undefined).length);
              onNext();
          }).catch((error) => {
          });
      }
    }

    const onNext = () => {
        if (carousel) {
            // eslint-disable-next-line no-unused-expressions
            carousel?.current?.slickNext();
        }
    }
    
    const onPrevious = () => {
        if (carousel) {
            // eslint-disable-next-line no-unused-expressions
            carousel?.current?.slickPrev();
        }
    }
    return (
        <Drawer title={null} closeIcon={null} size={"large"} placement="right" onClose={() => setModalVisibility(false)} visible={visible}>
            <FormWrapper>
                <div className="progress-bar">
                    <Progress percent={(completeFields/totalFields)*100} strokeColor="#7c60ff" trailColor="#E4DFFF" showInfo={false} />
                </div>
                <div className="direction-button-container">
                    <Button onClick={onPrevious}>Up</Button>
                    <Button onClick={onNext}>Down</Button>
                </div>
                <Form style={{ width: '100%' }} size='large' layout="vertical" form={form} onFinish={(values) => sendNotification(values)}>
                    <Slider {...settings} ref={carousel}>
                        <CustomSlide>
                            <p>Partner with Gapstack</p>
                        </CustomSlide>
                        <CustomSlide>
                            <Col span={24}>
                                <Form.Item
                                    label="Full Name"
                                    name="name"
                                    rules={[{ required: true, message: 'Please input your name!' }]}
                                >
                                    <Input placeholder="Name" onKeyDown={(e) => checkPressedKey(e, 'name')} />
                                </Form.Item>
                            </Col>
                        </CustomSlide>
                        <CustomSlide>
                            <Col span={24}>
                                <Form.Item
                                    label="Email"
                                    name="email"
                                    rules={[{ required: true, type: 'email', message: 'Please input a valid email address!' }]}
                                >
                                    <Input placeholder="Email" onKeyDown={(e) => checkPressedKey(e, 'email')} />
                                </Form.Item>
                            </Col>
                        </CustomSlide>
                        <CustomSlide>
                            <Col span={24}>
                                <Form.Item
                                    label="Subject"
                                    name="subject"
                                    rules={[{ required: true, message: 'Please input a subject!' }]}
                                    style={{ width: '100%' }}
                                >
                                    <Input placeholder="Subject" onKeyDown={(e) => checkPressedKey(e, 'subject')} />
                                </Form.Item>
                            </Col>
                        </CustomSlide>
                        <CustomSlide>
                            <Col span={24}>
                                <Form.Item
                                    label="Message"
                                    name="message"
                                    rules={[{ required: true, message: 'Please input your message!' }]}
                                    style={{ width: '100%' }}
                                >
                                    <Input.TextArea rows={5} placeholder="Message" onKeyDown={(e) => checkPressedKey(e, 'message')} />
                                </Form.Item>
                            </Col>
                        </CustomSlide>
                    </Slider>
                </Form>
            </FormWrapper>
        </Drawer>
    );
}

export default ContactForm;
