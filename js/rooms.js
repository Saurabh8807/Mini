document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('bookingForm');

    form.addEventListener('submit', function(event) {
        event.preventDefault();
        let valid = true;

        // Name validation
        const name = document.getElementById('name').value;
        const nameError = document.getElementById('nameError');
        if (name.trim() === '') {
            nameError.style.display = 'inline';
            valid = false;
        } else {
            nameError.style.display = 'none';
        }
        const email = document.getElementById('email').value;
        const emailError = document.getElementById('emailError');
        const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (email.trim() === '' || !emailPattern.test(email)) {
            emailError.style.display = 'inline';
            valid = false;
        } else {
            emailError.style.display = 'none';
        }

        const phone = document.getElementById('phone').value;
        const phoneError = document.getElementById('phoneError');
        const phonePattern = /^[0-9]{10}$/;
        if (phone.trim() === '' || !phonePattern.test(phone)) {
            phoneError.style.display = 'inline';
            valid = false;
        } else {
            phoneError.style.display = 'none';
        }

        const checkin = document.getElementById('checkin').value;
        const checkout = document.getElementById('checkout').value;
        const checkinError = document.getElementById('checkinError');
        const checkoutError = document.getElementById('checkoutError');
        if (checkin.trim() === '') {
            checkinError.style.display = 'inline';
            valid = false;
        } else {
            checkinError.style.display = 'none';
        }
        if (checkout.trim() === '') {
            checkoutError.style.display = 'inline';
            valid = false;
        } else if (new Date(checkin) >= new Date(checkout)) {
            checkoutError.textContent = 'Check-out date must be later than check-in date';
            checkoutError.style.display = 'inline';
            valid = false;
        } else {
            checkoutError.style.display = 'none';
        }

        const roomType = document.getElementById('roomType').value;
        const roomTypeError = document.getElementById('roomTypeError');
        if (roomType === '') {
            roomTypeError.style.display = 'inline';
            valid = false;
        } else {
            roomTypeError.style.display = 'none';
        }

        const adults = document.getElementById('adults').value;
        const adultsError = document.getElementById('adultsError');
        if (adults.trim() === '') {
            adultsError.style.display = 'inline';
            valid = false;
        } else {
            adultsError.style.display = 'none';
        }

        const children = document.getElementById('children').value;
        const childrenError = document.getElementById('childrenError');
        if (children.trim() === '' && adults.trim() !== '') {
            childrenError.style.display = 'inline';
            valid = false;
        } else {
            childrenError.style.display = 'none';
        }

        if (valid) {
            let formData = `Name: ${name}\nEmail: ${email}\nPhone: ${phone}\nCheck-in Date: ${checkin}\nCheck-out Date: ${checkout}\nRoom Type: ${roomType}\nNumber of Adults: ${adults}\nNumber of Children: ${children}`;
            alert(`Form Data:\n${formData}`);
  
        }
    });
});
