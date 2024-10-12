// Function to show and hide sections
function showSection(section) {
    // Hide all sections
    document.getElementById('home').style.display = 'none';
    document.getElementById('job-listings').style.display = 'none';
    document.getElementById('applied-saved').style.display = 'none';
    document.getElementById('profile').style.display = 'none';

    // Show the selected section
    document.getElementById(section).style.display = 'block';
}

// Theme toggle function
const themeToggle = document.getElementById('themeToggle');
themeToggle.addEventListener('click', () => {
    document.body.classList.toggle('light-mode');
    
    // Toggle light-mode class for all relevant elements
    const navbar = document.querySelector('.navbar');
    const jobCards = document.querySelectorAll('.job-card');
    const inputs = document.querySelectorAll('input');
    const formLabels = document.querySelectorAll('.form-label');
    const headings = document.querySelectorAll('h3, h5, h6');
    const saveButtons = document.querySelectorAll('.save-btn');
    const navLinks = document.querySelectorAll('.nav-link');
    
    navbar.classList.toggle('light-mode');
    
    jobCards.forEach((card) => {
        card.classList.toggle('light-mode');
    });

    inputs.forEach((input) => {
        input.classList.toggle('light-mode');
    });

    formLabels.forEach((label) => {
        label.classList.toggle('light-mode');
    });

    headings.forEach((heading) => {
        heading.classList.toggle('light-mode');
    });

    saveButtons.forEach((saveButton) => {
        saveButton.classList.toggle('light-mode');
    });

    navLinks.forEach((navLink) => {
        navLink.classList.toggle('light-mode');
    });
});

// Initially show the Home section
showSection('home');
