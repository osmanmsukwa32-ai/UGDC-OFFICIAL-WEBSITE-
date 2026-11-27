
// UGDC WEBSITE JAVASCRIPT

// Automatic copyright year

const year = document.getElementById("year");

if (year) {
    year.textContent = new Date().getFullYear();
}

console.log("UGDC Website Loaded Successfully!");


// UGDC NAVIGATION MENU

document.addEventListener("DOMContentLoaded", function () {

    const menuToggle = document.getElementById("menuToggle");
    const navMenu = document.getElementById("navMenu");

    if (!menuToggle || !navMenu) return;

    menuToggle.addEventListener("click", function () {

        const isOpen = navMenu.classList.toggle("active");

        menuToggle.setAttribute(
            "aria-expanded",
            isOpen
        );

        menuToggle.innerHTML = isOpen ? "✕" : "☰";

    });

    navMenu.querySelectorAll("a").forEach(function(link) {

        link.addEventListener("click", function() {

            navMenu.classList.remove("active");

            menuToggle.setAttribute(
                "aria-expanded",
                "false"
            );

            menuToggle.innerHTML = "☰";

        });

    });

});


// UGDC WHATSAPP LINKS

document.querySelectorAll(".whatsapp-link").forEach(function(link) {

    link.addEventListener("click", function(event) {

        event.preventDefault();

        const phone = link.dataset.phone;

        if (phone) {
            window.open(
                "https://wa.me/" + phone,
                "_blank"
            );
        }

    });

});


// UGDC PROFESSIONAL CONTACT FORM

const contactForm = document.getElementById("contactForm");

if (contactForm) {

    contactForm.addEventListener("submit", function(event) {

        event.preventDefault();

        const name = document.getElementById("name").value.trim();
        const email = document.getElementById("email").value.trim();
        const subject = document.getElementById("subject").value.trim();
        const message = document.getElementById("message").value.trim();

        const formMessage = document.getElementById("formMessage");

        // VALIDATION

        if (!name || !email || !subject || !message) {

            formMessage.textContent =
                "Please complete all fields before submitting.";

            return;
        }

        if (!document.getElementById("email").checkValidity()) {

            formMessage.textContent =
                "Please enter a valid email address.";

            return;
        }

        // PREPARE WHATSAPP MESSAGE

        const whatsappMessage =
            "UGDC CUSTOMER INQUIRY\n\n" +
            "Name: " + name + "\n" +
            "Email: " + email + "\n" +
            "Subject: " + subject + "\n" +
            "Message: " + message;

        const whatsappURL =
            "https://wa.me/265893174654?text=" +
            encodeURIComponent(whatsappMessage);

        // OPEN WHATSAPP

        const whatsappWindow = window.open(
            whatsappURL,
            "_blank"
        );

        if (whatsappWindow) {

            formMessage.textContent =
                "Your inquiry is ready! Please press SEND in WhatsApp to complete submission.";

        } else {

            formMessage.textContent =
                "Please allow pop-ups in your browser to open WhatsApp.";

        }

    });

}
