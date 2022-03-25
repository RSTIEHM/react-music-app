import { useEffect, useState } from 'react'
import MainHeader from './MainHeader'
import { useParams } from 'react-router-dom'

const AlbumDetail = () => {
  let { id } = useParams()
  const [allInfo, setAllInfo] = useState()


  const getData = async () => {
    const res = await fetch('data.json', {
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json'
      }
    })
    const allData = await res.json()
    setAllInfo(allData)
  }

  useEffect(() => {
    getData()
    console.log(allInfo)
  }, [])
  return (
    <MainHeader title="ARTIST & ALBUM">
      <div className="main">
        <div className="single-album single-album-index">

          <div className="single-album-container">
            <div className="image-album-info">
              <img className="single-album-image" src="https://res.cloudinary.com/rjsmedia/image/upload/v1640009430/SONG%20ART/YAZ_UPSTARIS_AT_ERICS_o3nitq.jpg" alt="Record cover for Upstairs At Eric's" />
              <div className="single-album-content">
                <h2 className="single-album-artist search-artist-card-artist single-underline" data-id="8">Yaz <span className="artist-name-span"></span></h2>
                <h3 className="single-album-title">Upstairs At Eric's</h3>
                <h4 className="track-count">3 Songs</h4>
                <p>Upstairs at Eric's is the debut album by British synthpop duo Yazoo (known in the US and Canada as Yaz), released in the UK on Mute Records on 20 August 1982. It was produced by the band and E.C. Radcliffe, with assistance from Mute label boss Daniel Miller on some of the tracks. Named after producer Radcliffe's Blackwing Studios where the album was recorded, Upstairs at Eric's was preceded by two top three UK singles, the ballad "Only You" and the more uptempo "Don't Go". </p>
                <div className="button-container">
                  <button className="btn play-btn">Play</button>
                  <button className="btn save-btn">Save</button>
                </div>
              </div>
            </div>
          </div>

          <div className="single-album-tracks-container">
            <div className="single-album-track">
              <div className="counter-container">
                <p className="single-album-track-counter">1</p>
                <i className="fas fa-play icon-play"></i>
              </div>
              <div className="single-track-info-wrapper">
                <p className="single-album-track-title">Don't Go</p>
                <p className="single-album-track-artist">Yaz</p>
              </div>
              <div className="song-duration">
                <p>3:06</p>
              </div>
            </div>
          </div>

        </div>
      </div>
    </MainHeader>
  )
}

export default AlbumDetail