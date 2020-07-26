import React from 'react';
import { Route } from 'react-router-dom';
import AuctionGallery from './components/AuctionGallery';
import DisplayAuctionItem from './components/DisplayAuctionItem';

function App() {
  return (
    <div>
      <Route exact path='/' component={AuctionGallery} />
      {/* <Route path='/item/:itemID' component={DisplayAuctionItem} /> */}
      <Route path='/item/:itemID'>
        <DisplayAuctionItem />
      </Route>
    </div>
  );
}

export default App;
