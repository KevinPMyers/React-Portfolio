import React, { useState } from "react";
import projects from '../../assets/projects.json';
import { Container, Row } from "react-bootstrap";
import ProjectLayout from "./Project";


const Portfolio = () => {

    const [listProjects] = useState(projects);

    return (
        <Container>
            <Row>
            <h1>Projects</h1>
            </Row>
            {Array.from({length: 1}).map((_, idx) => (
                <Row>
                 {listProjects.map(projects => (
                     <ProjectLayout 
                         name={projects.name}
                         image={projects.image}
                         liveLink={projects.liveLink}
                         githubRepo={projects.githubRepo}
                         technologies={projects.technologies}

                     />
                 ))}
                </Row>
            ))}
            
        </Container>
    )
}

export default Portfolio;