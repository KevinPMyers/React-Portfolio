import React from 'react';

const Nav = (props) => {
    
    return(
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark ">
            <h2 id='navName'>
                Kevin Myers
            </h2>
            
            <ul className="nav nav-tabs">
                <li class="nav-item">
                    <a className="nav-link active" aria-current="page" href="#About" onClick={() => props.handlePageChange('About')}> About </a> 
                </li>
                <br></br>
                <li className="nav-item">
                    <a className="nav-link active" href="#projects" onClick={() => props.handlePageChange('Projects')}> Projects </a>
                </li>
                <li className="nav-item">
                    <a className="nav-link active" href="#contact" onClick={() => props.handlePageChange('Contact')}> Contact </a>
                </li>
                <li className="nav-item">
                    <a className="nav-link active" href="#resmue" onClick={() => props.handlePageChange('Resume')}> Resume </a>
                </li>
                
            </ul>
        </nav>
    )
}

export default Nav;