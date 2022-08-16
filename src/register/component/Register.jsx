import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { RegisterService } from '../service/RegisterService';
import './Register.scss';

const Register = () => {

    const [valuesRegisterForm, setValuesRegisterForm] = useState({
        firstName: "",
        lastName: "",
        email: "",
        password: "",
        confirmPassword: ""
    });

    
    
    const [error, setError] = useState(null);

    const test = new RegisterService();

    const onUpdateField = event => {

        console.log(test.isFieldValid(event.target.value) + " " + event.target.name)

        if (!test.isValidEmail(event.target.value)) {
            setError('Email is invalid');
        } else {
            setError(null);
        }

        if (!test.isFieldValid(event.target.value)) {
            setError('Field is invalid');
        } else {
            setError(null);
        }

     


        setValuesRegisterForm({...valuesRegisterForm, [event.target.name]: event.target.value});
    };

    const onSubmitForm = event => {
        event.preventDefault();
        alert(JSON.stringify(valuesRegisterForm, null, 2));
    };

    
    

    return (
        <React.Fragment>
            <section className='form-section'>
                <section className="form-container">
                    <div className="form-title-wrapper">
                        <h3>Register now!</h3>
                    </div>
                    <div>
                        <form className="form-wrapper" onSubmit={onSubmitForm}>
                            <div className="form-input-wrapper">
                                <label>First name</label>
                                <div>
                                    <input 
                                        onChange={onUpdateField}
                                        value={valuesRegisterForm.firstName}
                                        type="text" 
                                        placeholder="First name..." 
                                        name="firstName">
                                    </input>
                                    <label>
                                        {
                                            error && 
                                            <span>{valuesRegisterForm.firstName}</span>
                                        }
                                    </label>
                                </div>
                            </div>
                            <div className="form-input-wrapper">
                                <label>Last name</label>
                                <div>
                                    <input 
                                        onChange={onUpdateField}
                                        value={valuesRegisterForm.lastName}
                                        type="text" 
                                        placeholder="Last name..." 
                                        name="lastName">
                                    </input>
                                </div>
                            </div>
                            <div className="form-input-wrapper">
                                <label>Email address</label> 
                                <div>
                                    <input 
                                        onChange={onUpdateField}
                                        value={valuesRegisterForm.email}
                                        type="email" 
                                        placeholder="Email address..." 
                                        name="email">
                                    </input>  
                                    <label>{error && <span>{error}</span>}</label>
                                </div>
                            </div>
                            <div className='form-input-wrapper'>
                                <label>Password</label>   
                                <div>
                                    <input 
                                        onChange={onUpdateField}
                                        value={valuesRegisterForm.password}
                                        type="password" 
                                        placeholder="Password..." 
                                        name="password">
                                    </input>                              
                                </div>                       
                            </div>
                            <div className='form-input-wrapper'>
                                <label>Confirm password</label>   
                                <div>
                                    <input 
                                        onChange={onUpdateField}
                                        value={valuesRegisterForm.confirmPassword}
                                        type="password" 
                                        placeholder="Confirm password..." 
                                        name="confirmPassword">
                                    </input>                              
                                </div>                       
                            </div>
                            <div className="form-action-wrapper">
                                <button>Register</button>
                            </div>
                        </form>
                    </div>
                </section>
                <section className='register-private-policy-container'>
                    <div className="register-private-policy-title-wrapper">
                        <h3>Private Policy</h3>
                    </div>
                    <div>
                        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry Lorem Ipsum is simply dummy text of the printing and typesetting industry Lorem Ipsum is simply dummy text of the printing and typesetting industryLorem Ipsum...</p>
                    </div>
                    <div className="register-private-policy-action-wrapper">
                        <Link to="private-policy">Full Private Policy</Link>
                    </div>
                </section>
            </section>
        </React.Fragment>
    )
}

export default Register;