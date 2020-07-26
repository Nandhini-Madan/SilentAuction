import React from 'react';
import { useParams } from 'react-router-dom';

const DisplayAuctionItem = () => {
    const params = useParams();
    console.log('params: ', params);

    return (
        <div>Display Auction Item #{params.itemID}</div>
    )
}

export default DisplayAuctionItem;