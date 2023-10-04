const body = document.querySelector('body')

//=============== THEME DARK OR LIGHT MODE ============================

const buttonLightMode = document.querySelector('.lightModeIcon')
const buttonDarkMode = document.querySelector('.darkModeIcon')

// ================ BUTTONS MAIN FOR CONTROL OF TIMER =================

const buttonPlay = document.querySelector('.play')
const buttonPause = document.querySelector('.pause')
const buttonStop = document.querySelector('.stop')
const buttonIncrease = document.querySelector('.increase')
const buttonDecrease = document.querySelector('.decrease')

const minutesDisplay = document.querySelector('.minutes')
const secondsDisplay = document.querySelector('.seconds')

//=============== SOUNDS CARDS=============================

const forestButton = document.querySelector('.forest')
const rainButton = document.querySelector('.rain')
const coffeeShopButton = document.querySelector('.coffee-shop')
const fireButton = document.querySelector('.fire')

const forestVolume = document.querySelector('#forestVolume')
const rainVolume = document.querySelector('#rainVolume')
const coffeeShopVolume = document.querySelector('#coffeeShopVolume')
const fireVolume = document.querySelector('#fireVolume')

export{
    body,
    buttonLightMode,
    buttonDarkMode,
    buttonPlay,
    buttonPause,
    buttonStop,
    buttonIncrease,
    buttonDecrease,
    minutesDisplay,
    secondsDisplay,
    forestButton,
    rainButton,
    coffeeShopButton,
    fireButton,
    forestVolume,
    rainVolume,
    coffeeShopVolume,
    fireVolume
}