document.querySelectorAll('.tech-grid span').forEach(el => {
    el.addEventListener('mouseover', () => {
        el.style.transform = 'scale(1.1)';
        el.style.transition = 'transform 0.2s';
    });
    el.addEventListener('mouseout', () => {
        el.style.transform = 'scale(1)';
    });
});
