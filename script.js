function toggleMenu() {
    const navLinks = document.querySelector('.nav-links');
    const overlay = document.getElementById('overlay');
    navLinks.classList.toggle('active');
    overlay.classList.toggle('active');
}
