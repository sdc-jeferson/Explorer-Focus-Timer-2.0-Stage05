export function timer({minutesDisplay,
    secondsDisplay, Controls, Sounds}) {
  
    let timerTimeOut
    let minutes = Number(minutesDisplay.textContent)
  
    function updateTimerDisplay(minutes, seconds) {
      minutesDisplay.textContent = String(minutes).padStart(2, "0")
      secondsDisplay.textContent = String(seconds).padStart(2, "0")
    }
  
    // function updateMinutes() {
    //   minutes = Number(minutesDisplay.textContent)
    // }
  
      
    function reset() {
      pause()
      updateTimerDisplay(minutes, 0)
    }
  
    function pause() {
      Controls.buttonPauseHide()
      clearTimeout(timerTimeOut)
    }
  
    function play() {
      Controls.buttonPlayHide()
      timerTimeOut = setTimeout (function() {
        let seconds = Number(secondsDisplay.textContent)
        let minutes = Number(minutesDisplay.textContent)
        let isFinished = minutes <= 0 && seconds <= 0
  
        if (isFinished) {
          Controls.buttonPauseHide()
          Sounds.timeEnd()
          return
        }
  
        if (seconds == 0) {
          seconds = 60
          --minutes
        }
  
        --seconds
  
        updateTimerDisplay(minutes, seconds)
      
        play()
  
      }, 1000)
    }
  
    function increase5Minutes() {
        let minutes = Number(minutesDisplay.textContent)
        let seconds = Number(secondsDisplay.textContent)
    
        if(minutes > 59){
            alert('Não é possível adicionar mais minutos!!')
            return
        }else{
            updateTimerDisplay(String(minutes + 5), seconds ) 
        }
    }
  
    function decrease5Minutes() {
        let minutes = Number(minutesDisplay.textContent)
        let seconds = Number(secondsDisplay.textContent)
    
        if(minutes < 5){
            alert('Não é possível remover mais 5 minutos')
            return
        }else{
            updateTimerDisplay(String(minutes - 5), seconds ) 
        }  
    }
  
    return {
      reset,
      pause,
      play,
      increase5Minutes,
      decrease5Minutes
    }
  
  }