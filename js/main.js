/**
 * Main JavaScript file for the portfolio website
 */

// Toggle hidden publications
function togglePublications() {
    const hiddenPublications = document.getElementById('hidden-publications');
    const viewMoreBtn = document.getElementById('view-more-btn');
    
    if (hiddenPublications.classList.contains('hidden')) {
        hiddenPublications.classList.remove('hidden');
        viewMoreBtn.textContent = 'Show Less';
    } else {
        hiddenPublications.classList.add('hidden');
        viewMoreBtn.textContent = 'View More Publications';
    }
}

// Add scrolling effect to navbar
window.addEventListener('scroll', function() {
    const navbar = document.querySelector('.navbar');
    if (window.scrollY > 50) {
        navbar.style.backgroundColor = 'rgba(30, 33, 36, 0.98)';
        navbar.style.boxShadow = '0 2px 10px rgba(0, 0, 0, 0.3)';
    } else {
        navbar.style.backgroundColor = 'var(--primary-dark)';
        navbar.style.boxShadow = 'none';
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