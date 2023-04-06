const track = document.querySelector('.track')
let initialPosition = null
let moving = false
let transform = 0
const gestureStart = (e) => {
  initialPosition = e.pageX // we get the position of the mouse on x axis when mouse clicked
  //console.log(initialPosition)
  moving = true
  const transformMatrix = window
    .getComputedStyle(track)
    .getPropertyValue('transform')
  if (transformMatrix !== 'none') {
    transform = parseInt(transformMatrix.split(',')[4].trim()) // it look like this matrix(1, 0, 0, 1, -326, 0) we need 5th element and we ignore the space
    console.log(transform)
  }

  console.log(transformMatrix, '...')
}
const gestureMove = (e) => {
  if (moving) {
    let currentposition = e.pageX // current position of the mouse while I#m moving
    const diff = currentposition - initialPosition
    //console.log(diff)
    track.style.transform = ` translate(${transform + diff}px)`
  }
}
const gestureEnd = (e) => {
  moving = false
}

if (window.PointerEvent) {
  window.addEventListener('pointerdown', gestureStart)
  window.addEventListener('pointermove', gestureMove)
  window.addEventListener('pointerup', gestureEnd)
} else {
//   window.addEventListener('touchdown', gestureStart)
//   window.addEventListener('touchmove', gestureMove)
//   window.addEventListener('touchup', gestureEnd)
//   window.addEventListener('mousedown', gestureStart)
//   window.addEventListener('mousemove', gestureMove)
//   window.addEventListener('mouseup', gestureEnd)
}


