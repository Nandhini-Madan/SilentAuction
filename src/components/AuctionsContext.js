import React, { useState, useEffect, createContext } from 'react';
import axios from 'axios'; // will upgrade to axiosWithAuth

// context (shares provider data to components)
export const AuctionsContext = createContext();

// provider (holds the data for contect to share)
export const AuctionsProvider = (props) => {
    const [itemsArray, setItemsArray] = useState([{}]);

    // function to get auction items for gallery display
    const getItems = () => {
        axios
        .get('https://silent-auction-kb.herokuapp.com/api/items', {withCredentials: true})
            .then(response => {
                console.log('axios in context: ', response.data);
                setItemsArray(response.data);
            })
            .catch(error => {
                console.log('axios error: ', error);
            })

        
    }

    // initial axios call. runs once (dependency array)
    useEffect(() => {
        getItems();
    }, [])

    // console.log('Auction Items: ', itemsArray)

    return (
        // shares context/state to all child components
        <AuctionsContext.Provider value={[itemsArray, setItemsArray]}>
            {props.children}
        </AuctionsContext.Provider>
    )
}