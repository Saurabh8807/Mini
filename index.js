document.getElementById('nav-toggle').addEventListener('click', function() {
    var navList = document.getElementById('nav-list');
    if (navList.style.display === 'block') {
        navList.style.display = 'none';
    } else {
        navList.style.display = 'block';
    }
});

// let currentSlide = 0;
// const slides = document.querySelectorAll('.carousel-item');
// const totalSlides = slides.length;

// document.getElementById('next').addEventListener('click', () => {
//     moveToNextSlide();
// });

// document.getElementById('prev').addEventListener('click', () => {
//     moveToPrevSlide();
// });

// function updateSlidePosition() {
//     slides.forEach((slide, index) => {
//         slide.style.transform = `translateX(-${currentSlide * 100}%)`;
//     });
// }

// function moveToNextSlide() {
//     if (currentSlide === totalSlides - 1) {
//         currentSlide = 0;
//     } else {
//         currentSlide++;
//     }
//     updateSlidePosition();
// }

// function moveToPrevSlide() {
//     if (currentSlide === 0) {
//         currentSlide = totalSlides - 1;
//     } else {
//         currentSlide--;
//     }
//     updateSlidePosition();
// }

document.addEventListener("DOMContentLoaded", function () {
    const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                observer.unobserve(entry.target);
            }
        });
    }, {
        threshold: 0.1
    });

    const row = document.querySelector('.our_room .row');
    observer.observe(row);
});

document.addEventListener("DOMContentLoaded", function () {
    const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                observer.unobserve(entry.target);
            }
        });
    }, {
        threshold: 0.1
    });

    const galleryContent = document.querySelector('.gallery_content');
    observer.observe(galleryContent);
});
// document.addEventListener("DOMContentLoaded", function () {
//     const observer = new IntersectionObserver(entries => {
//         entries.forEach(entry => {
//             if (entry.isIntersecting) {
//                 entry.target.classList.add('visible');
//                 observer.unobserve(entry.target);
//             }
//         });
//     }, {
//         threshold: 0.1
//     });

//     const blogBoxes = document.querySelectorAll('.blog_box');
//     blogBoxes.forEach(box => {
//         observer.observe(box);
//     });
// });
