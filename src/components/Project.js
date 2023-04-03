import React, { useState } from 'react';

function Project();

const [projects] = useState([
    {
        name: "Elite Matchups",
        description: "Application for setting head to head matchups for anyone to vote on anonymously",
        link: "https://elite-matchups.herokuapp.com",
        repo: "https://github.com/ScottsC0de/dookie",
    },
    {
        name: "Working Social Media API",
        description: "Social media api created using MongoDB, Mongoose ODM, & Express.js with JSON data storage and retrieval demonstrated using Insomnia",
        link: "https://youtu.be/_9QMaGcVVWM",
        repo: "https://github.com/ScottsC0de/social-api",
    },
    {
        name: "E-Commerce Back-End",
        description: "Back-end application that uses the ORM Sequelize to communicate with a local database",
        link: "https://youtu.be/suPdpcR-5OY",
        repo: "https://github.com/ScottsC0de/e-commerce",
    },
    {
        name: "SQL Database Tracker",
        description: "Application that allows you to track all employees in a database using mySQL and the inquirer npm package",
        link: "https://youtu.be/jJTQS-aa_f0",
        repo: "https://github.com/ScottsC0de/employee-tracker",
    },
    {
        name: "myTeam App",
        description: "Generate an HTML page for your software team",
        link: "https://youtu.be/JoxPK37G1w0",
        repo: "https://github.com/ScottsC0de/myteam-app",
    },
    {
        name: "ReadMe Machine",
        description: "Generate ReadMe files using node.js",
        link: "https://youtu.be/FiDq-eSe_e0",
        repo: "https://github.com/ScottsC0de/readme-machine",
    }
]);

export default Project;