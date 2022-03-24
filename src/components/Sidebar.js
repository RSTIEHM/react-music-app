


const Sidebar = () => {

  return (
    <div className="sidebar-nav">
      <img
        className="site-logo"
        src="https://res.cloudinary.com/rjsmedia/image/upload/v1639407817/LogoMakr_j9vkdj.png"
        alt="Logo"
      />
      <div className="group">
        <div className="navItem">
          <a href="/" className={`nav-link`}>
            Search
            <i className="fas fa-search side-bar-search"></i>
          </a>
        </div>
      </div>
      <div className="group">
        <a href="/" className={`nav-link`}>
          Albums
        </a>
      </div>
      <div className="group">
        <a href="/" className={`nav-link`}>
          Playlists
        </a>
      </div>


    </div>
  )
}

export default Sidebar