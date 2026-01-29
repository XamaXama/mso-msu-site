// Простой скрипт для плавной прокрутки по якорным ссылкам
document.addEventListener('DOMContentLoaded', function() {
    const anchorLinks = document.querySelectorAll('a[href^="#"]');

    for (let anchor of anchorLinks) {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            if (targetId === '#') return;

            const targetElement = document.querySelector(targetId);
            if (targetElement) {
                window.scrollTo({
                    top: targetElement.offsetTop - 80,
                    behavior: 'smooth'
                });
            }
        });
    }

    // Можно добавить сюда другие простые интерактивные функции
    console.log('Сайт МСО МГУ загружен!');
});
