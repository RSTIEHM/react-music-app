import Navigation from "./Navigation"
import FooterBar from "./FooterBar"


const Layout = ({children}) => {
  return (
    <>
      <div className="app">
        <Navigation />
        <div className="main">
          <div className='home home-index'>
            {children}
          </div>
        </div>
        <FooterBar />
      </div>

    </>
  )
}

export default Layout