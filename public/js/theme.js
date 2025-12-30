// Theme management for the CV website

/**
 * Toggles between dark and light theme
 */
function toggleDarkMode() {
    const html = document.documentElement;
    const themeIcon = document.getElementById('theme-icon');
    
    if (html.classList.contains('dark')) {
        // Switch to light theme
        html.classList.remove('dark');
        document.body.classList.remove('dark');
        localStorage.setItem('theme', 'light');
        if (themeIcon) themeIcon.className = 'fas fa-moon text-lg';
        document.documentElement.style.colorScheme = 'light';
    } else {
        // Switch to dark theme
        html.classList.add('dark');
        document.body.classList.add('dark');
        localStorage.setItem('theme', 'dark');
        if (themeIcon) themeIcon.className = 'fas fa-sun text-lg';
        document.documentElement.style.colorScheme = 'dark';
    }
}

/**
 * Initializes the theme based on user preference or system settings
 */
function initTheme() {
    // Set theme based on saved preference or system preference
    const savedTheme = localStorage.getItem('theme');
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    const html = document.documentElement;
    const themeToggle = document.getElementById('theme-toggle');
    const themeIcon = themeToggle ? themeToggle.querySelector('i') : null;
    
    if (savedTheme === 'dark' || (!savedTheme && prefersDark)) {
        html.classList.add('dark');
        document.body.classList.add('dark');
        if (themeIcon) themeIcon.className = 'fas fa-sun text-lg';
        document.documentElement.style.colorScheme = 'dark';
    } else {
        html.classList.remove('dark');
        document.body.classList.remove('dark');
        if (themeIcon) themeIcon.className = 'fas fa-moon text-lg';
        document.documentElement.style.colorScheme = 'light';
    }
    
    // Add click event to the toggle button
    const toggleButton = document.getElementById('theme-toggle');
    if (toggleButton) {
        toggleButton.addEventListener('click', toggleDarkMode);
    }
}

// Initialize theme when DOM is fully loaded
document.addEventListener('DOMContentLoaded', initTheme);
