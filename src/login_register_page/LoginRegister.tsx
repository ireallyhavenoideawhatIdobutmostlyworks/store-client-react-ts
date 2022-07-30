import React from 'react';
import Login from './login/Login';
import './LoginRegister.scss';

const LoginRegister = () => {
    return (
        <React.Fragment>
            <section className='login-register-container'>
                <Login></Login>
            </section>
        </React.Fragment>
    )
}

export default LoginRegister;