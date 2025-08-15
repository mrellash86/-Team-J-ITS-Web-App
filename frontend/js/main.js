/**
 * Main JavaScript file for Team J IT Services website
 */

document.addEventListener('DOMContentLoaded', function() {
    // Initialize components
    initContactForm();
    fetchVisitorCount();
    
    // Smooth scrolling for navigation links
    document.querySelectorAll('nav a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            
            const targetId = this.getAttribute('href');
            const targetElement = document.querySelector(targetId);
            
            if (targetElement) {
                window.scrollTo({
                    top: targetElement.offsetTop - 70, // Offset for header
                    behavior: 'smooth'
                });
            }
        });
    });
});

/**
 * Initialize contact form submission handling
 */
function initContactForm() {
    const contactForm = document.getElementById('contact-form');
    
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            // Get form data
            const formData = {
                name: document.getElementById('name').value,
                email: document.getElementById('email').value,
                message: document.getElementById('message').value
            };
            
            // In a real application, you would send this data to your backend
            console.log('Form data:', formData);
            
            // Show submission confirmation
            alert('Thank you for your message! We will get back to you soon.');
            contactForm.reset();
        });
    }
}

/**
 * Fetch visitor count from API
 */
function fetchVisitorCount() {
    const countElement = document.getElementById('count');
    
    if (countElement) {
        // In a real application, replace this URL with your actual API endpoint
        const apiUrl = 'https://api.example.com/visitor-count';
        
        // For demonstration, we'll use a mock count
        // In production, uncomment the fetch code below and use your actual API
        
        // Mock implementation
        let visitorCount = Math.floor(Math.random() * 1000) + 500;
        countElement.textContent = visitorCount.toString();
        
        /* 
        // Actual API implementation (uncomment in production)
        fetch(apiUrl)
            .then(response => {
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }
                return response.json();
            })
            .then(data => {
                countElement.textContent = data.count.toString();
            })
            .catch(error => {
                console.error('Error fetching visitor count:', error);
                countElement.textContent = 'Error loading count';
            });
        */
    }
}
