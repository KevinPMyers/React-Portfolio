import React from "react";
import {Col, Card, Button, } from 'react-bootstrap';

function ProjectLayout(props) {

    return (
        <Col xs={4}>
            <Card className="my-2 bg-light text-dark">
                <Card.Img variant="top" src={require(`../../assets/images/${props.image}`).default} />
                <Card.Body>
                    <Card.Text style={{ display: "flex", justifyContent: "center"}}>
                        <p style={{justifyContent: "center"}}>{props.name}</p>
                        <div>
                        <Button fluid="sm" href={props.liveLink} variant="outline-dark" className="m-2">Live URL</Button>
                        <Button href={props.githubRepo} variant="outline-dark" className="m-2">Github</Button>
                        </div>
                    </Card.Text>
                </Card.Body>
            </Card>
        </Col>
    )
}

export default ProjectLayout;