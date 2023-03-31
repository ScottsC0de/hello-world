import React from 'react';

function Resume() {
    return (
          <div className="sections">
            <p>
                You can download my awesome resume <a href='' download>here</a>
                Or view it as a GitHub gist here: <a href=''></a>
            </p>
            <h3>Front-End</h3>
            <ul>
              <li>HTML // Markdown</li>
              <li>CSS // Bootstrap</li>
              <li>JavaScript // jQuery</li>
              <li>React // WebPack</li>
            </ul>
            <h3>Back-End</h3>
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