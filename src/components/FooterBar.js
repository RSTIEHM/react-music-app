import { useState, useEffect, useContext } from 'react'
import { AppContext } from '../context/appContext'
import AudioElement from './AudioElement'

const FooterBar = () => {

  // FROM CONTEXT ================
  const {
    selectedSong,
    selectedPlaylist,
    playPrevTrack,
    playNextTrack,
  } = useContext(AppContext)



  let defaultStartTime = '0:00'
  const [input, setInput] = useState(0)
  const [currentTrackTime, setCurrentTrackTime] = useState(defaultStartTime)
  const [isLooping, setIsLooping] = useState(false)
  const [progressbarTime, setProgressBarTime] = useState(0)
  const [currentTrackLength, setCurrentTrackLength] = useState(0)

  const handleChange = (e) => {
    setInput(e.target.value)
  }

  const getTimeUpdate = (currTime) => {
    let formattedTime = fancyTimeFormat(currTime)
    setCurrentTrackTime(formattedTime)
    setProgressBarTime(currTime)
  }

  const getCurrentTrackLength = (trackLength) => {
    setCurrentTrackLength(trackLength)
  }


  const fancyTimeFormat = (duration) => {

    var hrs = Math.floor((duration / 3600));
    var mins = Math.floor(((duration % 3600) / 60));
    var secs = Math.floor(duration % 60);

    var ret = "";

    if (hrs > 0) {
      ret += "" + hrs + ":" + (mins < 10 ? "0" : "");
    }

    ret += "" + mins + ":" + (secs < 10 ? "0" : "");
    ret += "" + secs;
    return ret;
  }

  // const checkForPlaylist = Object.keys(selectedPlaylist).length === 0 ? false : true;
  const toggleLoop = () => {
    setIsLooping(!isLooping)
  }
  return (
    <>

      <div className="now-playing-container">
        <div className="now-playing-bar">
          <div className="now-playing-left">
            <div className="content record-content">
            {/* <img
                className="record-cover"
                src={Object.keys(selectedPlaylist).length === 0 ? "https://res.cloudinary.com/rjsmedia/image/upload/v1639407817/LogoMakr_j9vkdj.png" : selectedPlaylist.singleAlbum.artWorkPath}
                alt="album cover"
              />
              <div className="record-info">
              <h3 className="record-artist">{Object.keys(selectedPlaylist).length === 0 ? '' : selectedPlaylist.singleArtist.name}</h3>
                <p className="record-title">{selectedSong ? selectedSong.title : ''}</p>
              </div> */}
            </div>
          </div>
          <div className="now-playing-center">
            <div className="content player-controls">
              <div className="btn-player-controls">
                <button className="shuffle">
                  <i className="fas fa-random"></i>
                </button>
                <button className="prev play-prev" onClick={() => playPrevTrack()}>
                  <i className="fas fa-backward"></i>
                </button>
                <button className="play play-icon">
                  <i className="fas fa-play"></i>
                </button>
                <button className="pause pause-icon">
                  <i className="fas fa-pause"></i>
                </button>
                <button className="next play-next" onClick={() => playNextTrack()}>
                  <i className="fas fa-forward"></i>
                </button>
                <button onClick={toggleLoop} className={`loop ${isLooping ? 'active' : ''}`}>
                  <i className="fas fa-retweet"></i>
                </button>
              </div>
            </div>
            <div className="progress-bar-container">
            <span className="progress-time current">{currentTrackTime}</span>
              <div className="progress-bar">
              <input onChange={handleChange} type="range" className="progress-range" min="0" max="100" value={(progressbarTime / currentTrackLength) * 100} step="1" ></input>
                <div className="progress-bar-track">

                </div>
              </div>
              <span className="progress-time remaining">{selectedSong ? selectedSong.duration : '0:00'}</span>
            </div>
          </div>
          <div className="now-playing-center">
            <div className="volume-container">
              <div className="btn-player-controls">
                <AudioElement getCurrentTrackLength={getCurrentTrackLength} isLooping={isLooping} getTimeUpdate={getTimeUpdate} />
                <button className="volume-up">
                  <i className="fas fa-volume-up"></i>
                </button>
                <button className="volume-mute">
                  <i className="fas fa-volume-mute"></i>
                </button>
              </div>
              <div className="volume-bar">
                <input value="0" type="range" className="progress-range" min="0" max="100" step="1" ></input>
              </div>
            </div>
          </div>
        </div>

      </div>
    </>
  )
}

export default FooterBar