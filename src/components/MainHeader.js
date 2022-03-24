import React from 'react'

const MainHeader = ({children, title}) => {
  return (
    <>
    <div className="main-wrapper-header">
      <div className="page-header-title">
        <h1 className="page-name">{title}</h1>
      </div>
      {children}
    </div>
    </>
  )
}

export default MainHeader