document.addEventListener('DOMContentLoaded', function() {
    // Mobile Navigation Toggle
    const hamburger = document.querySelector('.hamburger');
    const navLinks = document.querySelector('.nav-links');

    hamburger.addEventListener('click', () => {
        hamburger.classList.toggle('active');
        navLinks.classList.toggle('active');
    });

    // Smooth Scrolling for Navigation Links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });

    // Event Carousel
    const carousel = document.querySelector('.event-carousel');
    const prevBtn = document.querySelector('.carousel-controls .prev');
    const nextBtn = document.querySelector('.carousel-controls .next');

    prevBtn.addEventListener('click', () => {
        carousel.scrollBy({ left: -300, behavior: 'smooth' });
    });

    nextBtn.addEventListener('click', () => {
        carousel.scrollBy({ left: 300, behavior: 'smooth' });
    });

    // Form Validation
    const ticketForm = document.getElementById('ticket-form');
    ticketForm.addEventListener('submit', function(e) {
        e.preventDefault();
        let isValid = true;

        const name = document.getElementById('name');
        const email = document.getElementById('email');
        const ticketType = document.getElementById('ticket-type');
        const quantity = document.getElementById('quantity');

        if (name.value.trim() === '') {
            isValid = false;
            showError(name, 'Name is required');
        } else {
            clearError(name);
        }

        if (email.value.trim() === '' || !isValidEmail(email.value)) {
            isValid = false;
            showError(email, 'Valid email is required');
        } else {
            clearError(email);
        }

        if (ticketType.value === '') {
            isValid = false;
            showError(ticketType, 'Please select a ticket type');
        } else {
            clearError(ticketType);
        }

        if (quantity.value < 1 || quantity.value > 10) {
            isValid = false;
            showError(quantity, 'Quantity must be between 1 and 10');
        } else {
            clearError(quantity);
        }

        if (isValid) {
            alert('Ticket purchase successful!');
            ticketForm.reset();
        }
    });

    function showError(input, message) {
        const formGroup = input.parentElement;
        const error = formGroup.querySelector('.error-message') || document.createElement('div');
        error.className = 'error-message';
        error.textContent = message;
        if (!formGroup.querySelector('.error-message')) {
            formGroup.appendChild(error);
        }
        input.classList.add('error');
    }

    function clearError(input) {
        const formGroup = input.parentElement;
        const error = formGroup.querySelector('.error-message');
        if (error) {
            formGroup.removeChild(error);
        }
        input.classList.remove('error');
    }

    function isValidEmail(email) {
        const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return re.test(email);
    }

    // Newsletter Form
    const newsletterForm = document.getElementById('newsletter-form');
    newsletterForm.addEventListener('submit', function(e) {
        e.preventDefault();
        const email = newsletterForm.querySelector('input[type="email"]');
        if (isValidEmail(email.value)) {
            alert('Thank you for subscribing to our newsletter!');
            newsletterForm.reset();
        } else {
            alert('Please enter a valid email address.');
        }
    });

    // Animate elements on scroll
    const animateOnScroll = () => {
        const elements = document.querySelectorAll('.animate-on-scroll');
        elements.forEach(element => {
            const elementTop = element.getBoundingClientRect().top;
            const elementBottom = element.getBoundingClientRect().bottom;
            if (elementTop < window.innerHeight && elementBottom > 0) {
                element.classList.add('animate');
            }
        });
    };

    window.addEventListener('scroll', animateOnScroll);
    animateOnScroll();
});