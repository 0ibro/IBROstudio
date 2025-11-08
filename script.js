// Показываем текущий год в подвале
document.getElementById("year").textContent = new Date().getFullYear();

// Переключение бокового меню на мобильных
const menuBtn = document.getElementById("menuBtn");
const sidebar = document.getElementById("sidebar");

menuBtn.addEventListener("click", () => {
  sidebar.style.display = sidebar.style.display === "block" ? "none" : "block";
});

// 🔹 Подсветка активной кнопки в сайдбаре
document.querySelectorAll('.sidebar nav a').forEach(link => {
  if (link.href === window.location.href) {
    link.classList.add('active');
  }
});

