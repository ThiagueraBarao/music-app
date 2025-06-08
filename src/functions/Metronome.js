import React, { useState, useEffect, useRef } from "react";
import "./metronome.css";

const click1 = "//daveceddia.com/freebies/react-metronome/click1.wav";
const click2 = "//daveceddia.com/freebies/react-metronome/click2.wav";

const Metronome = () => {
  const [bpm, setBpm] = useState(100);
  const [isPlaying, setIsPlaying] = useState(false);
  const [count, setCount] = useState(0);
  const beatsPerMeasure = 4;

  const click1Audio = useRef(new Audio(click1));
  const click2Audio = useRef(new Audio(click2));
  const timerRef = useRef(null);

  const playClick = () => {
    if (count % beatsPerMeasure === 0) {
      click2Audio.current.play();
    } else {
      click1Audio.current.play();
    }
    setCount((prevCount) => (prevCount + 1) % beatsPerMeasure);
  };

  const startStop = () => {
    if (isPlaying) {
      clearInterval(timerRef.current);
      setIsPlaying(false);
    } else {
      timerRef.current = setInterval(playClick, (60 / bpm) * 1000);
      setCount(0);
      setIsPlaying(true);
      playClick(); // Play a click immediately
    }
  };

  const handleInputChange = (event) => {
    const newBpm = Number(event.target.value);
    setBpm(newBpm);

    if (isPlaying) {
      clearInterval(timerRef.current);
      timerRef.current = setInterval(playClick, (60 / newBpm) * 1000);
      setCount(0);
    }
  };

  useEffect(() => {
    return () => clearInterval(timerRef.current); // Cleanup timer on unmount
  }, []);

  return (
    <div className="metronome">
      <div className="bpm-slider">
        <p>{bpm} BPM</p>
        <input
          type="range"
          min="60"
          max="240"
          value={bpm}
          onChange={handleInputChange}
        />
      </div>
      <button onClick={startStop}>{isPlaying ? "Stop" : "Start"}</button>
    </div>
  );
};

export default Metronome;
