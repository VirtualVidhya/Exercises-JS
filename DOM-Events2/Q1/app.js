let menu = document.querySelector('.menu');

document.addEventListener('keydown', function(event) {
    if (event.code == "Escape") {
        menu.classList.toggle('menu-hidden');
    }
});