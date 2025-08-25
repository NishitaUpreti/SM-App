document.addEventListener('DOMContentLoaded', () => {
    // Get the hamburger button and mobile menu elements
    const hamburgerBtn = document.getElementById('hamburger-btn');
    const mobileMenu = document.querySelector('.mobile-menu');
    const closeMenuBtn = document.getElementById('close-menu-btn');

    // Add event listener to open the mobile menu
    if (hamburgerBtn) {
        hamburgerBtn.addEventListener('click', () => {
            mobileMenu.classList.add('active');
        });
    }

    // Add event listener to close the mobile menu
    if (closeMenuBtn) {
        closeMenuBtn.addEventListener('click', () => {
            mobileMenu.classList.remove('active');
        });
    }

    // Dark Mode Toggle
    const darkModeToggle = document.getElementById('dark-mode-toggle');
    const htmlElement = document.documentElement;

    // Set initial state based on current theme
    if (htmlElement.getAttribute('data-theme') === 'dark') {
        darkModeToggle.classList.add('active');
    }

    // Add event listener to the dark mode toggle button
    if (darkModeToggle) {
        darkModeToggle.addEventListener('click', () => {
            if (htmlElement.getAttribute('data-theme') === 'dark') {
                htmlElement.setAttribute('data-theme', 'light');
                darkModeToggle.classList.remove('active');
            } else {
                htmlElement.setAttribute('data-theme', 'dark');
                darkModeToggle.classList.add('active');
            }
        });
    }
});