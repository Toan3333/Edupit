let bar = document.querySelector("#side-bar");
let barmenu = document.querySelector("#menu-mobile");

bar.addEventListener("click", function () {
  barmenu.classList.toggle("active");
});
