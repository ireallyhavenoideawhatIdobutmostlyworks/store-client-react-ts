import { React, useState } from 'react';
import { Link } from 'react-router-dom';
import './Register.scss';

const Register = () => {

    // const [form, setForm] = useState({
    //     firstName: "",
    //     lastName: "",
    //     email: "",
    //     password: "",
    //     confirmPassword: ""
    // });

    // const { errors, validateForm, onBlurField } = useLoginFormValidator(form);


    // const onUpdateField = e => {


    //   };

    //   const onSubmitForm = e => {
    //     e.preventDefault();
        

    //     alert(JSON.stringify(form, null, 2));
    //   };
      

    return (
        <React.Fragment>
            <section className='form-section'>
                <section className="form-container">
                    <div className="form-title-wrapper">
                        <h3>Register now!</h3>
                    </div>
                    <div>
                        <form className="form-wrapper" 
                        // onSubmit={onSubmitForm}
                        >
                            <div className="form-input-wrapper">
                                <label>First name</label>
                                <div>
                                    <input type="text" placeholder="First name..." name="firstName" 
                                    // value={form.firstName} onChange={onUpdateField}
                                    ></input>
                                    {/* <label>Mandatory</label> */}
                                </div>
                            </div>
                            <div className="form-input-wrapper">
                                <label>Last name</label>
                                <div>
                                    <input type="text" placeholder="Last name..." name="lastName" 
                                    // value={form.lastName} onChange={onUpdateField}
                                    ></input>
                                    {/* <label>Mandatory</label> */}
                                </div>
                            </div>
                            <div className="form-input-wrapper">
                                <label>E-mail address</label> 
                                <div>
                                    <input 
                                    type="text" placeholder="Email address..." name="email" 
                                    // value={form.email} 
                                    // onBlur={onBlurField} 
                                    // onChange={onUpdateField} 
                                    pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$"
                                    ></input>                               
                                    {/* <label>Mandatory</label> */}
                                </div>
                            </div>
                            <div className='form-input-wrapper'>
                                <label>Password</label>   
                                <div>
                                    <input type="password" placeholder="Password..." name="password" 
                                    // value={form.password} 
                                    // onChange={onUpdateField}
                                    ></input>                              
                                    {/* <label>Mandatory</label> */}
                                </div>                       
                            </div>
                            <div className='form-input-wrapper'>
                                <label>Confirm password</label>   
                                <div>
                                    <input type="password" placeholder="Confirm password..." name="confirmPassword"
                                    //  value={form.confirmPassword} 
                                    //  onChange={onUpdateField}
                                     ></input>                              
                                    {/* <label>Mandatory</label> */}
                                </div>                       
                            </div>
                            <div className="form-action-wrapper">
                                <button type="submit">Register</button>
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