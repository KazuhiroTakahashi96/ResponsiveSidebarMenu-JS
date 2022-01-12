const toggleBtn = document.querySelector(".toggle-btn");
const mainHeader = document.querySelector(".main-header");
const overLay = document.querySelector(".overlay");

toggleBtn.addEventListener("click", function () {
  toggleBtn.classList.toggle("open");
  mainHeader.classList.toggle("open");
  overLay.classList.toggle("open");
});
