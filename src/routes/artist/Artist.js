import { useState, useEffect } from 'react'
import axios from 'axios';
import { useParams } from 'react-router-dom'
import MainHeader from '../../components/MainHeader';
import { Link } from 'react-router-dom';
const Artist = () => {

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

  if (!data || data === 'undefined') {
    return (
      <MainHeader title="ARTIST & ALBUM">
        <div className="single-album single-album-index">
        </div>
      </MainHeader>
    )
  }

  let artist = data.artists.filter(single => single.id === id)[0]
  let albums = data.albums.filter(album => album.artist === id)
  let songs = data.songs.filter(song => song.artist === id)

  return (
    <MainHeader title="ARTIST">
      <div className="main">
        <div className="single-artist single-artist-index">
          <div className="single-artist-container">
            <div className="image-artist-info">
              <img className="single-artist-image" src={artist.img} alt="Record cover for" />
              <div className="single-artist-content">
                <h2 className="single-artist-artist">{artist.name} <span className="artist-name-span"></span></h2>
                <p>{artist.bio}</p>
                <div className="spacer">
                  <h2>Albums</h2>
                  <div className="search-albums-info-container">
                    {albums.map(album => {
                      return (
                        <Link to={`/react-music-app/album/${album.id}`} className="single-album-card">
                          <img className="single-album-image grid-view-img" src={album.artWorkPath} alt="Kind Of Blue" />
                          <h2 className="single-album-title grid-view-info">{album.title}</h2>
                        </Link>
                      )
                    })}
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="all-songs-search-container">
            <h2 className="single-artist-artist">All Songs</h2>
            {songs.map(song => {
              return (
                <h3 key={song.id}>{song.title}</h3>
              )
            })}

          </div>
        </div>
      </div>
    </MainHeader>
  )
}

export default Artist