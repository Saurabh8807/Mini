document.addEventListener("DOMContentLoaded", function () {
    const title = document.querySelector('.card-title1');
    title.style.transform = 'translateX(-100%)';
    setTimeout(() => {
        title.style.transform = 'translateX(0)';
    }, 100);
});
