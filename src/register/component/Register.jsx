import React from 'react';
import { Link } from 'react-router-dom';
import { RegisterService } from '../service/RegisterService';
import './Register.scss';
import UseValidation from '../service/UseValidation'

const Register = () => {

    const {onUpdate, values, errors, isFormValid} = UseValidation();
  
    const onSubmitForm = event => {
        event.preventDefault();


        if(isFormValid) {
            alert(JSON.stringify(values, null, 2));
        } else {
            alert(JSON.stringify(errors, null, 2));
        }
    };

    return (
        <React.Fragment>
            <section className='form-section'>
                <section className="form-container">
                    <div className="form-title-wrapper">
                        <h3>Register now!</h3>
                    </div>
                    <div>
                        <form className="form-wrapper" onSubmit={handleSubmit}>
                            <div className="form-input-wrapper">
                                <label>First name</label>
                                <div>
                                    <input 
                                        onChange={onUpdate}
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
                                        onChange={onUpdate}
                                        type="text" 
                                        placeholder="Last name..." 
                                        name="lastName">
                                    </input>
                                    <label>                                      
                                        {
                                            errors.lastName && 
                                            <span>{errors.lastName}</span>
                                        }
                                    </label>
                                </div>
                            </div>
                            <div className="form-input-wrapper">
                                <label>Email address</label> 
                                <div>
                                    <input 
                                        onChange={onUpdate}
                                        type="email" 
                                        placeholder="Email address..." 
                                        name="email">
                                    </input>  
                                    <label>                                      
                                        {
                                            errors.email && 
                                            <span>{errors.email}</span>
                                        }
                                    </label>
                                </div>
                            </div>
                            <div className='form-input-wrapper'>
                                <label>Password</label>   
                                <div>
                                    <input 
                                        onChange={onUpdate}
                                        type="password" 
                                        placeholder="Password..." 
                                        name="password">
                                    </input>       
                                    <label>                                      
                                        {
                                            errors.password && 
                                            <span>{errors.password}</span>
                                        }
                                    </label>                   
                                </div>                       
                            </div>
                            <div className='form-input-wrapper'>
                                <label>Confirm password</label>   
                                <div>
                                    <input 
                                        onChange={onUpdate}
                                        type="password" 
                                        placeholder="Confirm password..." 
                                        name="confirmPassword">
                                    </input>     
                                    <label>                                      
                                        {
                                            errors.confirmPassword && 
                                            <span>{errors.confirmPassword}</span>
                                        }
                                    </label>                      
                                </div>                       
                            </div>
                            <div className="form-action-wrapper">
                                <button className='register-button'>Register</button>
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