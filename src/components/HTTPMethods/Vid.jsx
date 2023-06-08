import React, { useRef, useState } from 'react';

const VideoPlayer = () => {
  const videoRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);
  const [volume, setVolume] = useState(1);
  const [isFullScreen, setIsFullScreen] = useState(false);

  const handlePlayPause = () => {
    const video = videoRef.current;
    if (video.paused) {
      video.play();
      setIsPlaying(true);
    } else {
      video.pause();
      setIsPlaying(false);
    }
  };

  const handleTimeUpdate = () => {
    const video = videoRef.current;
    setCurrentTime(video.currentTime);
  };

  const handleSeek = (value) => {
    const video = videoRef.current;
    const time = value * video.duration;
    video.currentTime = time;
    setCurrentTime(time);
  };

  const handleVolumeChange = (value) => {
    const video = videoRef.current;
    video.volume = value;
    setVolume(value);
  };

  const handleFullScreen = () => {
    const video = videoRef.current;
    if (!isFullScreen) {
      if (video.requestFullscreen) {
        video.requestFullscreen();
      } else if (video.mozRequestFullScreen) {
        video.mozRequestFullScreen();
      } else if (video.webkitRequestFullscreen) {
        video.webkitRequestFullscreen();
      } else if (video.msRequestFullscreen) {
        video.msRequestFullscreen();
      }
      setIsFullScreen(true);
    } else {
      if (document.exitFullscreen) {
        document.exitFullscreen();
      } else if (document.mozCancelFullScreen) {
        document.mozCancelFullScreen();
      } else if (document.webkitExitFullscreen) {
        document.webkitExitFullscreen();
      } else if (document.msExitFullscreen) {
        document.msExitFullscreen();
      }
      setIsFullScreen(false);
    }
  };

  const formatTime = (time) => {
    const minutes = Math.floor(time / 60);
    const seconds = Math.floor(time % 60);
    return `${String(minutes).padStart(2, '0')}:${String(seconds).padStart(2, '0')}`;
  };

  const handleLoadedMetadata = () => {
    const video = videoRef.current;
    setDuration(video.duration);
  };
  const handleFileChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (e) => {
        const video = videoRef.current;
        video.src = e.target.result;
        video.load();
        setIsPlaying(true);
      };
      reader.readAsDataURL(file);
    }
  };

  return (
    <div className="container mt-5">
      <div className="row">
        <div className="col-md-6 offset-md-3">
          <div className="form-group">
            <input
              type="file"
              className="form-control-file"
              accept="video/*"
              onChange={handleFileChange}
            />
          </div>
          <div className="text-center">
            <video
              ref={videoRef}
              className="w-100"
              onTimeUpdate={handleTimeUpdate}
            />
            <div className="mt-3">
              <button
                className="btn btn-primary"
                onClick={handlePlayPause}
              >
                {isPlaying ? 'Pause' : 'Play'}
              </button>
              <input
                type="range"
                className="form-range"
                min={0}
                max={1}
                step={0.01}
                value={currentTime / duration}
                onChange={(e) => handleSeek(parseFloat(e.target.value))}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};


export default VideoPlayer;
