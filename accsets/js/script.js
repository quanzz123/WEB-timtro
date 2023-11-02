window.addEventListener('scroll', function() {
    var header = document.getElementById('header');
    var menuContainer = document.getElementById('menu-container');
    var headerHeight = header.offsetHeight;

    if (window.scrollY >= headerHeight) {
        menuContainer.classList.add('fixed-menu');
    } else {
        menuContainer.classList.remove('fixed-menu');
    }
});


