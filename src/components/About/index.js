import React from 'react';
import PortfolioHeadshot from '../../assets/images/smallHeadShot-256x256.jpg'
import { Container, Row, Col } from 'react-bootstrap';
const About = () => {

    return (
        <Container className="container" id="about-container">
        
            <Row className="about-title">
                <h1>About Me</h1>
                
                <Col className="col-6">
                    <img id='selfie' alt='myself' src={PortfolioHeadshot}  className="aboutPic"></img>
                </Col>
                
                <Col className="col-6" id="hook">
                <p> Welcome to my Portfolio! My name is Kevin Myers, I am a 10 year fine dining veteran turned web developer, currently 
                completing Case Western Reserve University's full stack web development program. With both relational/non-relational databases and React applications
                particularly garnering my interest. 
                </p>
                </Col>
            
            </Row>
            
            
            
            <br />
            <div className="row" id="description">
                <div  id="des-1">
                    <p> As a self driven individual who strives to excel in all endeavors,
              I quickly found fine dining was a place I could challenge myself. The high intensity environment coupled with my deep knowledge base in cocktails and wine, created a skill set
            for mapping out a plan of action to over-come any challenge put in front of me.
                    </p>
                    <p></p>
                </div>
                <div  id="des-2">
                    <p> Logic has been my greatest asset in the service industry, as a result, I soon realized this skill could be put to better use. I decided to sharpen this 
                    edge and put myself in front of a new challenge,
                    web development through Case Western. JavaScript went from a foreign concept, to something that almost came naturally. Certain 
                    technologies such as Express, Node, SQL, and NoSQL were
                    very appealing in this course and invited a hunger to push out of my comfort zone to over-come new challenges.
                    </p>  
                </div>
            </div>
            <footer className="about-foot">
                <p style={{ fontStyle: `italic`}}> 
                    "Dare to be Great"
                </p>
            </footer>

        
        </Container>
    )
}

export default About;