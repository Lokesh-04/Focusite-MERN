import React from 'react'
import { Timer, FadersHorizontal } from "@phosphor-icons/react";
import "./settings.css"
import TimerSettings from './TimerSettings/TimerSettings'
import MusicSettings from './MusicSettings/MusicSettings'

const Settings = () => {
  return (
    <div>

    <div id="all-settings">
        <div id="music-settings" className='settings'>
        <FadersHorizontal size={32} color='white' weight="thin" />
        </div>
        <div id="timer-settings" className='settings'>
        <Timer size={32} color='white' weight="thin" />
        </div>
    </div>    
    {/* Music Settings */}
    <div id="music-settings-content"><MusicSettings /></div>    

    {/* Timer Settings */}
    <div id="timer-settings-content"><TimerSettings /></div>

    </div>
  )
}

export default Settings
