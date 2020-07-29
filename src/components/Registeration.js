import React, { useState, useEffect } from "react";
import Input from "./Input";
import axios from "axios";
import * as yup from "yup";
const Registeration = props => {
    //Initial state
    const defaultState = {
        firstName: "",
        lastName: "",
        userName: "",
        email: "",
        password: "",
        retype_password: "",
        type: "seller",
        terms: false
    }
    // Form Schema 
    const FormSchema = yup.object().shape({
        type: yup.string().notRequired(),
        firstName: yup.string().required("Please Enter Your first Name").min(2, "This is not your real name"),
        lastName: yup.string().required("please enter LAstname"),
        userName: yup.string().required("Please Enter Your Name").min(8, "This is not your real name"),
        email:yup.string().email().required("Please Enter email"),
        password: yup.string().required("Please enter a password").matches(
            /^.*(?=.{8,})((?=.*[!@#$%^&*()\-_=+{};:,<.>]){1})(?=.*\d)((?=.*[a-z]){1})((?=.*[A-Z]){1}).*$/,
            "Password must contain at least 8 characters, one uppercase, one lowercase,one number and one special case character"
        ),
        retype_password:yup
                    .string()
                    .required("Please confirm your password")
                    .when("password", {
                        is: password => (FormState.password===FormState.retype_password ? true : false),
                        then: yup.string().oneOf([yup.ref("password")],"Password doesn't match")
                    }),
        terms: yup.boolean().oneOf([true], 'please accept out terms')
    })
    const [FormState, SetFormState] = useState(defaultState);
    const [Error, Seterror] = useState({ ...defaultState, terms: "" });
    const [Disablebutton, SetDisablebutton] = useState(true);


    const inputChange = event => {
       
        if (event.target.type === 'checkbox') {

            console.log("checkbox",event.target.checked);
            SetFormState({
                ...FormState, [event.target.name]: event.target.checked

            })
        } else {
            SetFormState({
                ...FormState,
                [event.target.name]: event.target.value
            })
        }
            
        const value = event.target.type==="checkbox" ? event.target.checked : event.target.value;
       
        event.persist();

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
        //      const handleChange = e => {



        //  }

        console.log("Previous State", FormState);
    }
    useEffect(() => {
        FormSchema.isValid(FormState)
            .then(valid =>
            //       console.log("useeffect valid",valid)
            //   SetDisablebutton(!valid));
            {
                if (FormState.terms && FormState.userName && FormState.firstName && FormState.lastName && FormState.password && FormState.retype_password) {

                    SetDisablebutton(false);
                }
                else if (!FormState.terms || FormState.userName || FormState.firstName || FormState.lastName || FormState.password || FormState.retype_password) {
                    SetDisablebutton(true);
                }
            }
            )

    }, [FormState, FormSchema])

    console.log("After", FormState);

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
                    <input defaultChecked="Seller" type='radio' name='type' onChange={inputChange} data-cy='Seller' value='Seller' />

                    <label> Bidder</label>
                    <input type='radio' name='type' onChange={inputChange} data-cy='Bidder' value='Bidder' />
                </div>
                <Input
                    type="text"
                    name="firstName"
                    onChange={inputChange}
                    value={FormState.firstName}
                    label="First Name"
                    errors={Error}
                />
                <Input
                    type="text"
                    name="lastName"
                    onChange={inputChange}
                    value={FormState.lastName}
                    label="Last Name"
                    errors={Error}
                />
                <Input
                    type="text"
                    name="userName"
                    onChange={inputChange}
                    value={FormState.userName}
                    label=" User Name"
                    errors={Error}
                />
                <Input
                    type="Email"
                    name="email"
                    onChange={inputChange}
                    value={FormState.email}
                    label="Email"
                    errors={Error}
                />
                <Input
                    type="text"
                    name="password"
                    onChange={inputChange}
                    value={FormState.password}
                    label="Password"
                    errors={Error}
                />
                <Input
                    type="text"
                    name="retype_password"
                    onChange={inputChange}
                    value={FormState.retype_password}
                    label="Retype Password"
                    errors={Error}
                />

                <div className="TermsContainer">
                    <input type="checkbox" name="terms" onChange={inputChange} checked={FormState.terms} errors={Error} />
                    <label>Please Accept our Terms and conditions</label>
                </div>
                <button disabled={Disablebutton}>Submit</button>
            </form>
        </div>
    )
}
export default Registeration;