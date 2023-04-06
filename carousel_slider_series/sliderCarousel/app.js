const slider = document.querySelector('.slider')
const leftArrow = document.querySelector('.left')
const rightArrow = document.querySelector('.right')
const indicatorParents = document.querySelector('.controls ul') // getting parent ul

let sectionIndex = 0

function setIndex() {
  document.querySelector('.controls .selected').classList.remove('selected') // anything which is inside control class selected
  slider.style.transform = 'translate(' + sectionIndex * -25 + '%)'
}
document.querySelectorAll('.controls li').forEach((indicator, index) => {
  indicator.addEventListener('click', () => {
    sectionIndex = index //set the global sectionIndex to index to match arrow click too
    // document.querySelector('.controls .selected').classList.remove('selected');// anything which is inside control class selected
    setIndex()
    indicator.classList.add('selected')
    //slider.style.transform='translate(' + (sectionIndex) * -25 + '%)'
  })
})
rightArrow.addEventListener('click', function () {
  sectionIndex = sectionIndex < 3 ? sectionIndex + 1 : 3 // we limit the section not to show nothing
  console.log(sectionIndex)
  //document.querySelector('.controls .selected').classList.remove('selected');
  setIndex()
  indicatorParents.children[sectionIndex].classList.add('selected')
  //slider.style.transform='translate(' + (sectionIndex) * -25 + '%)'
})
leftArrow.addEventListener('click', function () {
  sectionIndex = sectionIndex > 0 ? sectionIndex - 1 : 0 // we limit the section not to show nothing
  //document.querySelector('.controls .selected').classList.remove('selected');
  setIndex()
  indicatorParents.children[sectionIndex].classList.add('selected')
  //slider.style.transform='translate(' + (sectionIndex) * -25 + '%)'
})
