document.addEventListener('DOMContentLoaded', () => {
    const textLayer = document.querySelector('.text-layer');
    
    function animateTextLayer() {
        // Проверка видимости элемента
        if (!isElementInViewport(textLayer)) {
            return;
        }

        const rect = textLayer.getBoundingClientRect();
        
        if (window.innerHeight >= rect.top && window.innerHeight <= rect.bottom) {
            textLayer.style.opacity = '1';
        } else if (window.scrollY + window.innerHeight >= rect.bottom) {
            textLayer.style.animationPlayState = 'running';
        }
    }

    // Функция для проверки видимости элемента
    function isElementInViewport(el) {
        const rect = el.getBoundingClientRect();
        
        return (
            rect.top >= 0 &&
            rect.left >= 0 &&
            rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
            rect.right <= (window.innerWidth || document.documentElement.clientWidth)
        );
    }

    window.addEventListener('scroll', animateTextLayer);
});
