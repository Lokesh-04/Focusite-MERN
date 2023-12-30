import React from 'react'
import MusicPlayer from '../components/MusicPlayer/MusicPlayer'
import Timer from '../components/Timer/PomodoroTimer'
import Settings from '../components/Settings/Settings'
import AddNote from '../components/Notes/Addnote'
import './Home.css'

const Home = () => {
  return (
    <div id='home'>
      <div id="settings">
      <Settings />
      </div>
      <div id="center">
      <Timer />
      <MusicPlayer />
      </div>
      <div id="add-note">
        <AddNote />
      </div>
    </div>
  )
}

export default Home
