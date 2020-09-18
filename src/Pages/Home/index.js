import React from "react";
import Menu from "../../Components/Menu";
import {Button, Col, Row} from "antd";
import { MdPeople, MdPayment, MdReceipt, MdAccountBalance, MdPieChart, MdCopyright } from "react-icons/md";
import gapstackLogo from '../../assets/gapStackLogo.svg';
import BusinessBackgroundImage from '../../assets/business-image.png';
import WorldConnections from '../../assets/world-connections.jpg';
import HandImage from '../../assets/hand-image.png';
import OwlCarousel from 'react-owl-carousel';
import CoolKidsMeeting from '../../assets/Cool-Kids-Pitch-Meeting.svg';
import CoolKidsDiscussion from '../../assets/Cool-Kids-Discussion.svg';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';


const Home = () => {
    return (
        <div style={{ display: 'flex', height: '100%', flexFlow: 'column'}}>
            <Menu />

            <Row style={{ height: 800 }}>
                <Col offset={2} span={22}>
                    <Row style={{ height: '100%' }}>
                        <Col span={12} style={{ display: 'flex', alignItems: 'flex-start', justifyContent: 'center', flexDirection: 'column' }}>
                            <p style={{ fontSize: 70, color: '#39426A' }}>Gapstack</p>
                            <p style={{ fontSize: 44, color: '#39426A', textTransform: 'capitalize' }}>powerful digital trade & supply chain financing platform</p>
                            <Button style={{ color: '#fff', backgroundColor: '#7c60ff', height: 50, borderRadius: 4 }}>Contact Sales</Button>
                        </Col>
                        <Col span={12} style={{ display: 'flex', alignItems: 'flex-start', justifyContent: 'center', flexDirection: 'column' }}>
                            <img height={750} src={WorldConnections} alt='alternate'/>
                        </Col>
                    </Row>

                </Col>
            </Row>

            <Row style={{ height: 500 }}>
                <Col offset={3} span={21}>
                    <Row>
                        <Col span={10}>
                            <p style={{ color: '#39426A', fontSize:16, fontWeight: '500', lineHeight: '25px' }}>Who we are</p>
                            <p style={{ color: '#39426A', fontSize:44, fontWeight: '800', lineHeight: '135.2%' }}>At Gaptstack, we are on a mission to build a digital ecosystem</p>
                            <p style={{ color: '#39426A', fontSize: 16, lineHeight: '30px' }}>We believe in giving businesses the liberty to automate buy & sell processes, unlock & build business networks and access funding at scale.</p>
                            <Button type='link'>Read More</Button>
                        </Col>
                    </Row>
                </Col>
            </Row>

            <Row style={{ minHeight: 500, marginBottom: 100 }}>
                <Col offset={3} span={21}>
                    <Row>
                        <Col span={6}>
                            <p style={{ fontSize: '50px', color: '#39426A', lineHeight: '135.2%', fontWeight: '800'}}>Why Gapstack</p>
                        </Col>
                    </Row>

                    <Row gutter={[16, 16]}>
                        <Col span={7}>
                            <MdPeople color='#7C60FF' size={54}/>
                            <p style={{ color: '#39426A', fontSize: '20px', fontWeight: 600 }}>Connected Buyers & Suppliers</p>
                            <p style={{ color: '#39426A', fontSize: '16px', fontWeight: "normal", marginBottom: '.5rem' }}>Create & send your invoices and orders on Gapstack</p>
                            <p style={{ color: '#39426A', fontSize: '16px', fontWeight: "normal", marginBottom: '.5rem' }}>- Create, upload & send your orders to suppliers</p>
                            <p style={{ color: '#39426A', fontSize: '16px', fontWeight: "normal", marginBottom: '.5rem' }}>- Create, upload & send purchase invoices</p>
                            <p style={{ color: '#39426A', fontSize: '16px', fontWeight: "normal", marginBottom: '.5rem' }}>- Track payment of invoices</p>
                        </Col>

                        <Col span={7}>
                            <MdPayment color='#E74C3C' size={54} />
                            <p style={{ color: '#39426A', fontSize: '20px', fontWeight: 600 }}>Seamless Payments</p>
                            <p style={{ color: '#39426A', fontSize: '16px', fontWeight: "normal", lineHeight: '30px' }}>
                                Pay your suppliers and receive payments from your buyers to your bank account or mobile wallet with the touch of a button
                            </p>
                        </Col>

                        <Col span={7}>
                            <MdReceipt color='#008D3D' size={54} />
                            <p style={{ color: '#39426A', fontSize: '20px', fontWeight: 600 }}>Get Early Payment on Your Invoices</p>
                            <p style={{ color: '#39426A', fontSize: '16px', fontWeight: "normal", lineHeight: '30px' }}>
                                Connect with your bank and improve your cashflows by discounting or factoring your customer invoices
                            </p>
                        </Col>

                        <Col span={7}>
                            <MdAccountBalance color='#39426A' size={54} />
                            <p style={{ color: '#39426A', fontSize: '20px', fontWeight: 600 }}>Pay Your Suppliers Early</p>
                            <p style={{ color: '#39426A', fontSize: '16px', fontWeight: "normal", lineHeight: '30px' }}>
                                Drive loyalty with your suppliers and grow your ecosystem by providing faster payments to your suppliers through early payments
                            </p>
                        </Col>

                        <Col span={7}>
                            <MdPieChart color='#E74C3C' size={54} />
                            <p style={{ color: '#39426A', fontSize: '20px', fontWeight: 600 }}>Robust Data & Analytics</p>
                            <p style={{ color: '#39426A', fontSize: '16px', fontWeight: "normal", lineHeight: '30px' }}>
                                Generate insight into your entire operations by slicing and dicing data on your business through our analytics engine
                            </p>
                        </Col>

                        <Col span={7}>
                            <MdReceipt color='#E74C3C' size={54} />
                            <p style={{ color: '#39426A', fontSize: '20px', fontWeight: 600 }}>Cross Border Payments</p>
                            <p style={{ color: '#39426A', fontSize: '16px', fontWeight: "normal", lineHeight: '30px' }}>
                                Automate your business and improve cashflow. Create sales orders & invoices or upload supplier documents and connect to your bank to receive early payments
                            </p>
                        </Col>

                        <Col span={24}>
                            <Button style={{ color: '#fff', backgroundColor: '#7C60FF', height: 50, borderRadius: 4 }}>Create Your Free Account Today</Button>
                        </Col>
                    </Row>
                </Col>
            </Row>

            <Row style={{ height: 400 }}>
                <Col span={24}>
                    <Row style={{
                        backgroundImage: `url(${BusinessBackgroundImage})`,
                        height: '100%',
                        backgroundSize: 'cover',
                        backgroundRepeat: 'no-repeat',
                        display: 'flex',
                        justifyContent: 'center',
                        alignItems: 'center'
                    }}>
                        <div style={{ backgroundColor: 'rgba(57, 66, 106, 0.8)', height: '100%', position: 'absolute', top: 0, bottom: 0, left: 0, right: 0 }}/>
                        <p style={{ color: '#fff', fontSize: '44px', lineHeight: '135.2%', zIndex: 10 }}>Built for Growth. Trusted by Businesses.</p>
                    </Row>
                </Col>
            </Row>

            <Row style={{ minHeight: 500, marginTop: 50, marginBottom: 50 }}>
                <Col offset={3} span={21}>
                    <Row>
                        <Col span={10}>
                            <p style={{ color: '#E74C3C', fontSize:16, fontWeight: '500', lineHeight: '25px' }}>How we do it</p>
                            <p style={{ color: '#39426A', fontSize:44, fontWeight: '800', lineHeight: '135.2%' }}>The Business Growth Platform </p>
                            <p style={{ color: '#39426A', fontSize: 16, lineHeight: '30px' }}>Thousands of organizations of all sizes trust Gapstack to grow their business.</p>
                        </Col>
                    </Row>
                    <Row style={{ marginTop: 10, marginBottom: 10 }}>
                        <OwlCarousel items={2.5}
                                     className="owl-theme"
                                     loop
                                     nav
                                     margin={20} >
                            <div style={{ backgroundColor: '#fff', borderRadius: '5px', boxShadow: '0px 0px 4px rgba(0, 0, 0, 0.1)', padding: 20 }}>
                                <img className="img" src= {CoolKidsMeeting} alt='alternate'/>
                                <p style={{ fontSize: 34, color: '#39426A', fontWeight: 800 }}>Gapstack for Banks</p>
                                <p style={{ fontSize: 16, color: '#39426A', lineHeight: '30px' }}>
                                    Deepen your relationship with the value chain ecosystem and understand your customer's business more intimately. Gapstack gives you insights to your customers operations and de-risks supply chain financing.
                                </p>
                            </div>

                            <div style={{ backgroundColor: '#fff', borderRadius: '5px', boxShadow: '0px 0px 4px rgba(0, 0, 0, 0.1)', padding: 20 }}>
                                <img className="img" src= {CoolKidsDiscussion} alt='alternate'/>
                                <p style={{ fontSize: 34, color: '#39426A', fontWeight: 800 }}>Gapstack for Business</p>
                                <p style={{ fontSize: 16, color: '#39426A', lineHeight: '30px' }}>
                                    Automate & digitize your entire business operations and get funding when you need it. From Bank guarantees such as bid bonds to advance payment guarantees. Get it all.
                                </p>
                            </div>

                            <div style={{ backgroundColor: '#fff', borderRadius: '5px', boxShadow: '0px 0px 4px rgba(0, 0, 0, 0.1)', padding: 20 }}>
                                <img className="img" src= {CoolKidsMeeting} alt='alternate'/>
                                <p style={{ fontSize: 34, color: '#39426A', fontWeight: 800 }}>Gapstack for Agents</p>
                                <p style={{ fontSize: 16, color: '#39426A', lineHeight: '30px' }}>
                                    Gapstack provides and end to end process flow for customer due diligence, financing and guarantee workflows and Automated integrations to the banks you serve.
                                </p>
                            </div>
                        </OwlCarousel>
                    </Row>
                </Col>
            </Row>

            <Row style={{ height: 500 }}>
                <Col span={24}>
                    <Row style={{ height: '100%' }}>
                        <Col span={12} style={{ display: 'flex', justifyContent: 'center', flexDirection: 'column', backgroundColor: '#C4C4C4' }}>
                            <div style={{ display: 'flex', justifyContent: 'center' }}>
                                <p style={{ fontSize: 44, fontWeight: 800, color: '#39426A' }}>Gapstack At Work</p>
                            </div>

                            <div style={{ width: '100%', position: 'absolute', bottom: 30 }}>
                                <p style={{ fontSize: 24, fontWeight: 500, color: '#1E87F0', textAlign: 'center'}}>Our Culture</p>
                            </div>
                        </Col>
                        <Col span={12} style={{ display: 'flex', justifyContent: 'center', flexDirection: 'column', backgroundColor: '#39426A' }}>
                            <div style={{ display: 'flex', justifyContent: 'center' }}>
                                <p style={{ fontSize: 44, fontWeight: 800, color: '#fff' }}>Join Gapstack</p>
                            </div>

                            <div style={{ width: '100%', position: 'absolute', bottom: 30 }}>
                                <p style={{ fontSize: 24, fontWeight: 500, color: '#fff', textAlign: 'center'}}>Apply</p>
                            </div>
                        </Col>
                    </Row>
                </Col>
            </Row>

            <Row style={{ minHeight: 500, marginTop: 50, marginBottom: 50 }}>
                <Col offset={3} span={20}>
                    <Row>
                        <Col span={10}>
                            <p style={{ color: '#39426A', fontSize:44, fontWeight: '800', lineHeight: '135.2%' }}>In The News </p>
                        </Col>
                    </Row>

                    <Row style={{ marginTop: 10, marginBottom: 10 }}>
                        <OwlCarousel items={3}
                                     className="owl-theme"
                                     margin={20} >
                            <div style={{ padding: 20 }}>
                                <p style={{ fontSize: 34, color: '#39426A', fontWeight: 800 }}>Gapstack receives Ksh. 1.5 Billion funding</p>
                                <p style={{ fontSize: 20, color: '#777C93' }}>8/10/2020</p>
                                <p style={{ fontSize: 16, color: '#39426A', lineHeight: '30px' }}>
                                    Kenyan start up receives Ksh. 1.5 Billion funding from a venture capital. The funds will majorly be used to... <Button type='link'>Read More</Button>
                                </p>
                                <Button type='link'>Google</Button>
                            </div>

                            <div style={{ padding: 20 }}>
                                <p style={{ fontSize: 34, color: '#39426A', fontWeight: 800 }}>Global trade now faces a $3.4 trillion financing gap</p>
                                <p style={{ fontSize: 20, color: '#777C93' }}>8/10/2020</p>
                                <p style={{ fontSize: 16, color: '#39426A', lineHeight: '30px' }}>
                                    To overcome the financing hurdles faced by SMEs, technology will play an important role. One promising and s... <Button type='link'>Read More</Button>
                                </p>
                                <Button type='link'>CNBC</Button>
                            </div>

                            <div style={{ padding: 20 }}>
                                <p style={{ fontSize: 34, color: '#39426A', fontWeight: 800 }}>Pandemic boosts social infra PPPs in Peru</p>
                                <p style={{ fontSize: 20, color: '#777C93' }}>8/10/2020</p>
                                <p style={{ fontSize: 16, color: '#39426A', lineHeight: '30px' }}>
                                    The Covid-19 pandemic has highlighted Peru's need for greater investment in social infrastructure, which is d... <Button type='link'>Read More</Button>
                                </p>
                                <Button type='link'>Google</Button>
                            </div>

                            <div style={{ padding: 20 }}>
                                <p style={{ fontSize: 34, color: '#39426A', fontWeight: 800 }}>Financing in for Serbia/Kosovo Peace Highway</p>
                                <p style={{ fontSize: 20, color: '#777C93' }}>8/10/2020</p>
                                <p style={{ fontSize: 16, color: '#39426A', lineHeight: '30px' }}>
                                    The Development Finance Corporation (DFC) and Export-Import Bank (EXIM) yesterday (15 September 2020) signed L... <Button type='link'>Read More</Button>
                                </p>
                                <Button type='link'>Google</Button>
                            </div>
                        </OwlCarousel>
                    </Row>
                </Col>
            </Row>

            <Row style={{ height: 400 }}>
                <Col offset={1} span={22}>
                    <Row style={{
                        backgroundImage: `url(${HandImage})`,
                        height: '100%',
                        backgroundSize: 'cover',
                        backgroundRepeat: 'no-repeat',
                        display: 'flex',
                        justifyContent: 'flex-start',
                        alignItems: 'center',
                        borderRadius: 5
                    }}>
                        <div style={{ background: 'linear-gradient(90deg, rgba(124, 96, 255, 0.9) 31.02%, rgba(0, 0, 0, 0.25) 99.17%)', height: '100%', position: 'absolute', top: 0, bottom: 0, left: 0, right: 0, borderRadius: 5 }}/>
                        <Col offset={1} span={10}>
                            <p style={{ color: '#fff', fontSize: '44px', lineHeight: '135.2%', zIndex: 10 }}>Ready to get started?</p>
                            <p style={{ fontSize: 16, lineHeight: '30px', color: '#fff' }}>
                                We are on deck to help you build your businesses digital trade ecosystem today
                            </p>
                            <Row gutter={16}>
                                <Col>
                                    <Button style={{ color: '#7C60FF', backgroundColor: '#fff', borderRadius: 4, height: 50 }}>Create a Free Account</Button>
                                </Col>
                                <Col style={{ display: 'flex', alignItems: 'center' }}>
                                    <Button type='link' style={{ color: '#fff', textDecoration: 'underline' }}>Let Us Call You</Button>
                                </Col>
                            </Row>
                        </Col>
                    </Row>
                </Col>
            </Row>
            
            <Row style={{ marginTop: 50, marginBottom: 50 }}>
                <Col offset={2} span={20}>
                    <Row gutter={16}>
                        <Col span={6}>
                            <Row style={{ marginBottom: 10 }}>
                                <img height={30} src={gapstackLogo} alt='alternate'/>
                            </Row>
                            <p style={{ marginBottom: 10, color: '#40a9ff'}}>info@gapstack.com</p>

                            <p>Nairobi</p>
                            <p>Ankole Grill</p>
                            <p>Senteu Plaza, Galana Road</p>
                        </Col>

                        <Col span={6}>
                            <p style={{ marginBottom: 10, color: '#39426A', fontWeight: 600, fontSize: 18 }}>Solutions</p>

                            <p>For Banks</p>
                            <p>For Businesses</p>
                            <p>For Agents</p>
                        </Col>

                        <Col span={6}>
                            <p style={{ marginBottom: 10, color: '#39426A', fontWeight: 600, fontSize: 18 }}>Company</p>

                            <p>About</p>
                            <p>Careers</p>
                            <p>Contact Us</p>
                            <p>Press</p>
                            <p>Terms & Conditions</p>
                            <p>Privacy Policy</p>
                        </Col>

                        <Col span={6}>
                            <p style={{ marginBottom: 10, color: '#39426A', fontWeight: 600, fontSize: 18 }}>Resources</p>

                            <p>Blog</p>
                            <p>Support</p>
                            <p>Developers</p>
                        </Col>

                    </Row>
                </Col>
            </Row>

            <Row style={{ height: 100, marginTop: 50, marginBottom: 50, borderTop: '1px solid #F3F4F8' }}>
                <Col offset={2} style={{ display: 'flex', alignItems: 'center' }}>
                    <p><MdCopyright /> Gapstack 2020. All Right Reserved</p>
                </Col>
            </Row>
        </div>

    )
}

export default Home;