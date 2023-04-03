import React, { useState } from 'react';
import Project from './Project';

function Portfolio() {
    // Replace links with deployed projects and GitHub repos
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
            link: "https://www.youtube.com/watch?v=_9QMaGcVVWM&t=127s",
            repo: "https://github.com/ScottsC0de/social-api",
        },
        {
            name: "Employee Tracker",
            description: "Application that allows you to track all employees in a database using mySQL and the inquirer npm package",
            link: "https://www.youtube.com/watch?v=12fUfrv_vkg&t=17s",
            repo: "https://github.com/ScottsC0de/employee-tracker",
        },
        {
            name: "E-Commerce Back-End",
            description: "Back-end application that uses the ORM Sequelize to communicate with a local database",
            link: "https://www.youtube.com/watch?v=N2_ZViMa5r4&t=99s",
            repo: "https://github.com/ScottsC0de/e-commerce",
        },
        {
            name: "myTeam App",
            description: "Generate an HTML page for your software team",
            link: "https://www.youtube.com/watch?v=a0Dp6FPVI6w&t=20s",
            repo: "https://github.com/ScottsC0de/myteam-app",
        },
        {
            name: "ReadMe Machine",
            description: "Generate ReadMe files using node.js",
            link: "https://www.youtube.com/watch?v=eNjHm8k3z60&t=13s",
            repo: "https://github.com/ScottsC0de/readme-machineyou",
        }
    ]);
}

export default Portfolio;