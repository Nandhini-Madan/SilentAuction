import React, { useState, useEffect } from "react";
import Input from "./Input";
import axios from "axios";
import * as yup from "yup";
const Registeration = props => {
    //Initial state
    const defaultState = {
        username: "",
        email: "",
        password: "",
        retype_password: "",
        UserType: "seller",
        Terms: false
    }
    // Form Schema 
    const FormSchema = yup.object().shape({
        UserType: yup.string().notRequired(),
        username: yup.string().required("Please Enter Your Name").min(2, "This is not your real name"),
        email: yup.string().email().required("Please Enter email"),
        password: yup.string().required("Please enter a password") .matches(
            /^.*(?=.{8,})((?=.*[!@#$%^&*()\-_=+{};:,<.>]){1})(?=.*\d)((?=.*[a-z]){1})((?=.*[A-Z]){1}).*$/,
            "Password must contain at least 8 characters, one uppercase, one number and one special case character"
          ),
        retype_password: yup
            .string()
            .required("Please confirm your password")
            .when("Password", {
                is: password => (password && password.length > 0 ? true : false),
                then: yup.string().oneOf([yup.ref("Password")], "Password doesn't match")
            }),
        Terms: yup.boolean().oneOf([true], 'please accept out terms')
    })
    const [FormState, SetFormState] = useState(defaultState);
    const [Error, Seterror] = useState({ ...defaultState });
    const [Disablebutton, SetDisablebutton] = useState(true);
    //Validation
    // const validate=(event)=>{
    //   event.persist();
    //   yup
    //   .reach(FormSchema,event.target.name)
    //   .validate(event.target.value)
    //   .then(valid=> { Seterror({...Error,[event.target.name]:""})})
    //   .catch(err=> { Seterror({...Error,[event.target.name]:err.Error[0]})})

    const inputChange = event => {
        event.persist();
        const value = event.target.value;
       
        yup.reach(FormSchema, event.target.name)
            .validate(value)
            .then(
                valid => {
                    Seterror({ ...Error, [event.target.name]: "" })
                }

            )
            .catch(
                err => {
                    console.log("Previous", err.errors[0]);
                    //  console.log("Error",err.Error);
                    Seterror({ ...Error, [event.target.name]: err.errors[0] })
                }

            )
            

        SetFormState({
            ...FormState,
            [event.target.name]: event.target.value
        })

        console.log(FormState);
    }
    useEffect(() => {
        FormSchema.isValid(FormState)
            .then(valid =>

                SetDisablebutton(!valid));
    }, [FormState, FormSchema])

    const SubmitForm = event => {
        event.preventDefault();
        console.log("Formdata", FormState);
        axios.post("https://reqres.in/api/users", FormState)
            .then(() => console.log('Form Submitted'))
            .catch(err => console.log('There was a error in form', err));
    }
    return (
        <div className="formContainer">
            <form onSubmit={SubmitForm}>

                <div className="RadioContainer">
                    <label>Seller</label>
                    <input defaultChecked="Seller" type='radio' name='UserType' onChange={inputChange} data-cy='Seller' value='Seller' />

                    <label> Bidder</label>
                    <input type='radio' name='UserType' onChange={inputChange} data-cy='Bidder' value='Bidder' />
                </div>

                <Input
                    type="text"
                    name="username"
                    onChange={inputChange}
                    value={FormState.Name}
                    label="Name"
                    errors={Error}
                />
                <Input
                    type="email"
                    name="email"
                    onChange={inputChange}
                    value={FormState.Email}
                    label="Email"
                    errors={Error}
                />
                <Input
                    type="password"
                    name="password"
                    onChange={inputChange}
                    value={FormState.Password}
                    label="Password"
                    errors={Error}
                />
                <Input
                    type="password"
                    name="retype_password"
                    onChange={inputChange}
                    value={FormState.Retype_Password}
                    label="Retype Password"
                    errors={Error}
                />
                <div className="TermsContainer">
                <input type="checkbox" name="Terms" onChange={inputChange} value={true} errors={Error} />
                <label>Please Accept our Terms and conditions</label>
                </div>
                <button disabled={Disablebutton}>Submit</button>
            </form>
        </div>
    )
}
export default Registeration;