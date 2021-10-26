import React from "react";
import { Container, Card } from "react-bootstrap";
import Resume1 from "../../assets/images/Resume-1.PNG";
import Resume2 from "../../assets/images/Resume-2.PNG";

const Resume = () => {

    return(
        <Container style={{justifyContent: "center", display:"flex"}}>
            
            <Card className="my-2 bg-light text-dark">
            <img src={Resume1} alt='first resume page'></img>
            <img src={Resume2} alt='Second resume page'></img>
            </Card>
            
        </Container>
    )
}

export default Resume;