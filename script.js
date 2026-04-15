(function () {
  for (const worm of document.querySelectorAll('.worm')) {
    worm.style.top = Math.random() * document.body.clientHeight + 'px'
    worm.style.left = Math.random() * document.body.clientWidth + 'px'
  }
})()