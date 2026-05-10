# mabaird01.github.io

Web Design and Development Portfolio Repository

## Table of Contents

- Introduction
- Features
- Technologies Used
- Installation
- Usage
- Persistent Storage Features
- Dynamic Project Rendering
- Contributing
- License
- Contact

--------------------------------------------------
INTRODUCTION
--------------------------------------------------

This project serves as a continuous portfolio of projects
developed during my degree program at ECPI University.

The website showcases my skills in:

- Web Design
- Front-End Development
- JavaScript Programming
- User Interface Design
- Persistent Client-Side Storage

The portfolio was designed using a modern responsive layout
with a professional cyber-inspired dark theme.

--------------------------------------------------
FEATURES
--------------------------------------------------

- Responsive portfolio website
- Interactive dark mode toggle
- Persistent dark mode preferences using localStorage
- Animated welcome modal with persistence
- Dynamic project rendering using JavaScript
- Contact form interaction and status messaging
- Skills section generated dynamically
- Session storage implementation using JSON
- Responsive project cards generated from JavaScript objects
- Delayed notification banner

--------------------------------------------------
TECHNOLOGIES USED
--------------------------------------------------

- HTML5
- CSS3
- JavaScript
- DOM Manipulation
- JSON
- sessionStorage
- localStorage
- GitHub Pages

--------------------------------------------------
INSTALLATION
--------------------------------------------------

To set up this project locally, follow these steps:

1. Clone the repository

git clone https://github.com/mabaird01/mabaird01.github.io

2. Navigate to the project directory

cd mabaird01.github.io

3. Open index.html in your preferred web browser

--------------------------------------------------
USAGE
--------------------------------------------------

This site acts as a portfolio and central repository for
projects completed throughout my degree program.

The page demonstrates the use of:

- Dynamic DOM manipulation
- Persistent browser storage
- Interactive UI components
- Responsive web design principles

The project is intended to showcase technical skills to
potential employers, recruiters, and instructors.

--------------------------------------------------
PERSISTENT STORAGE FEATURES
--------------------------------------------------

This project implements browser storage using both
localStorage and sessionStorage.

localStorage is used for:

- Dark mode preference persistence
- Welcome modal persistence

sessionStorage is used for:

- Storing project object data
- Maintaining project information during the browser session

Project data is converted into JSON format using:

JSON.stringify()

Stored project data is retrieved and parsed using:

JSON.parse()

--------------------------------------------------
DYNAMIC PROJECT RENDERING
--------------------------------------------------

The project section is generated dynamically using
JavaScript.

Three custom project objects are created containing:

- Project Title
- Project Summary
- Project Image URL
- Repository Link

The objects are stored inside an array and rendered to the
page dynamically using:

- document.createElement()
- appendChild()
- querySelector()
- getElementById()

Each project card is automatically displayed inside the
projects container section.

--------------------------------------------------
CONTRIBUTING
--------------------------------------------------

Comments and feedback are appreciated, but I am not
currently accepting external contributions.

--------------------------------------------------
LICENSE
--------------------------------------------------

This project is licensed under the MIT License.

--------------------------------------------------
CONTACT
--------------------------------------------------

Michael Baird

Email:
micbai6305@students.ecpi.edu

Portfolio:
mabaird01.github.io

--------------------------------------------------
SCREENSHOT
--------------------------------------------------

![page snip](<Screenshot 2026-01-24 120141-1.png>)