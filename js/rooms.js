document.getElementById('bookingForm').addEventListener('submit', function(event) {
    let valid = true;
    let formData = '';

    // Name validation
    const name = document.getElementById('name').value;
    if (name.trim() === '') {
        valid = false;
        alert('Name is required');
    } else {
        formData += `Name: ${name}\n`;
    }

    // Email validation
    const email = document.getElementById('email').value;
    if (email.trim() === '') {
        valid = false;
        alert('Email is required');
    } else {
        const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailPattern.test(email)) {
            valid = false;
            alert('Please enter a valid email address');
        } else {
            formData += `Email: ${email}\n`;
        }
    }

    // Phone validation
    const phone = document.getElementById('phone').value;
    if (phone.trim() === '') {
        valid = false;
        alert('Phone number is required');
    } else {
        const phonePattern = /^[0-9]{10}$/;
        if (!phonePattern.test(phone)) {
            alert('Please enter a valid 10-digit phone number');
            valid = false;
        } else {
            formData += `Phone: ${phone}\n`;
        }
    }

    // Check-in and check-out date validation
    const checkin = document.getElementById('checkin').value;
    const checkout = document.getElementById('checkout').value;
    if (checkin.trim() === '' || checkout.trim() === '') {
        valid = false;
        alert('Check-in and check-out dates are required');
    } else if (new Date(checkin) >= new Date(checkout)) {
        valid = false;
        alert('Check-out date must be later than check-in date');
    } else {
        formData += `Check-in Date: ${checkin}\n`;
        formData += `Check-out Date: ${checkout}\n`;
    }

    // Room Type
    const roomType = document.getElementById('roomType').value;
    formData += `Room Type: ${roomType}\n`;

    // Number of Adults
    const adults = document.getElementById('adults').value;
    formData += `Number of Adults: ${adults}\n`;

    // Number of Children
    const children = document.getElementById('children').value;
    formData += `Number of Children: ${children}\n`;

    if (valid) {
        // Show form data in an alert box for testing
        alert(`Form Data:\n${formData}`);
    } else {
        event.preventDefault();
    }
});
