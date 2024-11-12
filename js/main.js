document.addEventListener("DOMContentLoaded", function () {
  const buttons = document.querySelectorAll(".services__button");
  const fullscreen = document.querySelector(".fullscreen");
  const serviceBlocks = document.querySelectorAll(".services__content");
  const changeText = document.querySelector(".changetext");

  buttons.forEach((button) => {
    button.addEventListener("click", () => {
      // Устанавливаем фоновое изображение и текст
      fullscreen.style.backgroundImage = `url(${button.getAttribute(
        "data-bg"
      )})`;
      fullscreen.classList.add("fullscreen-white");
      changeText.textContent = button.textContent;

      // Скрываем все блоки и показываем целевой
      serviceBlocks.forEach((block) => (block.style.display = "none"));
      const targetBlock = document.getElementById(
        button.getAttribute("data-target")
      );
      targetBlock.style.display = "block";

      // Подгоняем размеры и положение целевого блока
      const { width, bottom } = button.getBoundingClientRect();
      targetBlock.style.width = `${width}px`;
      targetBlock.style.height = `${
        bottom - fullscreen.getBoundingClientRect().top
      }px`;
      targetBlock.style.top = "0";
      targetBlock.style.left = `${button.offsetLeft}px`;
    });
  });
});
