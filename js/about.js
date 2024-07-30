document.addEventListener("DOMContentLoaded", function () {
    const title = document.querySelector('.card-title1');
    title.style.transform = 'translateX(-100%)';
    setTimeout(() => {
        title.style.transform = 'translateX(0)';
    }, 100);
});

const facilities = [
    { src: "images/logos/sea.png", alt: "Sea view", text: "Sea view", height: 55 },
    { src: "images/logos/balcony.png", alt: "Private Balcony", text: "Private Balcony", height: 75, width: 40 },
    { src: "images/logos/socket.png", alt: "Socket near the bed", text: "Socket near the bed", height: 55 },
    { src: "images/logos/living.png", alt: "Living area", text: "Living area", height: 55 },
    { src: "images/logos/tv.png", alt: "Flat-screen TV", text: "Flat-screen TV", height: 45 },
    { src: "images/logos/cable.png", alt: "Cable channels", text: "Cable channels", height: 55 },
    { src: "images/logos/satellite.png", alt: "Satellite channels", text: "Satellite channels", height: 45 },
    { src: "images/logos/phone.png", alt: "Telephone", text: "Telephone", height: 50 },
    { src: "images/logos/luggage.png", alt: "Luggage Storage", text: "Luggage Storage", height: 55 },
    { src: "images/logos/alarm.png", alt: "Wake-up service", text: "Wake-up service", height: 55 },
    { src: "images/logos/currency.png", alt: "Currency exchange", text: "Currency exchange", height: 55 },
    { src: "images/logos/security.png", alt: "24 Hour Security", text: "24 Hour Security", height: 65 },
    { src: "images/logos/marbel.png", alt: "Tile/marble floor", text: "Tile/marble floor", height: 55 },
    { src: "images/logos/staff.png", alt: "Multilingual Staff", text: "Multilingual Staff", height: 55 },
    { src: "images/logos/accessibility.png", alt: "Accessibility", text: "Accessibility", height: 55 },
    { src: "images/logos/laundry.png", alt: "Laundry Service", text: "Laundry Service", height: 75 }
];

const facilityList = document.getElementById('facilityList');

facilities.forEach(facility => {
    const facilityDiv = document.createElement('div');
    facilityDiv.className = 'facility';

    const img = document.createElement('img');
    img.src = facility.src;
    img.alt = facility.alt;
    img.height = facility.height;
    if (facility.width) img.width = facility.width;
    facilityDiv.appendChild(img);

    const p = document.createElement('p');
    p.textContent = facility.text;
    facilityDiv.appendChild(p);

    facilityList.appendChild(facilityDiv);
});
