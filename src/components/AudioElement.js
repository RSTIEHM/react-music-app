import { useState, useEffect, useContext, useRef } from 'react'
import { AppContext } from '../context/appContext'

const AudioElement = ({ getTimeUpdate, isLooping, getCurrentTrackLength }) => {
  const {
    selectedSong,
    isPlaying,
    playNextTrack
  } = useContext(AppContext)


  const audioPlayer = useRef()

  const [seekValue, setSeekValue] = useState(0);
  const [currentSong, setCurrentSong] = useState(selectedSong)
  const [currentTime, setCurrentTime] = useState(0)
  const [trackLength, setTrackLength] = useState(0)


  useEffect(() => {
    if (selectedSong) {

      play()
    }
  }, [selectedSong])

  useEffect(() => {
    if (currentTime === Math.floor(audioPlayer.current.duration) && isLooping) {
      playNextTrack()
    }
  }, [currentTime, isLooping])

  const play = () => {
    audioPlayer.current.play();

  };
  const pause = () => {
    audioPlayer.current.pause();
  };
  const stop = () => {
    audioPlayer.current.pause();
    audioPlayer.current.currentTime = 0;
  };

  const updateTime = () => {
    setCurrentTime(Math.floor(audioPlayer.current.currentTime))
    getTimeUpdate(currentTime)
    setTrackLength(audioPlayer.current.duration)
    getCurrentTrackLength(Math.floor(trackLength))
  }

  return (
    <>
      <audio onTimeUpdate={updateTime} ref={audioPlayer} src={selectedSong ? selectedSong.path : ''}></audio>
    </>
  )
}

export default AudioElement