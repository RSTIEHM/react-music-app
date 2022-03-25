import React from 'react'
import MainHeader from '../../components/MainHeader'
const Search = () => {
  return (
    <MainHeader title="SEARCH">
      <div className="main">
        <div className="search search-index">
          <div className="search-container">
                {/* <i className="fa fa-search search-icon"></i>  */}
                <input className="input search-input" type="text" placeholder="Search For An Artist..." value="" />
                <i className="fa fa-search big-search"></i> 
          </div>
        </div>
        <div className="search-results-container"></div>
      </div>
    </MainHeader>
  )
}

export default Search