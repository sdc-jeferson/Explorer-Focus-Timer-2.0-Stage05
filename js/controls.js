export function controls({ buttonLightMode, buttonDarkMode, body, buttonPlay, buttonPause}) {

    //=============== THEME DARK OR LIGHT MODE ============================
  
    function darkMode() {
      buttonLightMode.classList.add('hide')
      buttonDarkMode.classList.remove('hide')
    
      body.classList.remove('light')
    }
  
    function lightMode() {
      buttonDarkMode.classList.add('hide')
      buttonLightMode.classList.remove('hide')
  
      body.classList.add('light')
    }
  
    //========================TIMER=========================================
  
    function buttonPlayHide() {
      buttonPlay.classList.add('hide'),
      buttonPause.classList.remove('hide')
    }
  
    function buttonPauseHide() {
      buttonPause.classList.add('hide')
      buttonPlay.classList.remove('hide')
    }

  
     return {
      darkMode,
      lightMode,
      buttonPlayHide,
      buttonPauseHide
     }
  }