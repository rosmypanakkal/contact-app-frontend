import React from 'react'
import {
    MDBCard,
    MDBCardBody,
    MDBCardText,
    MDBCardImage
} from 'mdb-react-ui-kit';
import { Col, Row } from 'react-bootstrap';
import { MDBBtn } from 'mdb-react-ui-kit';
import { Link } from 'react-router-dom';


function Admin() {
    return (
        <div>
            <h1 className='text-center m-5 '>ConnectHub: Streamlining <br /> Your Contacts for Effortless Connectivity</h1>
            <div className="row m-5">
                <div className="col-7">
                    <p>ConnectHub is your go-to solution for simplifying and enhancing your contact management experience. With its user-friendly interface and robust features,
                        this app ensures that staying connected is both seamless and efficient. Easily organize your contacts,
                        access essential information at a glance, and initiate communication with just a few taps.
                        ConnectHub goes beyond the conventional contact app, offering smart filters and categorization options to tailor your contact list to your specific needs. Whether you're networking, coordinating events, or simply staying in touch with friends and family, ConnectHub empowers you to navigate your relationships effortlessly. Say goodbye to the hassle of searching for contacts and embrace a more streamlined and enjoyable connectivity experience with ConnectHub. Download the app today and revolutionize the way you stay in touch!</p>
                </div>

                <div className="col-5 text-center">
                    <img src="https://static.wixstatic.com/media/029a27_d23d196e77d04fbda358bbcf25e7e2fe~mv2.gif" style={{ width: '350px' }} alt="" />
                </div>
            </div>
            <marquee behavior="" direction="">
                <Row>
                    <Col>
                        <MDBCard>
                            <MDBCardImage src='https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8cGVyc29ufGVufDB8fDB8fHww' alt='...' position='top' />
                            <MDBCardBody>
                                <MDBCardText>
                                </MDBCardText>
                            </MDBCardBody>
                        </MDBCard>
                    </Col>
                    <Col>
                        <MDBCard>
                            <MDBCardImage src='https://images.unsplash.com/photo-1504593811423-6dd665756598?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTh8fHBlcnNvbnxlbnwwfHwwfHx8MA%3D%3D' alt='...' position='top' />
                            <MDBCardBody>
                                <MDBCardText>
                                </MDBCardText>
                            </MDBCardBody>
                        </MDBCard>
                    </Col>
                    <Col>
                        <MDBCard>
                            <MDBCardImage src='https://images.unsplash.com/photo-1500048993953-d23a436266cf?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTZ8fHBlcnNvbnxlbnwwfHwwfHx8MA%3D%3D' alt='...' position='top' />
                            <MDBCardBody>
                                <MDBCardText>
                                </MDBCardText>
                            </MDBCardBody>
                        </MDBCard>
                    </Col>
                    <Col>
                        <MDBCard>
                            <MDBCardImage src='https://media.istockphoto.com/id/1434212178/photo/middle-eastern-lady-using-laptop-working-online-sitting-in-office.webp?b=1&s=170667a&w=0&k=20&c=ph3mfnIbqqmyCHlz4rTCPI6DPaK-J9K8zdlqemC8WOc=' alt='...' position='top' />
                            <MDBCardBody>
                                <MDBCardText>
                                </MDBCardText>
                            </MDBCardBody>
                        </MDBCard>
                    </Col>
                    <Col>
                        <MDBCard>
                            <MDBCardImage src='https://t3.ftcdn.net/jpg/03/02/88/46/360_F_302884605_actpipOdPOQHDTnFtp4zg4RtlWzhOASp.jpg' alt='...' position='top' />
                            <MDBCardBody>
                                <MDBCardText>
                                </MDBCardText>
                            </MDBCardBody>
                        </MDBCard>
                    </Col>
                    <Col>
                        <MDBCard>
                            <MDBCardImage src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSSAJzKPx0KzdNrE459Bsr_UYq-oQ7O-OehrfU8NM24tZr1F3ac1gIVWCf5us1gt72wTNU&usqp=CAU' alt='...' position='top' />
                            <MDBCardBody>
                                <MDBCardText>
                                </MDBCardText>
                            </MDBCardBody>
                        </MDBCard>
                    </Col>
                </Row>

            </marquee>
<br /><br /><br />
<div className="row p-3">
    <div className="col-6">
    <div style={{ position: 'relative' }}>
    <img src="https://d1eipm3vz40hy0.cloudfront.net/images/AMER/contactuspage.jpg" height="500px"  alt="" />
    <h3 style={{ position: 'absolute', top: '20%', left: '40%', transform: 'translate(-50%, -50%)', color: 'white' }} className="text-center m-5">Contacts are stars in your networking galaxy</h3>
</div>

    </div>
    <div className="col-6 px-5 pt-5">
    <div className="container">
<p>Consumers want more than one way to get in touch with companies. While some customers want to talk on the phone, others may prefer to send an email if they’re busy and don’t have the time to sit on a call. A good Contact Us page features an array of options.

Providing different types of contact options is especially important if you want to deliver convenient, 24/7 support. Self-service tools—such as AI-powered chat, FAQs, and knowledge base articles—help customers find the answers they need outside your business hours.

According to the Zendesk Customer Experience Trends Report 2022, 89 percent of customers will spend more with companies that allow them to find answers online without having to contact anyone. Additionally, 93 percent of customers will spend more if their preferred contact option is offered.

So, it’s important to include various contact options, such as:</p>
</div>
    </div>
</div>
<Link to={'/details'}>
<div className='fs-3 text-center m-5'>
            <MDBBtn  rounded>
         Get started
      </MDBBtn>
            </div>
</Link>
       
        </div>
    )
}

export default Admin