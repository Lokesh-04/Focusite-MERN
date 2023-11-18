import React from 'react'
import MusicPlayer from '../components/MusicPlayer/MusicPlayer'
import Timer from '../components/Timer/PomodoroTimer'
import Settings from '../components/Settings/Settings'

const Home = () => {
  return (
    <div>
      
      <Timer />
      <MusicPlayer />

      <Settings />


    </div>
  )
}

export default Home
