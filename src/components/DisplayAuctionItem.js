import React, { useContext, useState, useEffect } from 'react';
import { AuctionsContext } from './AuctionsContext';
import { useParams } from 'react-router-dom';
import styled from 'styled-components';

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
        <Section>
            {auctionItem && 
                <section className='item-container'>
                    <div className='name'>Auction Item #{params.itemID}</div>
                    <img src={auctionItem.avatar} alt={auctionItem.email}></img>
                    <div>Description: {auctionItem.first_name} {auctionItem.last_name}</div>
                    <div>Starting Price: {auctionItem.email}</div>
                </section>
            }
        </Section>
    )
}

const Section = styled.section`
    border: 1px solid red;
    padding: 1rem;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;

    .item-container {
        border: 1px solid orange;
        padding: .5rem;
        width: clamp(15rem, 50%, 30rem);
        diplay: flex;
        flex-direction: column;
        position: relative;

        .name {
            font-size: 2rem;
            text-align: center;
        }

        img {
            border-top-left-radius: 1rem;
            border-top-right-radius: 1rem;
            width: 100%;
        }
    }
`
export default DisplayAuctionItem;