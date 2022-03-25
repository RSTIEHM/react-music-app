import Navigation from "./Navigation"
import FooterBar from "./FooterBar"

const Layout = ({children}) => {
  return (
    <>
      <div className="app">
        <Navigation />
        <div class="main-wrapper-header">
          <div class="page-header-title">
            <h1 class="page-name">Albums</h1>
          </div>
          <div class="main">
            <div class="home home-index">
              <div class="single-album-card" data-record="2" data-artist="5">
                <img class="single-album-image grid-view-img" src="https://res.cloudinary.com/rjsmedia/image/upload/v1640009429/SONG%20ART/BLACK_SABBATH_BLOODY_SABBATH_mija5q.jpg" alt="Sabbath Bloody Sabbath"/>
                <h2 class="single-album-title grid-view-info">Sabbath Bloody Sabbath</h2>
              </div>
              <div class="single-album-card" data-record="12" data-artist="1">
                <img class="single-album-image grid-view-img" src="https://res.cloudinary.com/rjsmedia/image/upload/v1640908505/SONG%20ART/MILES_BIRTH_nhxk0x.jpg" alt="Birth Of The Cool"/>
                <h2 class="single-album-title grid-view-info">Birth Of The Cool</h2>
              </div>
              <div class="single-album-card" data-record="11" data-artist="15">
                <img class="single-album-image grid-view-img" src="https://res.cloudinary.com/rjsmedia/image/upload/v1640908573/SONG%20ART/Ween-White-Pepper_hjebdh.jpg" alt="White Pepper"/>
                <h2 class="single-album-title grid-view-info">White Pepper</h2>
              </div>
              <div class="single-album-card" data-record="4" data-artist="9">
                <img class="single-album-image grid-view-img" src="https://res.cloudinary.com/rjsmedia/image/upload/v1640009429/SONG%20ART/BEE_GEES_SATURDAY_NIGHT_FEVER_l5etco.jpg" alt="Saturday Night Fever" />
                <h2 class="single-album-title grid-view-info">Saturday Night Fever</h2>
              </div>
            </div>
          </div>
        </div>
          <FooterBar />
      </div>

    </>
  )
}

export default Layout