import React, { useContext, useState, useEffect } from 'react';
import { AuctionsContext } from './AuctionsContext';
import { useParams } from 'react-router-dom';
import styled from 'styled-components';
import axios from 'axios';

const ModifyAuctionItems = () => {
    const [itemsArray] = useContext(AuctionsContext);
    const [auctionItem, setAuctionItem] = useState({first_name: '', avatar: '', email: ''});
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

    const updateDescription = event => {
        setAuctionItem({
            ...auctionItem,
            [event.target.name]: event.target.value
        });
    }

    const updatePrice = event => {
        setAuctionItem({
            ...auctionItem,
            [event.target.name]: event.target.value
        });
    }

    const submitItem = event => {
        event.preventDefault();
        console.log('itemsArray: ', itemsArray[params.itemID]);
        console.log('auctionItem: ', auctionItem);
        axios
            // .put(`https://reqres.in/api/users/${Number(params.itemID-1)}`, {name: auctionItem.first_name, job: auctionItem.avatar})
            ({ method: "PUT", url: `https://silent-auction-kb.herokuapp.com/api/items/${Number(params.itemID)}`, data: auctionItem, withCredentials: true })
            .then(response => console.log('submitItem: ', response))
            .catch(error => console.log('submitItem: ', error));
    }

    return(
        <Section>
            {auctionItem && 
                <section className='item-container'>
                    <div className='name'>Modify {auctionItem.itemName}</div>
                    <img src={auctionItem.imageUrl} alt={auctionItem.itemName}></img>
                    <form className='detail-container' onSubmit={submitItem}>
                        <div className='details'><b>Name:</b></div>
                        <input type='text' name='itemName' placeholder='Name' value={auctionItem.itemName} onChange={updateName}/>
                        <div className='details'><b>Description:</b></div>
                        <input type='textbox' name='description' placeholder='Description' value={auctionItem.description} onChange={updateDescription}/>
                        <div className='details'><b>Starting Price:</b></div>
                        <input type='text' name='startingPrice' placeholder='Starting price' value={auctionItem.startingPrice} onChange={updatePrice}/>
                        <button>Submit</button>
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