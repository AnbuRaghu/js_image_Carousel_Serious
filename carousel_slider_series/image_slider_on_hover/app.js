const currentImage = document.querySelector(".currentImage");
const imageDesc = document.querySelector(".imageDesc");

currentImage.src = document.querySelector(".active").src;
imageDesc.innerHTML = document.querySelector(".active").alt;

const imageGrids = document.querySelectorAll(".imageGrid");
imageGrids.forEach((imageGrid) => {
  imageGrid.addEventListener("click", () => {
    document.querySelector(".active").classList.remove("active");
    imageGrid.classList.add("active");

    currentImage.src = document.querySelector(".active").src;
    imageDesc.innerHTML = document.querySelector(".active").alt;
  });
});