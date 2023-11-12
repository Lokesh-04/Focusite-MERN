import React, { useState, useRef } from 'react';
import audioFile from '../../assets/audio/audio1.mp3';


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
      <button onClick={handleTogglePlay}>{isPlaying ? 'Pause' : 'Play'}</button>
      <audio ref={audioPlayer} src={audioFile} />
    </div>
  );
};

export default MusicPlayer;
