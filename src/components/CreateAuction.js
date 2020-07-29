import React, { useState, useEffect } from 'react';
import UploadImage from './UploadImage';
import * as yup from 'yup';
import Input from './Input';
import axios from 'axios';
import AuctionCard from './AuctionCard';

function CreateAuction(props) {
    const defaultState = {
        itemName: "",
        description: "",
        startingPrice: "", 
        imageUrl: ""
    };

    const [formState, setFormState] = useState(defaultState);
    const [errors, setErrors] = useState(defaultState);
    const [buttonDisabled, setButtonDisabled] = useState(true);
    const [auctions, setAuctions] = useState([]);

    let formSchema = yup.object().shape({
        itemName: yup
            .string()
            .required('Item Name is required'),
        description: yup
            .string()
            .required('Please add a description')
            .max(100, "Maximum of 50 characters for description"),
        startingPrice: yup
            .string()
            .required('Price in $ is required')
    });

    //State set for the add button to be enabled or disabled
    useEffect(() => {
        if (formState.itemName && formState.description && formState.startingPrice) {
            setButtonDisabled(false);
        }
        else if (!formState.itemName || !formState.description || !formState.startingPrice) {
            setButtonDisabled(true);
        }
    }, [formState]);

    const formSubmit = e => {
        e.preventDefault();
        console.log('Form submitted');
        axios
            .post("https://reqres.in/api/users", formState)
            .then((res) => {console.log('form submit success', res)
                setAuctions([...auctions, res.data])})
            .catch(err => console.log('Form submission error', err));
            resetState();
    };

    const resetState = () => {
        setFormState({
            itemName: "",
            description: "",
            startingPrice: "", 
            imageUrl: ""
        });
        console.log(formState);
    };

    const inputChange = e => {
        e.persist();
        let value = e.target.value;
        yup.reach(formSchema, e.target.name)
        .validate(value)
        .then(valid => {
            setErrors({
                ...errors,
                [e.target.name]: ""
            })
        })
        .catch(err => {
            setErrors({
                ...errors,
                [e.target.name]: err.errors[0]
            })
        })
        setFormState({
            ...formState,
            [e.target.name]: value
        });
        console.log(formState);
    };

    
    return (
        <div className="formContainer">
            <form onSubmit={formSubmit}>
                <Input
                    type="text"
                    name="itemName"
                    onChange={inputChange}
                    value={formState.itemName}
                    label="Item Name"
                    errors={errors}
                    />
                <Input
                    type="text"
                    name="description"
                    onChange={inputChange}
                    value={formState.description}
                    label="Description"
                    errors={errors}
                    />
                <Input
                    type="text"
                    name="startingPrice"
                    onChange={inputChange}
                    value={formState.startingPrice}
                    label="Starting Price"
                    errors={errors}
                    />
                <UploadImage formState={formState} setFormState={setFormState}/>
                <button disabled={buttonDisabled}>Create Auction</button>
            </form>
            <AuctionCard auctions={auctions} />
        </div>
    )
};

export default CreateAuction;