const menu = document.querySelector(".menu");
const hamburger = document.querySelector(".hamburger");
const close_btn = document.querySelector(".close");
const submenu_btns = document.querySelectorAll(".btn-menu");
const submenu_links = document.querySelectorAll(".links-container");
const nav = document.querySelector("nav");

const submenu_list = ["product", "company", "connect"];

submenu_btns.forEach((btn, index) => {
  btn.addEventListener("click", () => {
    btn.classList.toggle("active");
    const submenu = submenu_list[index];
    document.getElementById(`${submenu}`).classList.toggle("active");
    btn.querySelector(".arrow").classList.toggle("open");
  });
});

menu.addEventListener("click", () => {
  menu.classList.toggle("open");
  nav.classList.toggle("open");
  if (menu.classList.contains("open")) {
    hamburger.style.display = "none";
    close_btn.style.display = "block";
  } else {
    hamburger.style.display = "block";
    close_btn.style.display = "none";
    submenu_btns.forEach((btn, index) => {
      if (btn.classList.contains("active")) {
        btn.classList.remove("active");
        const submenu = submenu_list[index];
        document.getElementById(`${submenu}`).classList.remove("active");
      }
    });
  }
});
