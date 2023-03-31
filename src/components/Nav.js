import React, { useState } from 'react'; // hook for state memory
import AboutMe from './sections/AboutMe';
import Portfolio from './sections/Portfolio';
import Contact from './sections/Contact'
import Resume from './sections/Resume';

function Nav() {
    const [currentState, changeState] = useState('AboutMe');
}

const renderState = () => {
    switch (currentState) {
        case 'About Me': return <AboutMe />;
        case 'Portfolio': return <Portfolio />;
        case 'Contact': return <Contact />;
        case 'Resume': return <Resume />;
        default: return <AboutMe />;
    }
};

return (
    <div className='nav-container'>
        <nav>
            <a href=''>About Me</a>
            <a href=''>Portfolio</a>
            <a href=''>Contact</a>
            <a href=''>Resume</a>
        </nav>
    </div>
)

export default Nav;