const toggleNav = () => {
  const navIcon = document.querySelector(".nav-icon");
  const navList = document.querySelector(".navigation");

  navIcon.addEventListener("click", () => {
    navList.classList.toggle("active");
  });
};
