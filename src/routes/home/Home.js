import { useState, useEffect } from 'react'
import MainHeader from '../../components/MainHeader'
import { Link } from "react-router-dom";
const Home = () => {

  const [data, setData] = useState({})

  const getData = async () => {
    const res = await fetch('data.json', {
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json'
      }
    })
    const allData = await res.json()
    setData(allData)
  }

  useEffect(() => {
    getData()
  }, [])


  return (
    <MainHeader title="ALBUMS">
      <div className="main">
        <div className="home home-index">
          {data.albums && data.albums.length > 0 && data.albums.map((album, i) => (
            <Link to={`/react-music-app/album/${album.id}`} className="single-album-card" key={i}>
              <img className="single-album-image grid-view-img" src={album.artWorkPath} alt="Sabbath Bloody Sabbath" />
              <h2 className="single-album-title grid-view-info">{album.title}</h2>
            </Link>
          ))}
        </div>
      </div>

    </MainHeader>

  )
}

export default Home