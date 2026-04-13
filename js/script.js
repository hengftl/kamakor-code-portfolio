// Scroll reveal
const reveals = document.querySelectorAll('.reveal');
const io = new IntersectionObserver((entries) => {
    entries.forEach((e, i) => {
        if (e.isIntersecting) {
            e.target.style.transitionDelay = (i * 0.05) + 's';
            e.target.classList.add('visible');
            io.unobserve(e.target);
        }
    });
}, { threshold: 0.1 });
reveals.forEach(el => io.observe(el));