import {useState, useEffect} from 'react'
import MainHeader from '../../components/MainHeader'

const Home = () => {

  const [data, setData] = useState({})

  const getData = async()=>{
    const res = await fetch('data.json', {
      headers : { 
        'Content-Type': 'application/json',
        'Accept': 'application/json'
       }
    })
    const allData = await res.json()
    setData(allData)
    console.log(allData, 'IN HERE')
    // fetch('data.json'
    // ,{
    //   headers : { 
    //     'Content-Type': 'application/json',
    //     'Accept': 'application/json'
    //    }
    // }
    // )
    //   .then(function(response){
    //     console.log(response)
    //     return response.json();
    //   })
    //   .then(function(myJson) {
    //     console.log(myJson);
    //   });
  }
  useEffect(()=>{
    getData()
  },[])


  return (
        <MainHeader title="ALBUMS">
          <div className="main">
            <div className="home home-index">
            {data.albums && data.albums.length > 0 &&  data.albums.map((album, i) => (
                <div className="single-album-card" key={i}>
                  <img className="single-album-image grid-view-img" src={album.artWorkPath} alt="Sabbath Bloody Sabbath"/>
                  <h2 className="single-album-title grid-view-info">{album.title}</h2>
                </div> 
            ))}
            </div>
          </div>
  
        </MainHeader>

  )
}

export default Home