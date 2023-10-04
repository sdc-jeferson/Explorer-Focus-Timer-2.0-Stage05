  
    import { controls } from './controls.js'
    import { timer } from './timer.js'
    import { sounds } from './sounds.js'
    import { events } from './events.js'


    import {
        body,
        buttonLightMode,
        buttonDarkMode,
        buttonPlay,
        buttonPause,
        minutesDisplay,
        secondsDisplay
    } from './elements.js'

  
    const Controls = controls({
        buttonLightMode,
        buttonDarkMode,
        body,
        buttonPlay,
        buttonPause, 
    })

    const Sounds = sounds()
    
    const Timer = timer({
        minutesDisplay,
        secondsDisplay,
        Controls,
        Sounds
    })
    
    events({ Controls, Timer, Sounds })