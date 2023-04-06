const sections = document.querySelectorAll("section");
const navLi = document.querySelectorAll("nav .container ul li");
window.addEventListener("scroll", () => {
  let current = "";
  sections.forEach((section) => {
    const sectionTop = section.offsetTop;// getting the top position of every section
   // console.log(sectionTop)
    const sectionHeight = section.clientHeight;
    console.log(sectionHeight)
    // pageYOffste == scrollY both are same bur pageYOffset has more browser support than scrollY
    if (pageYOffset >= sectionTop - sectionHeight / 3) {//1/3 one third if i scroll this section
      current = section.getAttribute("id");
      console.log(current)
    }
  });

  navLi.forEach((li) => {
    li.classList.remove("active");
    if (li.classList.contains(current)) {
      li.classList.add("active");
    }
  });
});

