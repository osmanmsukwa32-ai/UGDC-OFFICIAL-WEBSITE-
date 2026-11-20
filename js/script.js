
// UGDC WEBSITE JAVASCRIPT

// Automatic copyright year

const year = document.getElementById("year");

if (year) {
    year.textContent = new Date().getFullYear();
}

console.log("UGDC Website Loaded Successfully!");

// UGDC MOBILE NAVIGATION

const menuToggle = document.getElementById("menuToggle");
const navMenu = document.getElementById("navMenu");

if (menuToggle && navMenu) {

    menuToggle.addEventListener("click", function() {

        navMenu.classList.toggle("active");

    });

}

const contactForm = document.getElementById("contactForm");
const formMessage = document.getElementById("formMessage");

if (contactForm && formMessage) {
    contactForm.addEventListener("submit", function(event) {
        event.preventDefault();

        formMessage.textContent =
            "Demo only: This form is not connected to a message service yet.";
    });
}
