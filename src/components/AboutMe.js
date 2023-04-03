import React from 'react';

import PicOfMe from '../img/me.jpg'

function AboutMe() {
    return (
        <div>
            <h2>About Scott George...</h2>
            <img src={PicOfMe} alt='A fantastic picture of me'>
            </img>
            <p>
                a 28 year old full-stack web developer and musician with a passion for technology, music, & execellence. Freshly graduated from the <a href='https://media.trilogyed.com/UConn/coding/uconn_curriculum_overview_fullstackflex_pt.pdf'>UConn Coding Bootcamp</a>, I am ready to start my WebDev career.
            </p>
            <br />
            <p>
                Please, stay awhile & check out my work using the NavBar up top.
            </p>
        </div>
    );
};

export default AboutMe;