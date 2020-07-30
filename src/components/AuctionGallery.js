import React, { useContext } from 'react';
import { AuctionsContext } from './AuctionsContext';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const AuctionGallery = () => {
    // replaced useState with useContext and AuctionsContext
    const [itemsArray] = useContext(AuctionsContext);
    

    // ternary causes items to display if they exist, else displays nothing
    // Link sets path in browser to /item/ and the unique item ID
    return (
        // console.log('in return: ', itemsArray),
        <Section>
            {(itemsArray ?
                itemsArray.map(item => (
                    // "to" string literal populates first param. It dynamically
                    // modifies URL, which useParam reads in DisplayAuctionItem.
                    <Link to={`/auctions/${item.id}`} key={item.id}>
                        <div className='item-container'>
                            <img src={item.avatar} alt={item.email}></img>
                            <p className='title'>{item.email}</p>
                        </div>
                    </Link>
                )) : null
            )}
        </Section>
    )
};

const Section = styled.section`
    // border: 1px solid red;
    padding: 1rem;
    display: flex;
    flex-wrap: wrap;

    .item-container {
        // border: 1px solid orange;
        margin: .5rem;
        width: 25rem;
        diplay: flex;
        flex-direction: column;
        position: relative;
        text-align: center;

        img {
            border-top-left-radius: 1rem;
            border-top-right-radius: 1rem;
            width: 100%;
            opacity: .6;
            cursor: pointer;
            :hover {
                opacity: 1;
            }
        }

        .title {
            width: 100%;
            color: white;
            background: rgba(0,0,0,0.65);
            position: absolute;
            top: 75%;
            left: 50%;
            transform: translate(-50%, -50%);
            font-family: 'Montserrat', Arial, Helvetica, sans-serif;
            font-size: 1.25rem;
        }
    }
`
export default AuctionGallery;