document.addEventListener("DOMContentLoaded", function() {
    const dropdownToggles = document.querySelectorAll('.dropdown-toggle');
    const dropdownContents = document.querySelectorAll('.dropdown-content');
    const hamburger = document.getElementById('hamburger');
    const navbarMenu = document.getElementById('navbar-menu');

    // Toggle dropdown on button click
    dropdownToggles.forEach((toggle) => {
        toggle.addEventListener('click', function(event) {
            event.stopPropagation(); // Prevent click event from bubbling up
            const dropdownContent = this.nextElementSibling;
            dropdownContent.classList.toggle('show');
        });
    });

    // Toggle hamburger menu
    hamburger.addEventListener('click', function(event) {
        event.stopPropagation(); // Prevent click event from bubbling up
        navbarMenu.classList.toggle('show');
    });

    // Close dropdowns if clicked outside
    document.addEventListener('click', function() {
        dropdownContents.forEach((content) => {
            if (content.classList.contains('show')) {
                content.classList.remove('show');
            }
        });
        // Close the hamburger menu if it's open
        if (navbarMenu.classList.contains('show')) {
            navbarMenu.classList.remove('show');
        }
    });
});