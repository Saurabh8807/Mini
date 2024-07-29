document.getElementById('contactForm').addEventListener('submit', function(event) {
    event.preventDefault();
    
    // Get form data
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;
    
    // Display the information in an alert
    alert(`Name: ${name}\nEmail: ${email}\nMessage: ${message}`);
});
