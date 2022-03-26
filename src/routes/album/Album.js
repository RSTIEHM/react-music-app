import { useState, useEffect } from 'react'
import axios from 'axios';
import { useParams } from 'react-router-dom'
import MainHeader from '../../components/MainHeader';
import { Link } from 'react-router-dom';
import { useContext } from 'react'
import { AppContext } from '../../context/appContext';

const Album = () => {

  let { id } = useParams()
  const [data, setData] = useState();

  
  const fetchProduct = () => {
    axios
      .get(
        `../data.json`
      )
      .then((res) => {
        setData(res.data);

      })
      .catch((err) => console.log(err));
  };

  useEffect(() => {
    fetchProduct();
  }, []);

  const {getTrack, selectedTrackIndex, selectedSong} = useContext(AppContext)
  console.log(selectedTrackIndex, 'Selected TRACK INDEX')
  if (!data || data === 'undefined') {
    return (
      <MainHeader title="ARTIST & ALBUM">
        <div className="single-album single-album-index">
          <div className='single-album-container'>

          </div>
        </div>
      </MainHeader>
    )
  }

  let album = data.albums.filter(album => album.id === id)
  let artist = data.artists.filter(artist => artist.id === album[0].artist)
  let songs = data.songs.filter(song => song.album === album[0].id)

  const routeCheck = id === selectedSong?.album

  const setTrack = (id, index) => {
    console.log(album, 'ALBUM')
    const allSelectedPlaylist = {
      album,
      artist,
      songs
    }

    const selectedIndex = index
    getTrack(id, allSelectedPlaylist, selectedIndex)
  }

  return (
    <MainHeader title="ARTIST & ALBUM">
      <div className="main">
        <div className="single-album single-album-index">

          <div className="single-album-container">
            <div className="image-album-info">
              <img className="single-album-image" src={album[0].artWorkPath} alt="Record cover for Upstairs At Eric's" />
              <div className="single-album-content">
                <Link to={`/artist/${artist[0].id}`} className="single-album-artist search-artist-card-artist single-underline" data-id="8">{artist[0].name} <span className="artist-name-span">{routeCheck ? '(Now Playing...)': ''}</span></Link>
                <h3 className="single-album-title">{album[0].title}</h3>
                <h4 className="track-count">{songs.length} Songs</h4>
                <p>{album[0].description}</p>
                <div className="button-container">
                  <button onClick={() => setTrack(songs[0].id, 0)} className="btn play-btn">Play</button>
                  <button className="btn save-btn">Save</button>
                </div>
              </div>
            </div>
          </div>

          {songs.map((song, i) => {
            return (
              <div onClick={() => setTrack(song.id, i)} key={song.id} className="single-album-tracks-container">
                <div className={`single-album-track ${routeCheck && selectedTrackIndex === i ? 'selected': ''}` }>
                  <div className="counter-container">
                    <p className="single-album-track-counter">{i + 1}</p>
                    <i className="fas fa-play icon-play"></i>
                  </div>
                  <div className="single-track-info-wrapper">
                    <p className="single-album-track-title">{song.title}</p>
                    <p className="single-album-track-artist">{artist[0].name}</p>
                  </div>
                  <div className="song-duration">
                    <p>{song.duration}</p>
                  </div>
                </div>
              </div>
            )
          })}

        </div>
      </div>
    </MainHeader>
  )
}

export default Album