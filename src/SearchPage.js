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
      <SearchResult 
        img="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQ_wbPYTxQPMcBh7SPzLFActXnP3uhifeVT_g&usqp=CAU"
        location="Private room in center of London"
        title="Stay at this spacious Saulo House"
        description="1 guest · 1 bedroom · 1 bed · Wifi · kitchen · Washing Machine"
        star={4.73}
        price="£30 / night"
        total="£117 total"
      />
      <SearchResult 
        img="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQ_wbPYTxQPMcBh7SPzLFActXnP3uhifeVT_g&usqp=CAU"
        location="Private room in center of London"
        title="Stay at this spacious Saulo House"
        description="1 guest · 1 bedroom · 1 bed · Wifi · kitchen · Washing Machine"
        star={3.85}
        price="£25 / night"
        total="£100 total"
      />
      <SearchResult 
        img="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQ_wbPYTxQPMcBh7SPzLFActXnP3uhifeVT_g&usqp=CAU"
        location="Private room in center of London"
        title="Stay at this spacious Saulo House"
        description="1 guest · 1 bedroom · 1 bed · Wifi · kitchen · Washing Machine"
        star={3.85}
        price="£25 / night"
        total="£100 total"
      />
      <SearchResult 
        img="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQ_wbPYTxQPMcBh7SPzLFActXnP3uhifeVT_g&usqp=CAU"
        location="Private room in center of London"
        title="Stay at this spacious Saulo House"
        description="1 guest · 1 bedroom · 1 bed · Wifi · kitchen · Washing Machine"
        star={3.85}
        price="£25 / night"
        total="£100 total"
      />
    </div>
  )
}

export default SearchPage
