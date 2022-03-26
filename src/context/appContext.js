import { createContext, useState, useReducer } from "react";
import { songs, albums, artists } from "./globalData";

const AppContext = createContext()

const initalState = {
  currentViewingAlbum: [],
  currentPlayingAlbum: [],
  currentSong: 0,
  songList: songs,
  artists: artists,
  albums: albums,
  repeat: false,
  random: false,
  playing: false,
  audio: null
}




const AppProvider = ({ children }) => {
  // ALL DATA =========================
  const [songs, setSongs] = useState([
    initalState.songList
  ])
  const [artists, setArtists] = useState([
    initalState.artists
  ])
  const [albums, setAlbums] = useState([
    initalState.albums
  ])


  const [selectedSong, setSelectedSong] = useState(null)
  const [selectedArtist, setSelectedArtist] = useState(null)
  const [selectedAlbum, setSelectedAlbum] = useState(null)
  const [selectedPlaylist, setSelectedPlaylist] = useState({})
  const [selectedTrackIndex, setSelectedTrackIndex] = useState(null) 

  const [isPlaying, setIsPlaying] = useState(false)



  const getTrack = (id, playlist, index) => {
    let foundTrack = songs[0].filter(song => song.id === id)
    let foundArtist = artists[0].filter(artist => artist.id === foundTrack[0].artist)
    let foundAlbum = albums[0].filter(album => album.id === foundTrack[0].album)
    console.log(playlist, 'PLAYLIST')
    // console.log(foundTrack, 'FOUND Track')
    // console.log(foundArtist,'FOUND ARTIST')
    // console.log(foundAlbum,'FOUND ALBUM')
 
    setSelectedSong(foundTrack[0])
    setSelectedArtist(foundArtist[0])
    setSelectedAlbum(foundAlbum[0])
    setSelectedPlaylist(playlist)
    setSelectedTrackIndex(index)
  }

  const playTrack = () => {
    setIsPlaying(!isPlaying)
  }

  const pauseTrack = () => {
    setIsPlaying(!isPlaying)
  }

  const playNextTrack = () => {
    if(Object.keys(selectedPlaylist).length === 0) {
      return
    } 
 
    let playlistLength = selectedPlaylist.songs.length
    if(selectedTrackIndex >= playlistLength - 1) {
      setSelectedTrackIndex(0)
      setSelectedSong(selectedPlaylist.songs[0])
    } else {
      setSelectedTrackIndex(selectedTrackIndex + 1)
      setSelectedSong(selectedPlaylist.songs[selectedTrackIndex + 1])
    }
    // PLAY TRACK

  }

  const playPrevTrack = () => {
    if(Object.keys(selectedPlaylist).length === 0) {
      return
    } 
    let playlistLength = selectedPlaylist.songs.length
    if(selectedTrackIndex <= 0) {
      setSelectedTrackIndex(selectedPlaylist.songs.length - 1)
      setSelectedSong(selectedPlaylist.songs[selectedPlaylist.songs.length - 1])
    } else {
      setSelectedTrackIndex(selectedTrackIndex - 1)
      setSelectedSong(selectedPlaylist.songs[selectedTrackIndex - 1])
    }
    // PLAY TRACK
  }


  return (
    <AppContext.Provider value={{
      songs,
      albums,
      artists,
      selectedSong,
      selectedArtist,
      selectedAlbum,
      selectedPlaylist,
      selectedTrackIndex,
      isPlaying,
      playTrack,
      pauseTrack,
      playPrevTrack,
      playNextTrack,
      getTrack
    }}>
      {children}
    </AppContext.Provider>)
}

export { AppProvider, AppContext }