import React, { useState } from 'react'
import { Timer, FadersHorizontal } from "@phosphor-icons/react";
import "./settings.css"
import TimerSettings from './TimerSettings/TimerSettings'
import MusicSettings from './MusicSettings/MusicSettings'

const Settings = () => {

  const [isTimerSettings, setIsTimerSettings] = useState(false);
  const [isMusicSettings, setIsMusicSettings] = useState(false);


  const showTimerSettings = () =>{
    if(isMusicSettings){setIsMusicSettings(!isMusicSettings);}
    setIsTimerSettings(!isTimerSettings);
  }

  const showMusicSettings = () =>{
    if(isTimerSettings){setIsTimerSettings(!isTimerSettings);}
    setIsMusicSettings(!isMusicSettings);
  }



  return (
    <div id='main'>

    <div id="all-settings">
        <div id="music-settings" className='settings'>
        <FadersHorizontal size={40} color='white' weight="thin" onClick={showMusicSettings}/>
        </div>
        <div id="timer-settings" className='settings'>
        <Timer size={40} color='white' weight="thin" onClick={showTimerSettings}/>
        </div>
    </div>    
    {/* Music Settings */}
    <div id="music-settings-content" style={{display: isMusicSettings? 'block': 'none'}}><MusicSettings /></div>    

    {/* Timer Settings */}
    <div id="timer-settings-content" style={{display: isTimerSettings? 'block': 'none'}}><TimerSettings /></div>

    </div>
  )
}

export default Settings
