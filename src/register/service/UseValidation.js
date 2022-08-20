<<<<<<< HEAD
import { useState } from 'react';

const UseValidation = () => {

    const [isFormValid, setFormValid] = useState(false);
    const [values, setValues] = useState({});
    const [errors, setErrors] = useState({});
=======
import React, { useState } from 'react';
import { TbChevronsDownLeft } from 'react-icons/tb';

// interface RegisterForm {
//     name: string;
//     value: string;
// }

// const test = () => {
//     console.log('dupa')
// }



const UseValidation = (callback) => {

    const [isFormValid, setFormValid] = useState(false);
    const [values, setValues] = useState({});
    const [errors, setErrors] = useState({
        firstName: "",
        lastName: "",
        email: "",
        password: "",
        confirmPassword: ''
    });


>>>>>>> 25ee462ed6170b17acd4403e6dfaa9a886da622b

    const validate = (name, value) => { 
        switch(name) { 
            case 'firstName':
            case 'lastName': { 
                if(/[^a-zA-Z]/.test(value)) {
                    setErrors({...errors, [name]: 'Only alphabetic characters are allowed'});
                    setFormValid(false);
                } else {
                    setErrors({...errors, [name]: ''});
                    setFormValid(true);
                }
                break; 
            } 
            case 'email': { 
                if(!(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(value))) {
                    setErrors({...errors, [name]: 'Incorrect email address'});
                   setFormValid(false);
                } else {
                    setErrors({...errors, [name]: ''});
                    setFormValid(true);
                }
                break; 
            } 
            case 'password': { 
<<<<<<< HEAD
                if(value.length < 8){
=======
                if(value.length < 8 ){
>>>>>>> 25ee462ed6170b17acd4403e6dfaa9a886da622b
                    setErrors({...errors, [name]: 'Password is too short'});
                    setFormValid(false);
                } else {
                    setErrors({...errors, [name]: ''});
                    setFormValid(true);
                }
                break; 
            } 
<<<<<<< HEAD
            case 'confirmPassword': { 
                if(values.password !== value){
                    setErrors({...errors, [name]: 'Confirm password should be same like password'});
                    setFormValid(false);
                } else {
                    setErrors({...errors, [name]: ''});
                    setFormValid(true);
                }
                break; 
            } 
         }
    }

    const onUpdate = (event) => {
        setValues({...values, [event.target.name]: event.target.value});
        validate(event.target.name, event.target.value);
    }

    return {onUpdate, values, errors, isFormValid}
=======
            // case 'confirmPassword': { 
            //     if(valuesRegisterFormPassword !== event.target.value){
            //      //   setErrors({...errors, [event.target.name]: 'Confirm password should be same like password'});
            //      //   setFormValid(false);
            //     } else {
            //        // setErrors({...errors, [event.target.name]: ''});
            //        // setFormValid(true);
            //     }
            //     break; 
            // } 
         }
    }

    const handleChange = (event) => {
        event.persist();

        validate(event.target.name, event.target.value);

        setValues({...values,[event.target.name]: event.target.value})
    }


    const handleSubmit = (event) => {
        event.preventDefault();
        console.log(errors)     
    }

    return {values, errors, handleChange, handleSubmit}
>>>>>>> 25ee462ed6170b17acd4403e6dfaa9a886da622b
}

export default UseValidation