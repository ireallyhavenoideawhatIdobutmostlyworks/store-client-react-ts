import React from 'react';
import { Link } from 'react-router-dom';
import './Register.scss';

const Register = () => {
    return (
        <React.Fragment>
            <section className='register-container'>
                <div className="register-title-wrapper">
                    <h3>Register</h3>
                </div>
                <div className="register-action-wrapper">
                    <Link to="/register">Register now!</Link>
                    <button>Register</button>
                </div>
            </section>
        </React.Fragment>
    )
}

export default Register;