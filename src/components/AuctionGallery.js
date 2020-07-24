import React, { useState, useEffect } from 'react';
import axios from 'axios'; // will upgrade to axiosWithAuth

const AuctionGallery = () => {
    const [itemArray, setItemArray] = useState(); // array of auctions/items

    // function to get auction items for gallery display
    const getItems = () => {
        axios
            .get('https://reqres.in/api/users')
            .then(response => {
                console.log('axios: ', response.data.data);
                setItemArray(response.data.data);
            })
            .catch(error => {
                console.log('axios error: ', error);
            })
    }

    // runs getItems once, when component loads (empty dependency array)
    useEffect(() => {
        getItems();
    }, [])

    // ternary causes items to display if they exist, else displays nothing
    return (
        console.log('in return: ', itemArray),
        <section>
            {(itemArray ?
                itemArray.map(item => (
                    <div key={item.id}>
                        <p>{item.email}</p>
                    </div>
                )) : null)}
        </section>
    )
};

export default AuctionGallery;