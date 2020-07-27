import React, { useContext, useState, useEffect } from 'react';
import { AuctionsContext } from './AuctionsContext';
import { useParams } from 'react-router-dom';

const DisplayAuctionItem = () => {
    const [itemsArray, setItemsArray] = useContext(AuctionsContext);
    const params = useParams();
    const [auctionItem, setAuctionItem] = useState({});
    // console.log('params: ', params);
    // console.log('Auction Items: ', itemsArray)
    // let auctionItem = itemsArray[Number(params.itemID - 1)]
    // console.log('auctionItem: ', auctionItem)
    // console.log(auctionItem.id)

    useEffect(
        () => {
            setAuctionItem(itemsArray.find(x => x.id === Number(params.itemID)))
        }, [params.itemsID]
    )

    return (
        <section>
            <div>Display Auction Item #{params.itemID}</div>
            {auctionItem && 
                <section>
                    <img src={auctionItem.avatar} alt={auctionItem.email}></img>
                    <div>name: {auctionItem.first_name} {auctionItem.last_name}</div>
                    <div>email: {auctionItem.email}</div>
                </section>
            }
        </section>
    )
}

export default DisplayAuctionItem;