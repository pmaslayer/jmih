let scrollPosition = 0;
const svgElement = document.querySelector("svg");
const initialTop = parseInt(svgElement.style.top || 0);

window.addEventListener("scroll", () => {
  const currentScrollPosition = window.pageYOffset;

  // Устанавливаем новое значение transform, основываясь на текущей позиции прокрутки
  svgElement.style.transform = `translateY(${currentScrollPosition * 0.3}px)`;
});
