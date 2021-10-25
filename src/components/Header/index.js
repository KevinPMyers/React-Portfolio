import React, {useState} from 'react';
import About from '../About';
import Contact from '../Contact';
import Nav from '../Nav';
import Portfolio from '../Portfolio/portfolio';
import Resume from '../Resume/resume';

const Header = () => {
    const [currentPage, handlePageChange] = useState('About')

    const renderPage = () => {
        switch (currentPage) {
            case 'Contact':
                return <Contact />;
            case 'Portfolio':
                return <Portfolio />
            case 'Resume':
                return <Resume />
            default:
                return <About />
        }
    }

    return (
        <div>
            <Nav currentPage={currentPage} handlePageChange={handlePageChange} />
            <div>{renderPage(currentPage)}</div>
        </div>
    )
}

export default Header;
