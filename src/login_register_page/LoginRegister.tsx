import React from 'react';
import { Link } from 'react-router-dom';
import './LoginRegister.scss';

const LoginRegister = () => {
    return (
        <React.Fragment>
            <section className='form-section'>
                <section className="login-container">
                    <div className="login-title-wrapper">
                        <h3>Login</h3>
                    </div>
                    <div className="login-form-wrapper">
                        <form className="login-form">
                            <div className="login-input-wrapper">
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
                            <div className="login-action-wrapper">
                                <Link to="/forgot-password">Forgot password?</Link> 
                                <button>Login</button>
                            </div>
                        </form>
                    </div>
                </section>
                <section className='register-container'>
                    <div className="register-title-wrapper">
                        <h3>Register</h3>
                    </div>
                    <div className="register-action-wrapper">
                        <Link to="register">Register now!</Link>
                        <button>Register</button>
                    </div>
                </section>
            </section>
        </React.Fragment>
    )
}

export default LoginRegister;