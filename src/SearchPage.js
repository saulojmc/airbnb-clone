import React from 'react'
import './SearchPage.css';
import { Button } from '@material-ui/core';
import SearchResult from './SearchResult';

function SearchPage() {
  return (
    <div className='searchPage'>
      <div className='searchPage__info' >
        <p>
          62 stays · 27 august to 30 august · 2 guests
        </p>
        <h1>Stays nearby</h1>
        <Button
        variant="outlined"
        >
          Cancellation Flexibility
        </Button>
        <Button
        variant="outlined"
        >
          Type of Place
        </Button>
        <Button
        variant="outlined"
        >
          Price
        </Button>
        <Button
        variant="outlined"
        >
          Rooms and bed
        </Button>
        <Button
        variant="outlined"
        >
          More Filters
        </Button>
      </div>
      <SearchResult />
    </div>
  )
}

export default SearchPage
