import React, { useState } from 'react'; // hook for state memory
import AboutMe from './sections/AboutMe';
import Resume from './sections/Resume';
import Portfolio from './sections/Portfolio';
import Contact from './sections/Contact'

function Nav() {
    const [currentState, changeState] = useState('AboutMe');
}

const renderState = () => {
    switch (currentState) {
        case 'About Me': return <AboutMe />;
        case 'Resume': return <Resume />;
        case 'Portfolio': return <Portfolio />;
        case 'Contact': return <Contact />;
        default: return <AboutMe />;
    }
};

return (
    <div className='nav-container'>
        <nav>
            <a href=''></a>
            <a href=''></a>
            <a href=''></a>
            <a href=''></a>
        </nav>
    </div>
)

export default Nav;