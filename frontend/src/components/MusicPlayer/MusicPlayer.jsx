import React, { useState, useRef } from 'react';
import audioFile from '../../assets/audio/audio1.mp3';
import {PlayPause, MusicNote } from "@phosphor-icons/react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Spinning from '../Spinning/Spinning.jsx';


const MusicPlayer = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const audioPlayer = useRef(null);

  const handleTogglePlay = () => {
    setIsPlaying(!isPlaying);
    if (isPlaying) {
      audioPlayer.current.pause();
    } else {
      audioPlayer.current.play();
    }
  };

  return (
    <div>
      <button onClick={handleTogglePlay}><PlayPause size={32} /></button>
      <audio ref={audioPlayer} src={audioFile} />

      <div className="playing">
      
      {isPlaying && 
      <MusicNote size={24}/>}

      <Spinning />
      </div>
    </div>
  );
};

export default MusicPlayer;
