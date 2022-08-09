import React from 'react';
import { Link } from 'react-router-dom';
import './Register.scss';


const Register = () => {

      

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
                                <label>First name</label>
                                <div>
                                    <input type="text" placeholder="First name..." aria-invalid="false" required="required"></input>
                                    <label>Mandatory</label>
                                </div>
                            </div>
                            <div className="form-input-wrapper">
                                <label>Last name</label>
                                <div>
                                    <input type="text" placeholder="Last name..." aria-invalid="false" required="required"></input>
                                    <label>Mandatory</label>
                                </div>
                            </div>
                            <div className="form-input-wrapper">
                                <label>E-mail address</label> 
                                <div>
                                    <input type="email" placeholder="Email address..." aria-invalid="false" required="required" pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$"></input>                               
                                    <label>Mandatory</label>
                                </div>
                            </div>
                            <div className='form-input-wrapper'>
                                <label>Password</label>   
                                <div>
                                    <input type="password" placeholder="Password..." aria-invalid="false" required="required"></input>                              
                                    <label>Mandatory</label>
                                </div>                       
                            </div>
                            <div className="form-action-wrapper">
                                <button 
                                // onClick={}
                                >Register</button>
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