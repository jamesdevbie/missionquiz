import { useRef, useState } from 'react'
import mySound from './mixkit-simple-game-countdown-921.wav' // Adjust path to your sound file

function AudioPlayer() {
  const audioRef = useRef(new Audio(mySound))
  const [isPlaying, setIsPlaying] = useState(false)

  const togglePlayPause = () => {
    if (isPlaying) {
      audioRef.current.pause()
    } else {
      audioRef.current.play()
    }
    setIsPlaying(!isPlaying)
  }

  return (
    <div>
      <button onClick={togglePlayPause}>{isPlaying ? 'Pause' : 'Play'}</button>
      <audio ref={audioRef} src={mySound} />
    </div>
  )
}

export default AudioPlayer
