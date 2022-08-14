import { React, useState } from 'react';
import { Link } from 'react-router-dom';
import './Register.scss';

const Register = () => {

    const [registerForm, setRegisterForm] = useState({
        firstName: "",
        lastName: "",
        email: "",
        password: "",
        confirmPassword: ""
    });

     const onUpdateField = e => {


    };

      

    

    const onSubmitForm = e => {
        e.preventDefault();
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
                                        value={firstName}
                                        type="text" 
                                        placeholder="First name..." 
                                        name="firstName">
                                    </input>
                                </div>
                            </div>
                            <div className="form-input-wrapper">
                                <label>Last name</label>
                                <div>
                                    <input 
                                        onChange={onUpdateField}
                                        value={lastName}
                                        type="text" 
                                        placeholder="Last name..." 
                                        name="lastName">
                                    </input>
                                </div>
                            </div>
                            <div className="form-input-wrapper">
                                <label>E-mail address</label> 
                                <div>
                                    <input 
                                        onChange={onUpdateField}
                                        value={email}
                                        type="email" 
                                        placeholder="Email address..." 
                                        name="email">
                                    </input>                               
                                </div>
                            </div>
                            <div className='form-input-wrapper'>
                                <label>Password</label>   
                                <div>
                                    <input 
                                        onChange={onUpdateField}
                                        value={password}
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
                                        value={confirmPassword}
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