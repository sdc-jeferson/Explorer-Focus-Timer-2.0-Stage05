import {
    forestButton,
    rainButton,
    coffeeShopButton,
    fireButton
  } from './elements.js'


  export function sounds() {

    const buttonPressAudio = new Audio("https://github.com/maykbrito/automatic-video-creator/blob/master/audios/button-press.wav?raw=true")

    const kitchenTimer = new Audio("https://github.com/maykbrito/automatic-video-creator/blob/master/audios/kichen-timer.mp3?raw=true")

    const forestAudio = new Audio("./sounds/floresta.wav")
    const rainAudio = new Audio("./sounds/chuva.wav")
    const coffeeShopAudio = new Audio("./sounds/cafeteria.wav")
    const fireAudio = new Audio("./sounds/lareira.wav")

  
    forestAudio.loop = true
    rainAudio.loop = true
    coffeeShopAudio.loop = true
    fireAudio.loop = true
  
    function pressButton() {
      buttonPressAudio.play()
    }
  
    function timeEnd() {
      kitchenTimer.play()
    }
  
    function forest() {
      forestButton.classList.toggle('selected')
        if (forestButton.classList.contains('selected') == true) {
        forestAudio.play()
        } else {
          forestAudio.pause()
        }
    }
  
    function rain() {
      rainButton.classList.toggle('selected')
        if (rainButton.classList.contains('selected') == true) {
        rainAudio.play()
        } else {
          rainAudio.pause()
        }
    }
  
    function coffeeShop() {
      coffeeShopButton.classList.toggle('selected')
        if (coffeeShopButton.classList.contains('selected') == true) {
        coffeeShopAudio.play()
        } else {
          coffeeShopAudio.pause()
        }
    }
  
    function fire() {
      fireButton.classList.toggle('selected')
        if (fireButton.classList.contains('selected') == true) {
        fireAudio.play()
        } else {
          fireAudio.pause()
        }
    }
  
    return {
      pressButton,
      timeEnd,
      forest,
      rain,
      coffeeShop,
      fire
    }
  }