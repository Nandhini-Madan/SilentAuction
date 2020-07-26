import axios from 'axios';

// function to get auction items for gallery display
    const getItems = () => {
        axios
            .get('https://reqres.in/api/users')
            .then(response => {
                // console.log('axios: ', response.data.data);
                // setItemArray(response.data.data);
                return(response.data.data);
            })
            .catch(error => {
                console.log('axios error: ', error);
            })
    }

    export default getItems;