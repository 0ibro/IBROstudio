// Show current year in footer
document.getElementById("year").textContent = new Date().getFullYear();

// Toggle sidebar on mobile
const menuBtn = document.getElementById("menuBtn");
const sidebar = document.getElementById("sidebar");

menuBtn.addEventListener("click", () => {
  sidebar.style.display = sidebar.style.display === "block" ? "none" : "block";
});
