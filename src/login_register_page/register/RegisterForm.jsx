import React from 'react';
import { Link } from 'react-router-dom';
import PrivatePolicy from '../../privacy_policy/PrivatePolicy';
import './RegisterForm.scss';

const RegisterForm = () => {
    return (
        <React.Fragment>
            <section className='form-section'>
                <section className="form-container">
                    <div className="form-title-wrapper">
                        <h3>Register now!</h3>
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
                                <button>Register</button>
                            </div>
                        </form>
                    </div>
                </section>
                <section className="form-container">
                    <div className="form-title-wrapper">
                        <h3>Private Policy</h3>
                    </div>
                    <div>
                        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry Lorem Ipsum is simply dummy text of the printing and typesetting industry Lorem Ipsum is simply dummy text of the printing and typesetting industryLorem Ipsum...</p>
                    </div>
                    <div className="form-wrapper">
                        <div className="form-action-wrapper">
                            <Link to="private-policy">Full private policy</Link>
                        </div>
                    </div>
                </section>
            </section>
        </React.Fragment>
    )
}

export default RegisterForm;