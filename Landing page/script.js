// Mobile Navigation Toggle
const hamburger = document.getElementById('hamburger');
const navLinks = document.getElementById('navLinks');

hamburger.addEventListener('click', () => {
    navLinks.classList.toggle('active');
});

// Close mobile menu when clicking on a link
document.querySelectorAll('.nav-links a').forEach(link => {
    link.addEventListener('click', () => {
        navLinks.classList.remove('active');
    });
});

// Navbar scroll effect
window.addEventListener('scroll', () => {
    const navbar = document.getElementById('navbar');
    if (window.scrollY > 50) {
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }
});

// Active navigation link based on scroll position
window.addEventListener('scroll', () => {
    const sections = document.querySelectorAll('section');
    const navLinks = document.querySelectorAll('.nav-links a');
    
    let current = '';
    
    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;
        
        if (scrollY >= (sectionTop - 100)) {
            current = section.getAttribute('id');
        }
    });
    
    navLinks.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href').slice(1) === current) {
            link.classList.add('active');
        }
    });
});

// Animate skill bars when they come into view
const skillBars = document.querySelectorAll('.skill-progress-bar');

const animateSkillBars = () => {
    skillBars.forEach(skillBar => {
        const skillLevel = skillBar.getAttribute('data-skill');
        const rect = skillBar.getBoundingClientRect();
        
        if (rect.top <= window.innerHeight && rect.bottom >= 0 && skillBar.style.width === '') {
            skillBar.style.width = skillLevel + '%';
        }
    });
};

window.addEventListener('scroll', animateSkillBars);

// Form submission
document.getElementById('contactForm').addEventListener('submit', (e) => {
    e.preventDefault();
    
    // Get form values
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const subject = document.getElementById('subject').value;
    const message = document.getElementById('message').value;
    
    alert(`Thank you for your message, ${name}! I'll get back to you soon.`);
    
    // Reset the form
    document.getElementById('contactForm').reset();
});

// Typing effect
const typingElement = document.querySelector('.typing-effect');
const text = typingElement.textContent;
typingElement.textContent = '';
let i = 0;

function typeWriter() {
    if (i < text.length) {
        typingElement.textContent += text.charAt(i);
        i++;
        setTimeout(typeWriter, 100);
    }
}

// Start the typing effect when the page loads
window.addEventListener('load', typeWriter);