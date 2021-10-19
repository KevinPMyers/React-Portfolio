import React from "react";
import githubLogo from '../../assets/images/github.svg';
import linkedIn from '../../assets/images/linkedin.svg';
import email from '../../assets/images/envelope-fill.svg';
import { Container, Row, Col } from 'react-bootstrap';
const Footer = () => {
    return (
        <Container className="footer">
            <Row>
                <Col md={{ span: 6, offset: 3}} style={{display: 'flex', justifyContent:'space-around' }}>
                    <img href="https://github.com/KevinPMyers" src={githubLogo} style={{ width:'50px'}} alt="github link"></img>
                    <img href="https://www.linkedin.com/in/kevin-myers-0734041b1/" src={linkedIn} style={{ width:'50px'}} alt="linkedIn link"></img>
                    <img href="mailto:kmyers25@gmail.com" src={email} style={{ width:'50px'}} alt="email link"></img>
                    
                    
                </Col>
            </Row>
        </Container>
    )
}

export default Footer;