import React, { useState, useRef } from "react";

const AudioPlayer = ({ source, startTime, endTime }) => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);
  const audioRef = useRef();

  const handlePlayPause = () => {
    setIsPlaying(!isPlaying);
    if (isPlaying) {
      audioRef.current.pause();
    } else {
      audioRef.current.play();
    }
  };

  const handleProgressBarClick = (event) => {
    const progressBarWidth = event.target.clientWidth;
    const clickPosition = event.clientX - event.target.offsetLeft;
    const newCurrentTime =
      (clickPosition / progressBarWidth) * audioRef?.current?.duration;
    setCurrentTime(newCurrentTime);
    audioRef.current.currentTime = newCurrentTime;
  };

  const getProgressStyle = () => {
    const audioDuration = duration;
    const progressBarWidth = "100%";
    const progressBarHeight = "10px";
    const progressBarBackgroundColor = "#ccc";

    const intervalWidth = `${((endTime - startTime) / audioDuration) * 100}%`;
    const intervalLeft = `${(startTime / audioDuration) * 100}%`;
    const intervalBackgroundColor = "#f00"; // color for time intervals

    const intervalStyle = {
      width: intervalWidth,
      height: progressBarHeight,
      backgroundColor: intervalBackgroundColor,
      position: "absolute",
      left: intervalLeft,
    };

    return {
      width: progressBarWidth,
      height: progressBarHeight,
      backgroundColor: progressBarBackgroundColor,
      position: "relative",
      borderRadius: "5px",
      overflow: "hidden",
      display: "flex",
      interval: intervalStyle,
    };
  };

  const formatTime = (time) => {
    const minutes = Math.floor(time / 60);
    const seconds = Math.floor(time % 60);
    return `${minutes.toString().padStart(2, "0")}:${seconds
      .toString()
      .padStart(2, "0")}`;
  };

  return (
    <div>
      <audio
        ref={audioRef}
        src={source}
        onEnded={() => {
          setIsPlaying(false);
          setCurrentTime(0);
        }}
        onTimeUpdate={() => setCurrentTime(audioRef.current.currentTime)}
        onLoadedMetadata={() => setDuration(audioRef.current.duration)}
      />
      <button onClick={handlePlayPause}>{isPlaying ? "Pause" : "Play"}</button>
      <div style={getProgressStyle()} onClick={handleProgressBarClick}>
        <div style={getProgressStyle().interval} />
        {isPlaying && (
          <div
            style={{
              position: "absolute",
              top: 0,
              left: 0,
              height: "100%",
              width: `${
                (audioRef.current.currentTime / audioRef?.current?.duration) *
                100
              }%`,
              backgroundColor: "#f00",
            }}
          />
        )}
      </div>
      <div>
        <span>{formatTime(currentTime)}</span> /{" "}
        <span>{formatTime(duration)}</span>
      </div>
    </div>
  );
};

export default AudioPlayer;
