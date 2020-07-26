import React from 'react';
import { Route } from 'react-router-dom';
import AuctionGallery from './components/AuctionGallery';
import DisplayAuctionItem from './components/DisplayAuctionItem';
import AuctionsProvider from './components/AuctionsContext';

function App() {
  return (
    <AuctionsProvider>
      <div>
        <Route exact path='/' component={AuctionGallery} />
        {/* <Route path='/item/:itemID' component={DisplayAuctionItem} /> */}
        <Route path='/item/:itemID'>
          <DisplayAuctionItem />
        </Route>
      </div>
    </AuctionsProvider>
  );
}

export default App;
