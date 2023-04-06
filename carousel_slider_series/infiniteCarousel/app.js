const carousel = document.querySelector('.carousel');
const slider = document.querySelector('.slider');
const next = document.querySelector('.next');
const prev = document.querySelector('.prev');
let direction;
console.log(slider,'slider')

next.addEventListener('click', function() {
    //set the direction of the sliding if it's slided to left
  direction = -1;
  carousel.style.justifyContent = 'flex-start';
  slider.style.transform = 'translate(-20%)';  
});

prev.addEventListener('click', function() {
  if (direction === -1) {
    direction = 1;
    slider.appendChild(slider.firstElementChild);
    console.log(slider.firstElementChild,'first')
  }
  carousel.style.justifyContent = 'flex-end';    
  slider.style.transform = 'translate(20%)';  
  
});

slider.addEventListener('transitionend', function() {
  // get the last element and append it to the front
  
  if (direction === 1) {
    slider.prepend(slider.lastElementChild);
    console.log(slider.lastElementChild,'last')
  } else {
    slider.appendChild(slider.firstElementChild);
    //console.log(slider.firstElementChild)
  }
  // reset the transition
  slider.style.transition = 'none';
  slider.style.transform = 'translate(0)';
  setTimeout(() => {
   slider.style.transition = 'all 0.5s';
  })
}, false);