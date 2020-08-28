import React, { useState } from 'react';
import './Banner.css';
import './Search.css';
import { Button } from "@material-ui/core";
import Search from './Search';
import { useHistory } from 'react-router-dom';


function Banner() {
  const history = useHistory();
  const [showSearch, setshowSearch] = useState(false);

  return (
    <div className='banner'>
      <div className='banner__search'>
        <Button onClick={() => setshowSearch(!showSearch)} className='banner__searchButton' variant="outlined">{showSearch ? "Hide" : "Search Date"}</Button>
        {showSearch && <Search />}
      </div>
      <div className='banner__info'>
        <h1>Get out and stretch your imagination</h1>
        <h5>Plan a differnte kind of a getaway</h5>
        <Button onClick={() => history.push('/search')} variant="outlined">Explore Nearby</Button>
      </div>
        
    </div>
  )
}

export default Banner
