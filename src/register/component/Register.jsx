import { FALSE } from 'node-sass';
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

    const [errors, setErrors] = useState({
        firstName: "",
        lastName: "",
        email: "",
        password: "",
        confirmPassword: ""
    });

    const onUpdateField = event => {

        setValuesRegisterForm({...valuesRegisterForm, [event.target.name]: event.target.value});

        // console.log(!/[^a-zA-Z]/.test(event.target.value))
        
        if(/[^a-zA-Z]/.test(event.target.value)){
            setErrors({[event.target.name]:'Only alphabetic characters required' + " " + [event.target.name]})
        }


   
            
    };

    const onSubmitForm = event => {



        if(valuesRegisterForm.firstName.length < 4){
            setErrors({[errors.firstName]:'firstName'})}

        // if(valuesRegisterForm.lastName.length < 4){
        //     setErrors({...errors,[event.target.name]:'lastName'})}

        // if(valuesRegisterForm.email.length < 4){
        //     setErrors({...errors,[event.target.name]:'email'})}

        // if(valuesRegisterForm.password.length < 4){
        //     setErrors({...errors,[event.target.name]:'password'})}

        // if(valuesRegisterForm.confirmPassword.length < 4){
        //     setErrors({...errors,[event.target.name]:'confirmPassword'})}

        console.log(errors.firstName)
        console.log([event.target.name])

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
                                        className={valuesRegisterForm.firstName ? '' : 'empty'}
                                        onChange={onUpdateField}
                                        value={valuesRegisterForm.firstName}
                                        type="text" 
                                        placeholder="First name..." 
                                        name="firstName">
                                    </input>
                                    <label>                                      
                                        {
                                            errors.firstName && 
                                            <span>{errors.firstName}</span>
                                        }
                                    </label>
                                </div>
                            </div>
                            <div className="form-input-wrapper">
                                <label>Last name</label>
                                <div>
                                    <input 
                                        className={valuesRegisterForm.lastName ? '' : 'empty'}
                                        onChange={onUpdateField}
                                        value={valuesRegisterForm.lastName}
                                        type="text" 
                                        placeholder="Last name..." 
                                        name="lastName">
                                    </input>
                                        {
                                            errors.lastName && 
                                            <span>{errors.lastName}</span>
                                        }
                                </div>
                            </div>
                            <div className="form-input-wrapper">
                                <label>Email address</label> 
                                <div>
                                    <input 
                                        className={valuesRegisterForm.email ? '' : 'empty'}
                                        onChange={onUpdateField}
                                        value={valuesRegisterForm.email}
                                        type="text" 
                                        placeholder="Email address..." 
                                        name="email">
                                    </input>  
                                        {
                                            errors.email && 
                                            <span>{errors.email}</span>
                                        }
                                </div>
                            </div>
                            <div className='form-input-wrapper'>
                                <label>Password</label>   
                                <div>
                                    <input 
                                        className={valuesRegisterForm.password ? '' : 'empty'}
                                        onChange={onUpdateField}
                                        value={valuesRegisterForm.password}
                                        type="password" 
                                        placeholder="Password..." 
                                        name="password">
                                    </input>       
                                        {
                                            errors.password && 
                                            <span>{errors.password}</span>
                                        }                       
                                </div>                       
                            </div>
                            <div className='form-input-wrapper'>
                                <label>Confirm password</label>   
                                <div>
                                    <input 
                                        className={valuesRegisterForm.confirmPassword ? '' : 'empty'}
                                        onChange={onUpdateField}
                                        value={valuesRegisterForm.confirmPassword}
                                        type="password" 
                                        placeholder="Confirm password..." 
                                        name="confirmPassword">
                                    </input>     
                                    {
                                        errors.confirmPassword && 
                                        <span>{errors.confirmPassword}</span>
                                    }                         
                                </div>                       
                            </div>
                            <div className="form-action-wrapper">
                                <button 
                                    disabled=
                                        { 
                                            valuesRegisterForm.firstName === "" || 
                                            valuesRegisterForm.lastName === "" || 
                                            valuesRegisterForm.email === "" ||
                                            valuesRegisterForm.password === "" ||
                                            valuesRegisterForm.confirmPassword === ""
                                        }>Register
                                </button>
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