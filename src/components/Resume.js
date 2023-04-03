import React from 'react';

function Resume() {
  return (
    <div className="sections">
      <p>
        Down page 1 of my resume <a href='public/assets/resume1.png' download>here</a>,
        <br />
        Page 2 right <a href='public/assets/resume2.png' download>here</a>,
        <br />
        Or view it as a GitHub gist <a href='https://gist.github.com/ScottsC0de/2ade3611df58b6ad7b4c198aaa16eef4'>here</a>
      </p>
      <br />
      <h3>Front-End Artistries</h3>
      <hr />
      <ul>
        <li>HTML // Markdown</li>
        <li>CSS // Bootstrap</li>
        <li>JavaScript // jQuery</li>
        <li>React // WebPack</li>
      </ul>
      <h3>Back-End Efficiencies</h3>
      <hr />
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