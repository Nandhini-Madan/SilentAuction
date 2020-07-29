import React, { useContext, useState, useEffect } from 'react';
import { AuctionsContext } from './AuctionsContext';
import { useParams } from 'react-router-dom';
import styled from 'styled-components';

const ModifyAuctionItems = () => {
    const [itemsArray] = useContext(AuctionsContext);
    const [auctionItem, setAuctionItem] = useState({first_name: ''});
    const params = useParams();

    // find item in Context using item ID from params. set to local state.
    useEffect(
        () => {
            setAuctionItem(itemsArray.find(item => item.id === Number(params.itemID)))
        }, [itemsArray, params.itemID]
    )

    const updateName = event => {
        setAuctionItem({
            ...auctionItem,
            [event.target.name]: event.target.value
        });
    }

    const updateAvatar = event => {
        setAuctionItem({
            ...auctionItem,
            [event.target.name]: event.target.value
        });
    }

    const updateEmail = event => {
        setAuctionItem({
            ...auctionItem,
            [event.target.name]: event.target.value
        });
    }

    return(
        <Section>
            {auctionItem && 
                <section className='item-container'>
                    <div className='name'>Modify Auction Item #{params.itemID}</div>
                    <img src={auctionItem.avatar} alt={auctionItem.email}></img>
                    <form className='detail-container'>
                        <div className='details'><b>Name:</b></div>
                        <input type='text' name='first_name' placeholder='Name' value={auctionItem.first_name} onChange={updateName}/>
                        <div className='details'><b>Description:</b></div>
                        <input type='textbox' name='avatar' placeholder='Description' value={auctionItem.avatar} onChange={updateAvatar}/>
                        <div className='details'><b>Starting Price:</b></div>
                        <input type='text' name='email' placeholder='Starting price' value={auctionItem.email} onChange={updateEmail}/>
                    </form>
                </section>
            }
        </Section>
    )
}

const buttonText2 = '#EDEBE1';
const textshadow = '#C05934';
const background3 = '#A59E69';
const containerBorder = '#34362F';

const Section = styled.section`
    // border: 1px solid red;
    padding: 1rem;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    font-family: 'Montserrat', Arial, Helvetica, sans-serif;
    font-size: 1.75rem;
    color: #EDEBE1;

    .item-container {
        // border: 1px solid orange;
        padding: .5rem;
        width: clamp(25rem, 50%, 50rem);
        diplay: flex;
        flex-direction: column;

        .name {
            font-size: 2.25rem;
            text-align: center;
            color: white;
            margin-bottom: 1rem;
            text-shadow: 2px 2px ${textshadow};
        }

        img {
            border-top-left-radius: 1rem;
            border-top-right-radius: 1rem;
            width: 100%;
            border-top: 1px solid ${buttonText2};
            border-right: 1px solid ${buttonText2};
            border-left: 1px solid ${buttonText2};
            border-bottom: 1px solid ${containerBorder};
        }

        .detail-container {
            background: ${background3};
            border-radius: 1rem;
            border: 1px solid ${containerBorder};
            padding: 1rem;
            margin-top: 1rem;
        }

        .details {
            margin-top: 1rem;

            b {
                font-weight: 700;
                color: white;
            }
        }

        @media screen and (max-width: 768px) {
            font-size: 1.5rem;
        }
    }
`
export default ModifyAuctionItems;