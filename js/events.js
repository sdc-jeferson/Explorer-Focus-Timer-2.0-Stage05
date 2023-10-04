import {
    buttonLightMode,
    buttonDarkMode,
    buttonPlay,
    buttonPause,
    buttonStop,
    buttonIncrease,
    buttonDecrease,
    forestButton,
    rainButton,
    coffeeShopButton,
    fireButton,
    forestVolume,
    rainVolume,
    coffeeShopVolume,
    fireVolume,
  } from './elements.js'
  
  export function events({ Controls, Timer, Sounds }) {
    //----------Theme-----------------
  
    buttonLightMode.addEventListener('click', () => {
      Controls.darkMode()
    })
  
    buttonDarkMode.addEventListener('click', () => {
      Controls.lightMode()
    })
  
    //----------Timer-----------------
  
    buttonPlay.addEventListener('click', () => {
      Timer.play()
      Sounds.pressButton()
    })
  
    buttonPause.addEventListener('click', () => {
      Timer.pause()
      Sounds.pressButton()
    })
  
    buttonStop.addEventListener('click', () => {
      Timer.reset()
      Sounds.pressButton()
    })
  
    buttonIncrease.addEventListener('click', () => {
      Timer.increase5Minutes()
      Sounds.pressButton()
    })
  
    buttonDecrease.addEventListener('click', () => {
      Timer.decrease5Minutes()
      Sounds.pressButton()
    })
  
    // ======================= CARDS ========================
  
    forestButton.addEventListener('click', () => {
      Sounds.forest()
      
    })
  
    rainButton.addEventListener('click', () => {
      Sounds.rain()
    })
  
    coffeeShopButton.addEventListener('click', () => {
      Sounds.coffeeShop()
    })
  
    fireButton.addEventListener('click', () => {
      Sounds.fire()
    })
  
    forestVolume.addEventListener('input', function () {
      forestAudio.volume = forestVolume.value
    })
  
    rainVolume.addEventListener('input', function () {
      rainAudio.volume = rainVolume.value
    })
  
    coffeeShopVolume.addEventListener('input', function () {
      coffeeShopAudio.volume = coffeeShopVolume.value
    })
  
    fireVolume.addEventListener('input', function () {
      fireAudio.volume = fireVolume.value
    })

   

  }