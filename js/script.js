document.addEventListener('DOMContentLoaded', function() {
    const navToggler = document.querySelector('.nav-toggler');
    const sidebar = document.querySelector('.sidebar');

    // Toggle sidebar when nav-toggler is clicked
    navToggler.addEventListener('click', function(e) {
        e.stopPropagation(); // Prevent event from bubbling
        sidebar.classList.toggle('open');
    });

    // Close sidebar when a nav link is clicked
    const navLinks = document.querySelectorAll('.nav a');
    navLinks.forEach(link => {
        link.addEventListener('click', function() {
            sidebar.classList.remove('open');
        });
    });

    // Close sidebar when clicking outside
    document.addEventListener('click', function(event) {
        if (sidebar.classList.contains('open') && 
            !sidebar.contains(event.target) && 
            !navToggler.contains(event.target)) {
            sidebar.classList.remove('open');
        }
    });

    // Prevent sidebar click from closing it
    sidebar.addEventListener('click', function(e) {
        e.stopPropagation();
    });
});