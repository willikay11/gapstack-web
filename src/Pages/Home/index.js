import React from "react";
import Menu from "../../Components/Menu";
import {Button, Col, Row} from "antd";
import { Fade } from "react-awesome-reveal";
import { MdPeople, MdPayment, MdReceipt, MdAccountBalance, MdPieChart, MdCopyright, MdLocalOffer } from "react-icons/md";
import { FaWallet, FaChartBar, FaGlobe } from 'react-icons/fa'
import Particles from "react-particles-js";
import gapstackLogo from '../../assets/gapStackLogo.svg';
import DashboardImage from '../../assets/Dashboard.svg';
import HandImage from '../../assets/hand-image.png';
import OwlCarousel from 'react-owl-carousel';
import CoolKidsMeeting from '../../assets/Cool-Kids-Pitch-Meeting.svg';
import CoolKidsDiscussion from '../../assets/Cool-Kids-Discussion.svg';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';

const Home = () => {
    return (
        <div style={{ display: 'flex', height: '100%', flexFlow: 'column'}}>
            <Row style={{ position: 'relative'}}>
                <Col span={24}>
                    <Menu />

                    <Fade style={{ position: 'relative', zIndex: 10 }} triggerOnce={true} fraction={0.3}>
                        <Row style={{ height: 800}}>
                            <Col offset={4} span={16}>
                                <Row style={{ height: '100%' }}>
                                    <Col span={16} style={{ display: 'flex', alignItems: 'flex-start', justifyContent: 'center', flexDirection: 'column' }}>
                                        <p style={{ fontSize: 44, color: '#39426A', textTransform: 'capitalize', lineHeight: '135.2%', fontWeight: 'bold', fontStyle: 'normal' }}>powerful digital trade & supply chain financing platform</p>

                                        <Row>
                                            <Col span={15}>
                                                <p style={{ fontSize: 16, color: '#39426A', lineHeight: '30px', fontWeight: 500, fontStyle: 'normal' }}>When you register as a supplier, TradeDepot becomes a full-time distributor of your products. We buy and store the inventory, and take care of everything from shipping and pricing to customer service and returns.</p>
                                            </Col>
                                        </Row>
                                        <Button style={{ color: '#fff', backgroundColor: '#7c60ff', height: 50, borderRadius: 4, marginTop: 50 }}>Contact Sales</Button>
                                    </Col>
                                </Row>
                            </Col>
                        </Row>
                    </Fade>

                    <Particles
                        style={{ position: 'absolute', top: 0, left: 0, right: 0, bottom: 0, zIndex: 0 }}
                        params={{
                            particles: {
                                number: {
                                    value: 80,
                                    density: {
                                        enable: true,
                                    }
                                },
                                links: {
                                    color: "#b3b2b2",
                                    distance: 150,
                                    enable: true,
                                    opacity: 0.5,
                                    width: 1,
                                },
                                shape: {
                                    type: "circle",
                                },
                                size: {
                                    random: true,
                                    value: 5,
                                },
                            },
                        }}
                    />
                </Col>
            </Row>

            <Fade triggerOnce={true} fraction={0.3}>
                <Row style={{ height: 500, marginTop: 50 }}>
                    <Col offset={4} span={16}>
                        <Row>
                            <Col span={12}>
                                <p style={{ color: '#39426A', fontSize:16, fontWeight: '500', lineHeight: '25px' }}>Who we are</p>
                                <p style={{ color: '#39426A', fontSize:44, fontWeight: '800', lineHeight: '135.2%' }}>At Gaptstack, we are on a mission to build a digital ecosystem</p>
                                <p style={{ color: '#39426A', fontSize: 16, lineHeight: '30px' }}>We believe in giving businesses the liberty to automate buy & sell processes, unlock & build business networks and access funding at scale.</p>
                                <Button type='link'>Read More</Button>
                            </Col>
                        </Row>
                    </Col>
                </Row>
            </Fade>

            <Fade triggerOnce={true} fraction={0.3}>
                <Row style={{ minHeight: 500,marginTop: 50 }}>
                    <Col offset={4} span={16}>
                        <Row>
                            <Col span={8}>
                                <p style={{ fontSize: '50px', color: '#39426A', lineHeight: '135.2%', fontWeight: '800'}}>Why Gapstack</p>
                            </Col>
                        </Row>

                        <Row gutter={[16, 80]}>
                            <Col span={8}>
                                <MdPeople color='#7C60FF' size={54}/>
                                <p style={{ color: '#39426A', fontSize: '20px', fontWeight: 600 }}>Connected Buyers & Suppliers</p>
                                <p style={{ color: '#39426A', fontSize: '16px', fontWeight: "normal", marginBottom: '.5rem' }}>Create & send your invoices and orders on Gapstack</p>
                                <p style={{ color: '#39426A', fontSize: '16px', fontWeight: "normal", marginBottom: '.5rem' }}>- Create, upload & send your orders to suppliers</p>
                                <p style={{ color: '#39426A', fontSize: '16px', fontWeight: "normal", marginBottom: '.5rem' }}>- Create, upload & send purchase invoices</p>
                                <p style={{ color: '#39426A', fontSize: '16px', fontWeight: "normal", marginBottom: '.5rem' }}>- Track payment of invoices</p>
                            </Col>

                            <Col span={8}>
                                <MdPayment color='#E74C3C' size={54} />
                                <p style={{ color: '#39426A', fontSize: '20px', fontWeight: 600 }}>Seamless Payments</p>
                                <p style={{ color: '#39426A', fontSize: '16px', fontWeight: "normal", lineHeight: '30px' }}>
                                    Pay your suppliers and receive payments from your buyers to your bank account or mobile wallet with the touch of a button
                                </p>
                            </Col>

                            <Col span={8}>
                                <MdLocalOffer color='#008D3D' size={54} />
                                <p style={{ color: '#39426A', fontSize: '20px', fontWeight: 600 }}>Get Early Payment on Your Invoices</p>
                                <p style={{ color: '#39426A', fontSize: '16px', fontWeight: "normal", lineHeight: '30px' }}>
                                    Connect with your bank and improve your cashflows by discounting or factoring your customer invoices
                                </p>
                            </Col>

                            <Col span={8}>
                                <FaWallet color='#39426A' size={54} />
                                <p style={{ color: '#39426A', fontSize: '20px', fontWeight: 600 }}>Pay Your Suppliers Early</p>
                                <p style={{ color: '#39426A', fontSize: '16px', fontWeight: "normal", lineHeight: '30px' }}>
                                    Drive loyalty with your suppliers and grow your ecosystem by providing faster payments to your suppliers through early payments
                                </p>
                            </Col>

                            <Col span={8}>
                                <FaChartBar color='#F6B93B' size={54} />
                                <p style={{ color: '#39426A', fontSize: '20px', fontWeight: 600 }}>Robust Data & Analytics</p>
                                <p style={{ color: '#39426A', fontSize: '16px', fontWeight: "normal", lineHeight: '30px' }}>
                                    Generate insight into your entire operations by slicing and dicing data on your business through our analytics engine
                                </p>
                            </Col>

                            <Col span={8}>
                                <FaGlobe color='#E55039' size={54} />
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
            </Fade>

            <Fade triggerOnce={true} fraction={0.3}>
                <Row style={{ minHeight: 400, marginTop: 50, backgroundColor: '#f3f4f8' }}>
                    <Col offset={4} span={16} style={{ marginTop: 100, marginBottom: 100 }}>
                        <Row>
                            <Col span={24}>
                                <img src={DashboardImage} alt="alternate" width='100%' />
                            </Col>
                        </Row>

                        <Row style={{ marginTop: 50, marginBottom: 30 }}>
                            <Col span={8}>
                                <p style={{
                                    fontStyle: 'normal',
                                    fontWeight: 'bold',
                                    fontSize: 44,
                                    lineHeight: '59px',
                                    color: '#39426A'
                                }}>The Business Growth Platform</p>
                            </Col>
                        </Row>

                        <Row gutter={32}>
                            <Col span={8}>
                                <MdReceipt color='#008D3D' size={54} style={{ marginBottom: 30 }} />
                                <p style={{ color: '#39426A', fontSize: '20px', fontWeight: 600, fontStyle: 'normal' }}>Allows know what you pay</p>
                                <p style={{ color: '#39426A', fontSize: '16px', fontWeight: "normal", lineHeight: '30px' }}>
                                    Drive loyalty with your suppliers and grow your ecosystem by providing faster payments to your suppliers through early payments.
                                </p>
                            </Col>

                            <Col span={8}>
                                <MdReceipt color='#008D3D' size={54} style={{ marginBottom: 30 }} />
                                <p style={{ color: '#39426A', fontSize: '20px', fontWeight: 600, fontStyle: 'normal' }}>Start your integration</p>
                                <p style={{ color: '#39426A', fontSize: '16px', fontWeight: "normal", lineHeight: '30px' }}>
                                    Built on highly resilient microservices architecture with cloud and on prem hybrid to
                                </p>
                            </Col>
                        </Row>
                    </Col>
                </Row>
            </Fade>

            <Fade triggerOnce={true} fraction={0.3}>
                <Row style={{ minHeight: 500, marginTop: 50, marginBottom: 50 }}>
                    <Col offset={4} span={20}>
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
                                    <img className="img" src={CoolKidsMeeting} height='350px' alt='alternate'/>
                                    <p style={{ fontSize: 34, color: '#39426A', fontWeight: 800 }}>Gapstack for Banks</p>
                                    <p style={{ fontSize: 16, color: '#39426A', lineHeight: '30px' }}>
                                        Deepen your relationship with the value chain ecosystem and understand your customer's business more intimately. Gapstack gives you insights to your customers operations and de-risks supply chain financing.
                                    </p>
                                </div>

                                <div style={{ backgroundColor: '#fff', borderRadius: '5px', boxShadow: '0px 0px 4px rgba(0, 0, 0, 0.1)', padding: 20 }}>
                                    <img className="img" src= {CoolKidsDiscussion} height='350px' alt='alternate'/>
                                    <p style={{ fontSize: 34, color: '#39426A', fontWeight: 800 }}>Gapstack for Business</p>
                                    <p style={{ fontSize: 16, color: '#39426A', lineHeight: '30px' }}>
                                        Automate & digitize your entire business operations and get funding when you need it. From Bank guarantees such as bid bonds to advance payment guarantees. Get it all.
                                    </p>
                                </div>

                                <div style={{ backgroundColor: '#fff', borderRadius: '5px', boxShadow: '0px 0px 4px rgba(0, 0, 0, 0.1)', padding: 20 }}>
                                    <img className="img" src= {CoolKidsMeeting} height='350px' alt='alternate'/>
                                    <p style={{ fontSize: 34, color: '#39426A', fontWeight: 800 }}>Gapstack for Agents</p>
                                    <p style={{ fontSize: 16, color: '#39426A', lineHeight: '30px' }}>
                                        Gapstack provides and end to end process flow for customer due diligence, financing and guarantee workflows and Automated integrations to the banks you serve.
                                    </p>
                                </div>
                            </OwlCarousel>
                        </Row>
                    </Col>
                </Row>
            </Fade>

            <Fade triggerOnce={true} fraction={0.3}>
                <Row style={{ height: 400 }}>
                    <Col span={24}>
                        <Row style={{
                            backgroundImage: `url(${HandImage})`,
                            height: '100%',
                            backgroundSize: 'cover',
                            backgroundRepeat: 'no-repeat',
                            display: 'flex',
                            justifyContent: 'flex-start',
                            alignItems: 'center'
                        }}>
                            <div style={{ background: 'linear-gradient(90deg, rgba(124, 96, 255, 0.9) 31.02%, rgba(0, 0, 0, 0.25) 99.17%)', height: '100%', position: 'absolute', top: 0, bottom: 0, left: 0, right: 0 }}/>
                            <Col offset={4} span={10}>
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
            </Fade>

            <Fade triggerOnce={true} fraction={0.3}>
                <Row style={{ marginTop: 50, marginBottom: 50 }}>
                    <Col offset={4} span={16}>
                        <Row gutter={16}>
                            <Col span={6}>
                                <Row style={{ marginBottom: 10 }}>
                                    <img height={40} src={gapstackLogo} alt='alternate'/>
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
                    <Col offset={4} style={{ display: 'flex', alignItems: 'center' }}>
                        <p><MdCopyright /> Gapstack 2020. All Right Reserved</p>
                    </Col>
                </Row>
            </Fade>


        </div>

    )
}

export default Home;