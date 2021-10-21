import React from "react";
import githubLogo from '../../assets/images/github.svg';
import linkedIn from '../../assets/images/linkedin.svg';
import email from '../../assets/images/envelope-fill.svg';
import { Container, Row, Col } from 'react-bootstrap';
const Footer = () => {
    return (
        <Container className="footer">
            <Row>
                <Col md={{ span: 6, offset: 3}} style={{display: 'flex', justifyContent:'space-around' }} >
                    
                        <a href="https://github.com/KevinPMyers" rel='noreferrer noopener' target="_blank">
                        <img src={githubLogo} style={{ width:'50px'}} alt="github link" ></img>
                        </a>
                    <a href="https://www.linkedin.com/in/kevin-myers-0734041b1/" rel='noreferrer noopener' target="_blank">
                    <img src={linkedIn} style={{ width:'50px'}} alt="linkedIn link" ></img>
                    </a>
                    <a href="mailto:kmyers25@gmail.com" rel='noreferrer noopener' target="_blank">
                    <img src={email} style={{ width:'50px'}} alt="email link"></img>
                    </a>
                    
                    
                </Col>
            </Row>
        </Container>
    )
}

export default Footer;