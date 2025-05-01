// script.js

// Функция для переключения видимости формы
function toggleForm() {
    const form = document.querySelector('.support-form');
    // Меняем класс отображения
    if (form.style.display === 'block') {
      form.style.display = 'none';
    } else {
      form.style.display = 'block';
    }
  }
  