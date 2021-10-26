import React from "react";
import PortfolioHeadshot from '../../assets/images/smallHeadShot-256x256.jpg';
import { Container, Row, Col} from 'react-bootstrap';

const About = () => {

    return (
        <Container fluid="sm" className="about-container" style={{justifyContent: "center", display: "flex", backgroundColor: "ActiveBorder" }}>
            <Col fluid="sm" xs={2} style={{justifyContent:"center"}}>
                    <img id='selfie' src={PortfolioHeadshot} alt='myself'></img>
                </Col>
            <Row id='intro'>
                
                
                <Col fluid="sm" xs={10} style={{display: "flex", flexWrap:"wrap"}}>
                    <p id='hook'>Welcome to my Portfolio! My name is Kevin Myers, I am a 10 year fine dining veteran turned web developer, currently 
                completing Case Western Reserve University's full stack web development program. With both relational/non-relational databases and React applications
                particularly garnering my interest.</p>
                </Col>
            </Row>

            <Row className='description'>
                <Col xs={10}>
                    <p>As a self driven individual who strives to excel in all endeavors,
              I quickly found fine dining was a place I could challenge myself. The high intensity environment coupled with my deep knowledge base in cocktails and wine, created a skill set
            for mapping out a plan of action to over-come any challenge put in front of me. Logic has been my greatest asset in the service industry, as a result, I soon realized this skill could be put to better use. </p>
                
                    <p>I decided to sharpen this 
                    edge and put myself in front of a new challenge,
                    web development through Case Western. JavaScript went from a foreign concept, to something that almost came naturally. Certain 
                    technologies such as Express, Node, SQL, and NoSQL were
                    very appealing in this course and invited a hunger to push out of my comfort zone to over-come new challenges.</p>
                </Col>
            </Row>
        </Container>
        
    )
}

export default About;