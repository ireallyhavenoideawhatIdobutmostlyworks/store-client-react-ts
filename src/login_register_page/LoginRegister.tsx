import React from 'react';
import { Link } from 'react-router-dom';
import './LoginRegister.scss';

const LoginRegister = () => {
    return (
        <React.Fragment>
            <section className='form-section'>
                <section className="form-container">
                    <div className="form-title-wrapper">
                        <h3>Login</h3>
                    </div>
                    <div>
                        <form className="form-wrapper">
                            <div className="form-input-wrapper">
                                <label>E-mail address</label>
                                <div>
                                    <input type="email" placeholder="Email address..." aria-invalid="false" ></input>
                                </div>
                            </div>
                            <div className='form-input-wrapper'>
                                <label>Password</label>
                                <div>
                                    <input type="password" placeholder="Password..." aria-invalid="false" ></input>
                                </div>
                            </div>
                            <div className="form-action-wrapper">
                                <Link to="/forgot-password">Forgot password?</Link> 
                                <button>Login</button>
                            </div>
                        </form>
                    </div>
                </section>
                <section className='form-container'>
                    <div className="form-title-wrapper">
                        <h3>Register</h3>
                    </div>
                    <div className="form-wrapper">
                        <div className="form-action-wrapper">
                            <Link to="register">Register now!</Link>
                        </div>
                    </div>
                </section>
            </section>
        </React.Fragment>
    )
}

export default LoginRegister;