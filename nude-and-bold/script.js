document.addEventListener('DOMContentLoaded', () => {
    // Обработка на контактната форма
    const contactForm = document.getElementById('contactForm');
    
    if (contactForm) {
        contactForm.addEventListener('submit', (e) => {
            e.preventDefault();
            alert('Благодарим ви за съобщението! Nude & Bold ще се свърже с вас възможно най-скоро.');
            contactForm.reset();
        });
    }

    // Добавяне на сянка на навигацията при скролиране
    const navbar = document.querySelector('.navbar');
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            navbar.style.boxShadow = '0 10px 30px rgba(0, 0, 0, 0.05)';
        } else {
            navbar.style.boxShadow = 'none';
        }
    });
});