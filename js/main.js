/**
 * Main JavaScript file for the portfolio website
 */

// Publications toggle functionality
document.addEventListener('DOMContentLoaded', function() {
    const viewMoreBtn = document.getElementById('view-more-publications-btn');
    const hiddenPublications = document.getElementById('hidden-publications');
    
    // Ensure publications are hidden on initial page load
    if (hiddenPublications) {
        hiddenPublications.style.display = 'none';
    }
    
    // Add click event listener for the view more button
    if (viewMoreBtn && hiddenPublications) {
        viewMoreBtn.addEventListener('click', function() {
            // Toggle visibility of hidden publications
            if (hiddenPublications.style.display === 'none') {
                // Show hidden publications
                hiddenPublications.style.display = 'grid'; // Use grid to maintain layout
                viewMoreBtn.textContent = 'Show Less';
            } else {
                // Hide publications
                hiddenPublications.style.display = 'none';
                viewMoreBtn.textContent = 'View More Publications';
            }
        });
    }
});

// Add scrolling effect to navbar
window.addEventListener('scroll', function() {
    const navbar = document.querySelector('.navbar');
    if (window.scrollY > 50) {
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }
});

// Smooth scrolling for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        
        const targetId = this.getAttribute('href');
        const targetElement = document.querySelector(targetId);
        
        if (targetElement) {
            window.scrollTo({
                top: targetElement.offsetTop - 70, // Adjust for navbar height
                behavior: 'smooth'
            });
        }
    });
});

// Initialize any components when the DOM is fully loaded
document.addEventListener('DOMContentLoaded', function() {
    console.log('Portfolio website loaded successfully!');
});