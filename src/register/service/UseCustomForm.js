import { useState } from 'react';

const UseCustomForm = () => {

    const [isFormValid, setFormValid] = useState(false);
    const [values, setValues] = useState({});
    const [errors, setErrors] = useState({});

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
                if(value.length < 8){
                    setErrors({...errors, [name]: 'Password is too short'});
                    setFormValid(false);
                } else {
                    setErrors({...errors, [name]: ''});
                    setFormValid(true);
                }
                break; 
            } 
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
}

export default UseCustomForm