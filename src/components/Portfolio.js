import React, { useState } from 'react';
import Project from './Project';
import { Carousel } from 'reactstrap';

function Portfolio() {

    <div id="carouselExampleCaptions" class="carousel slide" data-bs-ride="carousel">
        <div class="carousel-indicators">
            <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
            <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
            <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 3"></button>
            <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="3" aria-label="Slide 4"></button>
            <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="4" aria-label="Slide 5"></button>
            <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="5" aria-label="Slide 6"></button>
        </div>
        <div class="carousel-inner">
            <div class="carousel-item active">
                <img src="..." class="d-block w-100" alt="..."></img>
                <div class="carousel-caption d-none d-md-block">
                    <h5>Elite Matchups</h5>
                    <p>Application for setting head to head matchups for anyone to vote on anonymously</p>
                </div>
            </div>
            <div class="carousel-item">
                <img src="..." class="d-block w-100" alt="..."></img>
                <div class="carousel-caption d-none d-md-block">
                    <h5>Working Social Media API</h5>
                    <p>Social media api created using MongoDB, Mongoose ODM, & Express.js with JSON data storage and retrieval demonstrated using Insomnia</p>
                </div>
            </div>
            <div class="carousel-item">
                <img src="..." class="d-block w-100" alt="..."></img>
                <div class="carousel-caption d-none d-md-block">
                    <h5>Employee Tracker</h5>
                    <p>Application that allows you to track all employees in a database using mySQL and the inquirer npm package</p>
                </div>
            </div>
            <div class="carousel-item">
                <img src="..." class="d-block w-100" alt="..."></img>
                <div class="carousel-caption d-none d-md-block">
                    <h5>E-Commerce Back-End</h5>
                    <p>Back-end application that uses the ORM Sequelize to communicate with a local database</p>
                </div>
            </div>
            <div class="carousel-item">
                <img src="..." class="d-block w-100" alt="..."></img>
                <div class="carousel-caption d-none d-md-block">
                    <h5>myTeam App</h5>
                    <p>Generate an HTML page for your software team</p>
                </div>
            </div>
            <div class="carousel-item">
                <img src="..." class="d-block w-100" alt="..."></img>
                <div class="carousel-caption d-none d-md-block">
                    <h5>ReadMe Machine</h5>
                    <p>Generate ReadMe files using node.js</p>
                </div>
            </div>
        </div>
        <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
            <span class="carousel-control-prev-icon" aria-hidden="true"></span>
            <span class="visually-hidden">Previous</span>
        </button>
        <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
            <span class="carousel-control-next-icon" aria-hidden="true"></span>
            <span class="visually-hidden">Next</span>
        </button>
    </div>
}

export default Portfolio;