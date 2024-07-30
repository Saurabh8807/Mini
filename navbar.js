document.addEventListener("DOMContentLoaded", function () {
    const navbarHTML = `
        <div class="header">
            <div class="container">
                <div class="logo_section">
                    <div class="logo">
                        <a href="index.html"><img src="images/logo.png" alt="Logo"></a>
                    </div>
                </div>
                <nav class="navigation">
                    <div class="nav-toggle" id="nav-toggle">&#9776;</div>
                    <div id="navbar"></div>
                </nav>
            </div>
        </div>
    `;

    const header = document.querySelector('header');
    header.innerHTML = navbarHTML;

    const navbar = document.getElementById('navbar');

    const navItems = [
        { name: 'Home', href: './index.html' },
        { name: 'About', href: './about.html' },
        { name: 'Rooms', href: './rooms.html' },
        { name: 'Restaurant', href: './resto.html' },
        { name: 'Contact', href: './contact.html' },
    ];

    const ul = document.createElement('ul');
    ul.className = 'nav-list';

    navItems.forEach(item => {
        const li = document.createElement('li');
        li.className = 'nav-item';
        const a = document.createElement('a');
        a.className = 'nav-link';
        a.textContent = item.name;
        a.href = item.href;
        li.appendChild(a);
        ul.appendChild(li);
    });

    navbar.appendChild(ul);

    const navToggle = document.getElementById('nav-toggle');
    navToggle.addEventListener('click', () => {
        ul.classList.toggle('active');
    });
});

document.addEventListener('DOMContentLoaded', function() {
    const footerHTML = `
        <div class="footer-container">
            <div class="footer-content">
                <div class="footer-section about">
                    <h3>About Us</h3>
                    <p>Sahyadri hotel.</p>
                </div>
                <div class="footer-section links">
                    <h3>Quick Links</h3>
                    <ul>
                        <li><a href="index.html">Home</a></li>
                        <li><a href="about.html">About</a></li>
                        <li><a href="rooms.html">Our Rooms</a></li>
                        <li><a href="resto.html">Restaurant</a></li>
                        <li><a href="contact.html">Contact Us</a></li>
                    </ul>
                </div>
                <div class="footer-section contact">
                    <h3>Contact Us</h3>
                    <p>Email: contact@example.com</p>
                    <p>Phone: (123) 456-7890</p>
                </div>
            </div>
            
        </div>
    `;

    const footer = document.querySelector('footer');
    footer.innerHTML = footerHTML;
});
