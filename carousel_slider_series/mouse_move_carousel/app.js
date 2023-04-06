const cardContainer = document.querySelector('.card-container');

let moving = false;
let mouseLastPosition = 0;
let transform = 0;
let lastPageX = 0;
let transformValue = 0;
window.addEventListener('mousedown', (e) => {
  moving = true;
  mouseLastPosition = e.pageX;
  console.log(window.getComputedStyle(cardContainer).getPropertyValue('transform'))
  transform = window.getComputedStyle(cardContainer)
  .getPropertyValue('transform') !== 'none'
  ? window.getComputedStyle(cardContainer)
  .getPropertyValue('transform').split(',')[4].trim()
  : 0;
  console.log(transform);
});

window.addEventListener('mousemove', (e) => {
  if (moving) {
   const diffX =  e.pageX - mouseLastPosition;
   if (e.pageX - lastPageX > 0) {
     if (transformValue > 0) {
       return;
     }
   } else {
     if (Math.abs(transformValue) > cardContainer.offsetWidth - 320) {
       return;
     }
   }
    transformValue = parseInt(transform) + diffX;
    cardContainer.style.transform = `translateX(${transformValue}px)`;
  }
  lastPageX = e.pageX;
})

window.addEventListener('mouseup', () => {
  moving = false;
});