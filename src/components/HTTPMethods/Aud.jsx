import React, { useState } from 'react';

const AudioPlayer = () => {
  const [audioFile, setAudioFile] = useState(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);

  const handleFileChange = (event) => {
    const file = event.target.files[0];
    const reader = new FileReader();

    reader.onload = (e) => {
      const audio = new Audio(e.target.result);
      audio.addEventListener('loadedmetadata', () => {
        setDuration(audio.duration);
      });
      setAudioFile(audio);
    };

    if (file) {
      reader.readAsDataURL(file);
    }
  };

  const handlePlayPause = () => {
    if (audioFile) {
      if (isPlaying) {
        audioFile.pause();
      } else {
        audioFile.play();
      }
      setIsPlaying(!isPlaying);
    }
  };

  const handleTimeUpdate = () => {
    setCurrentTime(audioFile.currentTime);
  };

  return (
    <div className="container">
      <h1 className="mt-4">Audio Player</h1>
      <div className="mt-4">
        <input type="file" accept="audio/*" onChange={handleFileChange} className="form-control-file" />
      </div>
      {audioFile && (
        <div className="mt-4">
          <audio
            src={audioFile.src}
            controls
            onPlay={handlePlayPause}
            onPause={handlePlayPause}
            onTimeUpdate={handleTimeUpdate}
          />
          <div className="mt-4">
            <button onClick={handlePlayPause} className="btn btn-primary">
              {isPlaying ? 'Pause' : 'Play'}
            </button>
            <span className="ml-2">
              {`${currentTime.toFixed(2)}s / ${duration.toFixed(2)}s`}
            </span>
          </div>
        </div>
      )}
    </div>
  );
};

export default AudioPlayer;
