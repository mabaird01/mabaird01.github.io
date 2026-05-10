/*
    JavaScript Final Project 5.9: Creating Stable Foundations
    Author: Michael Baird
    Date: 5/09/2026
    Filename: script.js
*/

document.addEventListener("DOMContentLoaded", function () {


    // DARK MODE WITH STORAGE

    const toggle = document.getElementById("dark-mode-toggle");
    const savedMode = localStorage.getItem("darkMode");

    if (savedMode === "enabled") {
        document.body.classList.add("dark-mode");
        toggle.checked = true;
    }

    toggle.addEventListener("change", function () {

        if (this.checked) {
            document.body.classList.add("dark-mode");
            localStorage.setItem("darkMode", "enabled");
        }
        else {
            document.body.classList.remove("dark-mode");
            localStorage.setItem("darkMode", "disabled");
        }
    });

  
    // SKILLS LIST

    const skills = [
        "HTML",
        "CSS",
        "JavaScript",
        "Git",
        "GitHub",
        "PKI",
        "Linux",
        "Windows",
        "Python",
        "SQL"
    ];

    const skillsList = document.getElementById("skills-list");

    skills.forEach(skill => {

        const li = document.createElement("li");
        li.textContent = skill;
        skillsList.appendChild(li);

    });


    // PROJECT OBJECTS

    const projectData = [

        {
            title: "JavaScript Final Project",

            summary:
                "Interactive webpage using JavaScript functionality including event handling and DOM manipulation.",

            image:
                "https://cdn-icons-png.flaticon.com/512/5968/5968292.png",

            repository:
                "https://github.com/"
        },

        {
            title: "Web Development Final Project",

            summary:
                "Responsive portfolio website developed using HTML, CSS, and JavaScript.",

            image:
                "https://cdn-icons-png.flaticon.com/512/1055/1055687.png",

            repository:
                "https://github.com/"
        },

        {
            title: "Database Final Project",

            summary:
                "Database solution for tracking and managing digital certificates.",

            image:
                "https://cdn-icons-png.flaticon.com/512/4248/4248443.png",

            repository:
                "https://github.com/"
        }

    ];

  
    // SESSION STORAGE
  
    let projectsArray;

    const storedProjects =
        sessionStorage.getItem("projects");

    if (!storedProjects) {

        sessionStorage.setItem(
            "projects",
            JSON.stringify(projectData)
        );

        projectsArray = projectData;

    }
    else {

        projectsArray = JSON.parse(storedProjects);

    }

  
    // DYNAMIC PROJECT RENDERING
   
    const projectsContainer =
        document.getElementById("projects-container");

    projectsContainer.innerHTML = "";

    projectsArray.forEach(project => {

        const projectCard =
            document.createElement("div");

        projectCard.classList.add("dynamic-project");

        const projectImage =
            document.createElement("img");

        projectImage.src = project.image;
        projectImage.alt = project.title;

        const projectTitle =
            document.createElement("h4");

        projectTitle.textContent = project.title;

        const projectSummary =
            document.createElement("p");

        projectSummary.textContent =
            project.summary;

        const projectLink =
            document.createElement("a");

        projectLink.href = project.repository;

        projectLink.target = "_blank";

        projectLink.textContent =
            "View Repository";

        projectCard.appendChild(projectImage);
        projectCard.appendChild(projectTitle);
        projectCard.appendChild(projectSummary);
        projectCard.appendChild(projectLink);

        projectsContainer.appendChild(projectCard);

    });

   
    // CONTACT FORM
  
    const form = document.getElementById("contact-form");
    const statusMessage =
        document.getElementById("statusMessage");

    form.addEventListener("submit", function (event) {

        event.preventDefault();

        statusMessage.textContent =
            "Sending message...";

        const button =
            form.querySelector("button");

        button.disabled = true;

        setTimeout(() => {

            statusMessage.textContent =
                "Message sent successfully!";

            button.disabled = false;

            form.reset();

        }, 2500);

    });

  
    // MODAL
   
    const modal =
        document.getElementById("welcome-modal");

    const closeBtn =
        document.getElementById("close-modal");

    const hasSeenModal =
        localStorage.getItem("seenModal");

    if (!hasSeenModal) {

        modal.classList.add("show");

    }

    function closeModal() {

        modal.classList.remove("show");

        setTimeout(() => {

            modal.style.display = "none";

        }, 400);

        localStorage.setItem(
            "seenModal",
            "true"
        );
    }

    closeBtn.addEventListener(
        "click",
        closeModal
    );

});