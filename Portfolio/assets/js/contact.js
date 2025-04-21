document.querySelector('.hamburger').addEventListener('click', function() {
    document.querySelector('.mobile-menu').classList.toggle('active');
});

document.getElementById('contactForm').addEventListener('submit', function(event) {
    let valid = true;
    const fullName = document.getElementById('fullName');
    const email = document.getElementById('email');
    const message = document.getElementById('message');
    
    if (!fullName.value.trim()) {
        valid = false;
        fullName.classList.add('invalid');
    }
    if (!email.value.trim() || !email.value.includes('@')) {
        valid = false;
        email.classList.add('invalid');
    }
    if (!message.value.trim()) {
        valid = false;
        message.classList.add('invalid');
    }
    if (!valid) {
        event.preventDefault();
    }
    }
);
