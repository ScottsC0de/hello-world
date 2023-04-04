import React, { useState } from 'react';
import {
    Carousel,
    CarouselItem,
    CarouselControl,
    CarouselIndicators,
    CarouselCaption,
} from 'reactstrap';

const items = [
    {
        id: 1,
        altText: 'Matchup App using HTML, CSS, & JS',
        caption: 'Elite Matchups',
    },
    {
        id: 2,
        altText: 'MongoDB data storage & retrieval',
        caption: 'Social Media API',
    },
    {
        id: 3,
        altText: 'Database communication using Sequelize',
        caption: 'E-Commerce Back-End',
    },
    {
        id: 4,
        altText: 'Track database items using mySQL',
        caption: 'SQL Database Tracker',
    },
    {
        id: 5,
        altText: 'Generate HTML page using node.js & inquirer npm',
        caption: 'myTeam App',
    },
    {
        id: 6,
        altText: 'Generate ReadMe files using node.js & inquirer npm',
        caption: 'ReadMe Machine',
    },
];

function Portfolio(props) {
    const [activeIndex, setActiveIndex] = useState(0);
    const [animating, setAnimating] = useState(false);

    const next = () => {
        if (animating) return;
        const nextIndex = activeIndex === items.length - 1 ? 0 : activeIndex + 1;
        setActiveIndex(nextIndex);
    };

    const previous = () => {
        if (animating) return;
        const nextIndex = activeIndex === 0 ? items.length - 1 : activeIndex - 1;
        setActiveIndex(nextIndex);
    };

    const goToIndex = (newIndex) => {
        if (animating) return;
        setActiveIndex(newIndex);
    };

    const slides = items.map((item) => {
        return (
            <CarouselItem
                className="custom-tag"
                tag="div"
                key={item.id}
                onExiting={() => setAnimating(true)}
                onExited={() => setAnimating(false)}
            >
                <CarouselCaption
                    className="text-danger"
                    captionText={item.altText}
                    captionHeader={item.caption}
                />
            </CarouselItem>
        );
    });

    return (
        <div>
            <style>
                {`.custom-tag {
              max-width: 100%;
              height: 500px;
              background: black;
            }`}
            </style>
            <h2 className='section-headers'>My Work</h2>
            <Carousel activeIndex={activeIndex} next={next} previous={previous}>
                <CarouselIndicators
                    items={items}
                    activeIndex={activeIndex}
                    onClickHandler={goToIndex}
                />
                {slides}
                <CarouselControl
                    direction="prev"
                    directionText="Previous"
                    onClickHandler={previous}
                />
                <CarouselControl
                    direction="next"
                    directionText="Next"
                    onClickHandler={next}
                />
            </Carousel>
        </div>
    );
}

// carousel code found at https://reactstrap.github.io/?path=/docs/components-carousel--carousel 

export default Portfolio;


// const [projects] = useState([
//     {
//         name: "Elite Matchups",
//         description: "Application for setting head to head matchups for anyone to vote on anonymously",
//         link: "https://elite-matchups.herokuapp.com",
//         repo: "https://github.com/ScottsC0de/dookie",
//     },
//     {
//         name: "Working Social Media API",
//         description: "Social media api created using MongoDB, Mongoose ODM, & Express.js with JSON data storage and retrieval demonstrated using Insomnia",
//         link: "https://youtu.be/_9QMaGcVVWM",
//         repo: "https://github.com/ScottsC0de/social-api",
//     },
//     {
//         name: "E-Commerce Back-End",
//         description: "Back-end application that uses the ORM Sequelize to communicate with a local database",
//         link: "https://youtu.be/suPdpcR-5OY",
//         repo: "https://github.com/ScottsC0de/e-commerce",
//     },
//     {
//         name: "SQL Database Tracker",
//         description: "Application that allows you to track all employees in a database using mySQL and the inquirer npm package",
//         link: "https://youtu.be/jJTQS-aa_f0",
//         repo: "https://github.com/ScottsC0de/employee-tracker",
//     },
//     {
//         name: "myTeam App",
//         description: "Generate an HTML page for your software team",
//         link: "https://youtu.be/JoxPK37G1w0",
//         repo: "https://github.com/ScottsC0de/myteam-app",
//     },
//     {
//         name: "ReadMe Machine",
//         description: "Generate ReadMe files using node.js",
//         link: "https://youtu.be/FiDq-eSe_e0",
//         repo: "https://github.com/ScottsC0de/readme-machine",
//     }
// ]);