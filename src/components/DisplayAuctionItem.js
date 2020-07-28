import React, { useContext, useState, useEffect } from 'react';
import { AuctionsContext } from './AuctionsContext';
import { useParams, Link } from 'react-router-dom';
import styled from 'styled-components';

const DisplayAuctionItem = () => {
    const [itemsArray] = useContext(AuctionsContext);
    const params = useParams();
    const [auctionItem, setAuctionItem] = useState({});

    // find item in Context using item ID from params. set to local state.
    useEffect(
        () => {
            setAuctionItem(itemsArray.find(item => item.id === Number(params.itemID)))
        }, [itemsArray, params.itemID]
    )

    return (
        <Section>
            {auctionItem && 
                <section className='item-container'>
                    <div className='name'>Auction Item #{params.itemID}</div>
                    <img src={auctionItem.avatar} alt={auctionItem.email}></img>
                    <div>Description: {auctionItem.first_name} {auctionItem.last_name}</div>
                    <div>Starting Price: {auctionItem.email}</div>
                    <div className='button-holder'>
                        <Link to={`/auctions`}><button>Return to auction list</button></Link>
                    </div>
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
    font-family: 'Montserrat', Arial, Helvetica, sans-serif;
    font-size: 1.75rem;
    color: #EDEBE1;

    .item-container {
        border: 1px solid orange;
        padding: .5rem;
        width: clamp(25rem, 50%, 50rem);
        diplay: flex;
        flex-direction: column;

        .name {
            font-size: 2.25rem;
            text-align: center;
        }

        img {
            border-top-left-radius: 1rem;
            border-top-right-radius: 1rem;
            width: 100%;
        }

        .button-holder {
            display: flex;
            justify-content: center;
        }

        button {
            width: 16rem;
            margin-top: 1rem;
            border-radius: 1rem;
            font-size: 1.25rem;
            :hover {
                background: black;
                color: white;
            }
        }
    }
`
export default DisplayAuctionItem;