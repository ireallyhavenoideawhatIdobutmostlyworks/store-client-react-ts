import React from 'react';
import { Link } from 'react-router-dom';
import PrivatePolicy from '../../privacy_policy/PrivatePolicy';
import './RegisterForm.scss';

const RegisterForm = () => {
    return (
        <React.Fragment>
            <section className='register-form-container'>
                <section className="register-container">
                    <div className="register-form-title-wrapper">
                        <h3>Register now!</h3>
                    </div>
                    <div className="register-form-wrapper">
                        <form className="register-form">
                            <div className="register-form-input-wrapper">
                                <label className="email-label">E-mail address</label>
                                <div className="email-input">
                                    <input type="email" placeholder="Email address..." aria-invalid="false" ></input>
                                </div>
                            </div>
                            <div className='password-input-wrapper'>
                                <label className="email-label">Password</label>
                                <div className="password-input">
                                    <input type="password" placeholder="Password..." aria-invalid="false" ></input>
                                </div>
                            </div>
                            <div className="register-form-action-wrapper">
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

export default RegisterForm;