let mainNav = document.getElementById('js-menu');
let navBarToggle = document.getElementById('hamburger');

navBarToggle.addEventListener('click', function () {
    
    mainNav.classList.toggle('active');
});