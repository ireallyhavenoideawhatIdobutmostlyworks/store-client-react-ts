import React from 'react';
import Login from './login/Login';
import './LoginRegister.scss';
import Register from './register/Register';

const LoginRegister = () => {
    return (
        <React.Fragment>
            <section className='login-register-container'>
                <Login></Login>
                <Register></Register>
            </section>
        </React.Fragment>
    )
}

export default LoginRegister;