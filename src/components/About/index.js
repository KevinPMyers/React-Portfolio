import React from 'react';
import PortfolioHeadshot from '../../assets/images/smallHeadShot-256x256.jpg'
const About = () => {

    return (
        <div className="about-me">
            <div className="about-title">
                <h2>Who is Kevin Myers?</h2>

            </div>
            <div className="intro">
                <p> Welcome to my Portfolio! My name is Kevin Myers, I am a 10 year fine dining veteran turned web developer! I am currently completing Case Western Reserve University's full stack web development program, particularly interested in non-relational databases(MongoDB) and React applications.</p>
            </div>
            <div className="pictures">
                <img id='selfie' alt='myself' src={PortfolioHeadshot}  className="aboutPic"></img>
            </div>
            <h3>A bit more about myself</h3>
            <p> I am a self-driven individual that strives to excel in all endeavors. I started out working in restaurants at a young age and quickly found it was something I excelled in. I started working in fine dining just a short couple years later and found I loved the high-intesity, attention to fine detail environment. I found myself hungry for knowledge and immediately began honing my craft from Sommolier training to learning of the oysters of the world. After all as the saying goes, the world is your oyster, I intended to absorb as much as I could from veteran industry professionals.
            <br></br>
            
            </p>



        </div>
    )
}

export default About;