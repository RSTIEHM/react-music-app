import Navigation from "./Navigation"
import FooterBar from "./FooterBar"

const Layout = ({children}) => {
  return (
    <>
      <div className="app">
        <Navigation />
          {children}
          <FooterBar />
      </div>

    </>
  )
}

export default Layout