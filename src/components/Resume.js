import React from 'react';

function Resume() {
  return (
    <div>
      <h2 className='section-headers'>Resume</h2>
      <p>
        Down page 1 of my resume <a href='public/assets/resume1.pdf' download>here</a>,
        <br />
        Page 2 right <a href='public/assets/resume2.pdf' download>here</a>,
        <br />
        Or view it as a GitHub gist <a href='https://gist.github.com/ScottsC0de/2ade3611df58b6ad7b4c198aaa16eef4' target='_blank' rel='noreferrer'>here</a>
      </p>
      <br />
      <h3>Front-End Artistries</h3>
      <ul>
        <li>HTML // Markdown</li>
        <li>CSS // Bootstrap</li>
        <li>JavaScript // jQuery</li>
        <li>React // WebPack</li>
      </ul>
      <h3>Back-End Efficiencies</h3>
      <ul>
        <li>Web APIs</li>
        <li>Node.js // Express.js</li>
        <li>MySQL // Sequelize</li>
        <li>MongoDB // Mongoose</li>
        <li>GraphQL</li>
      </ul>
    </div>
  );
};

export default Resume;