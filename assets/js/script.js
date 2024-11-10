const mobileNavBar = () =>{
    document.querySelector('.mobile-menu').classList.toggle('open')
    document.querySelector('.nav-links').classList.toggle('open')
}

window.addEventListener('scroll', function() {
    const header = document.querySelector('.navbar');
    if (window.scrollY > 50) {
        header.classList.add('scrolled');
    } else {
        header.classList.remove('scrolled');
    }
});
