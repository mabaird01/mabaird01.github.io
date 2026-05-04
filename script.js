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
    const skills = ["HTML", "CSS", "JavaScript", "Git", "GitHub", "PKI", "Linux", "Windows", "Python", "SQL"];
    const skillsList = document.getElementById("skills-list");

    skills.forEach(skill => {
        const li = document.createElement("li");
        li.textContent = skill;
        skillsList.appendChild(li);
    });

    // CONTACT FORM 
    const form = document.getElementById("contact-form");
    const statusMessage = document.getElementById("statusMessage");

    form.addEventListener("submit", function (event) {
        event.preventDefault();

        statusMessage.textContent = "Sending message...";

        const button = form.querySelector("button");
        button.disabled = true;

        setTimeout(() => {
            statusMessage.textContent = "Message sent successfully!";
            button.disabled = false;
            form.reset();
        }, 2500);
    });

    // PROJECT LOGIC 
    const projectItems = document.querySelectorAll("#projects-container .project-item");
    const projectCount = projectItems.length;

    const universityDiv = document.getElementById("university-resources");
    const personalDiv = document.getElementById("personal-projects");

    if (projectCount < 3) {
        universityDiv.style.display = "block";
        personalDiv.style.display = "block";
    } 
    else {
        universityDiv.style.display = "none";
        personalDiv.style.display = "block";
    }

    // MODAL WITH PERSISTENCE 
    const modal = document.getElementById("welcome-modal");
    const closeBtn = document.getElementById("close-modal");

    const hasSeenModal = localStorage.getItem("seenModal");

    if (!hasSeenModal) {
        modal.classList.add("show");
    }

    function closeModal() {
        modal.classList.remove("show");

        setTimeout(() => {
        modal.style.display = "none";
        }, 400);

        localStorage.setItem("seenModal", "true");
    }

    closeBtn.addEventListener("click", closeModal);

    // Close on outside click
    modal.addEventListener("click", function (e) {
        if (e.target === modal) {
        closeModal();
        }
    });

    // Close on ESC key
    document.addEventListener("keydown", function (e) {
        if (e.key === "Escape") {
        closeModal();
        }
    });

    //  NOTIFICATION 
    setTimeout(() => {
        const notification = document.createElement("div");
        notification.textContent = "⚠️ This is a delayed notification message!";

        notification.style.backgroundColor = "#333";
        notification.style.color = "white";
        notification.style.padding = "10px";
        notification.style.position = "fixed";
        notification.style.top = "0";
        notification.style.left = "0";
        notification.style.width = "100%";
        notification.style.zIndex = "1000";

        document.body.prepend(notification);

        setTimeout(() => notification.remove(), 4000);

    }, 2000);

});