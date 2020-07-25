import React from 'react';
import { Route } from 'react-router-dom';
import AuctionGallery from './components/AuctionGallery';
import DisplayAuctionItems from './components/DisplayAuctionItem';

function App() {
  return (
    <div>
      <Route exact path='/' component={AuctionGallery} />
      <Route path='/item' component={DisplayAuctionItems} />
    </div>
  );
}

export default App;
