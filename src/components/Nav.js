import React, { useState } from 'react'; // hook for state memory
import AboutMe from './AboutMe';
import Portfolio from './Portfolio';
import Contact from './Contact'
import Resume from './Resume';

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
            <a href='/AboutMe'>About Me</a>
            <a href='/Portfolio'>Portfolio</a>
            <a href='/Contact'>Contact</a>
            <a href='/Resume'>Resume</a>
        </nav>
    </div>
)

export default Nav;