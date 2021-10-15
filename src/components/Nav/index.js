import React from 'react';
import hero from "../../assets/images/hero.jpg"
const Nav = (props) => {
    
    return(
        <nav className="navbar navbar-expand-lg"style=
        {{ backgroundImage: `url(${hero})`}} id="hero">
        
            <h1 id='navName'>
                Kevin Myers
            </h1>
            
            <ul className="nav nav-tabs">
                <li class="nav-item">
                    <a className="nav-link h4 " aria-current="page" href="#About" onClick={() => props.handlePageChange('About')}> About </a> 
                </li>
                <br></br>
                <li className="nav-item">
                    <a className="nav-link h4" href="#projects" onClick={() => props.handlePageChange('Projects')}> Projects </a>
                </li>
                <li className="nav-item">
                    <a className="nav-link h4" href="#contact" onClick={() => props.handlePageChange('Contact')}> Contact </a>
                </li>
                <li className="nav-item">
                    <a className="nav-link h4" href="#resmue" onClick={() => props.handlePageChange('Resume')}> Resume </a>
                </li>
                
            </ul>
        
        </nav>
    )
}

export default Nav;