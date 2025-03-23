document.querySelectorAll('.nav-links a').forEach(link => {
    link.addEventListener('click', () => {
        document.querySelector(".dropdown").classList.remove("active");
    });
});
