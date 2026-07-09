document.addEventListener('DOMContentLoaded', function() {
    const heroButton = document.querySelector('.hero button');
    heroButton.addEventListener('click', function() {
        window.location.href = 'https://discord.gg/minecraft';
    });
});

// Add event listener to contact form
const contactForm = document.querySelector('.contact form');
contactForm.addEventListener('submit', function(event) {
    event.preventDefault();
    const formData = new FormData(contactForm);
    // Send form data to server
    console.log(formData);
});
