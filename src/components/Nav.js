import React, { useState } from 'react';

function Nav() {
    return (
        <div>
            <nav>
                <a href='/AboutMe'>About Me</a>
                <a href='/Portfolio'>Portfolio</a>
                <a href='/Contact'>Contact</a>
                <a href='/Resume'>Resume</a>
            </nav>
        </div>
    )
}

// const renderState = () => {
//     switch (currentState) {
//         case 'About Me': return <AboutMe />;
//         case 'Portfolio': return <Portfolio />;
//         case 'Contact': return <Contact />;
//         case 'Resume': return <Resume />;
//         default: return <AboutMe />;
//     }
// };



export default Nav;