document.addEventListener('DOMContentLoaded', function() {
    const scrollableDiv = document.getElementById('scrollableDiv');

    // Проверяем, есть ли у элемента полоса прокрутки по вертикали
    const hasVerticalScrollbar = scrollableDiv.scrollHeight > scrollableDiv.clientHeight;

    if (hasVerticalScrollbar) {
        scrollableDiv.addEventListener('wheel', function(event) {
            event.preventDefault(); // Предотвращаем стандартное поведение скролла

            // Получаем текущую позицию скролла
            const currentScroll = scrollableDiv.scrollTop;
            // Получаем значение прокрутки из события
            const delta = event.deltaY;

            // Уменьшаем скорость скролла, деля значение на 2 (или другое значение)
            const scrollStep = delta / 0.2; // Измените 2 на другое число для большей или меньшей скорости

            // Обновляем позицию скролла
            scrollableDiv.scrollTo({
                top: currentScroll + scrollStep,
                behavior: 'smooth' // Плавный скролл
            });
        }, { passive: false }); // Необходимо для предотвращения стандартного поведения
    }
});