import React from 'react';
import { Link } from 'react-router-dom';
import { RegisterService } from '../service/RegisterService';
import './Register.scss';
import UseValidation from '../service/UseValidation'
<<<<<<< HEAD

const Register = () => {

    const {onUpdate, values, errors, isFormValid} = UseValidation();
  
    const onSubmitForm = event => {
        event.preventDefault();


        if(isFormValid) {
            alert(JSON.stringify(values, null, 2));
        } else {
            alert(JSON.stringify(errors, null, 2));
        }
=======
import test from '../service/UseValidation'

const Register = () => {

    const [isFormValid, setFormValid] = useState(false);

    const [valuesRegisterForm, setValuesRegisterForm] = useState({
        firstName: "",
        lastName: "",
        email: "",
        password: "",
        confirmPassword: ""
    });

    // const [errors, setErrors] = useState({
    //     firstName: "",
    //     lastName: "",
    //     email: "",
    //     password: "",
    //     confirmPassword: ''
    // });

    
    
    const {handleChange, values, errors, handleSubmit} = UseValidation();
  


    const onUpdateField = event => {

        setValuesRegisterForm({...valuesRegisterForm, [event.target.name]: event.target.value});

        // switch(event.target.name) { 
        //     case 'firstName':
        //     case 'lastName': { 
        //         if(/[^a-zA-Z]/.test(event.target.value)) {
        //             setErrors({...errors, [event.target.name]: 'Only alphabetic characters are allowed'});
        //             setFormValid(false);
        //         } else {
        //             setErrors({...errors, [event.target.name]: ''});
        //             setFormValid(true);
        //         }
        //         break; 
        //     } 
        //     case 'email': { 
        //         if(!(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(event.target.value))) {
        //             setErrors({...errors, [event.target.name]: 'Incorrect email address'});
        //             setFormValid(false);
        //         } else {
        //             setErrors({...errors, [event.target.name]: ''});
        //             setFormValid(true);
        //         }
        //         break; 
        //     } 
        //     case 'password': { 
        //         if(event.target.value.length < 8){
        //             setErrors({...errors, [event.target.name]: 'Password is too short'});
        //             setFormValid(false);
        //         } else {
        //             setErrors({...errors, [event.target.name]: ''});
        //             setFormValid(true);
        //         }
        //         break; 
        //     } 
        //     case 'confirmPassword': { 
        //         if(valuesRegisterForm.password !== event.target.value){
        //             setErrors({...errors, [event.target.name]: 'Confirm password should be same like password'});
        //             setFormValid(false);
        //         } else {
        //             setErrors({...errors, [event.target.name]: ''});
        //             setFormValid(true);
        //         }
        //         break; 
        //     } 
        //  }

    };

    const onSubmitForm = event => {
        event.preventDefault();

        if(isFormValid) {
            alert(JSON.stringify(valuesRegisterForm, null, 2));
        } else {
            alert(JSON.stringify('inwalid form', null, 2));
        }



        
>>>>>>> 25ee462ed6170b17acd4403e6dfaa9a886da622b
    };

    return (
        <React.Fragment>
            <section className='form-section'>
                <section className="form-container">
                    <div className="form-title-wrapper">
                        <h3>Register now!</h3>
                    </div>
                    <div>
                        <form className="form-wrapper" onSubmit={handleSubmit}>
                            <div className="form-input-wrapper">
                                <label>First name</label>
                                <div>
                                    <input 
<<<<<<< HEAD
                                        onChange={onUpdate}
=======
                                        onChange={handleChange}
>>>>>>> 25ee462ed6170b17acd4403e6dfaa9a886da622b
                                        type="text" 
                                        placeholder="First name..." 
                                        name="firstName">
                                    </input>
                                    <label>                                      
                                        {
                                            errors.firstName && 
                                            <span>{errors.firstName}</span>
                                        }
                                    </label>
                                </div>
                            </div>
                            <div className="form-input-wrapper">
                                <label>Last name</label>
                                <div>
                                    <input 
<<<<<<< HEAD
                                        onChange={onUpdate}
=======
                                        onChange={handleChange}
>>>>>>> 25ee462ed6170b17acd4403e6dfaa9a886da622b
                                        type="text" 
                                        placeholder="Last name..." 
                                        name="lastName">
                                    </input>
                                    <label>                                      
                                        {
                                            errors.lastName && 
                                            <span>{errors.lastName}</span>
                                        }
                                    </label>
                                </div>
                            </div>
                            <div className="form-input-wrapper">
                                <label>Email address</label> 
                                <div>
                                    <input 
<<<<<<< HEAD
                                        onChange={onUpdate}
=======
                                        onChange={handleChange}
>>>>>>> 25ee462ed6170b17acd4403e6dfaa9a886da622b
                                        type="text" 
                                        placeholder="Email address..." 
                                        name="email">
                                    </input>  
                                    <label>                                      
                                        {
                                            errors.email && 
                                            <span>{errors.email}</span>
                                        }
                                    </label>
                                </div>
                            </div>
                            <div className='form-input-wrapper'>
                                <label>Password</label>   
                                <div>
                                    <input 
<<<<<<< HEAD
                                        onChange={onUpdate}
=======
                                        onChange={handleChange}
>>>>>>> 25ee462ed6170b17acd4403e6dfaa9a886da622b
                                        type="password" 
                                        placeholder="Password..." 
                                        name="password">
                                    </input>       
                                    <label>                                      
                                        {
                                            errors.password && 
                                            <span>{errors.password}</span>
                                        }
                                    </label>                   
                                </div>                       
                            </div>
                            <div className='form-input-wrapper'>
                                <label>Confirm password</label>   
                                <div>
                                    <input 
<<<<<<< HEAD
                                        onChange={onUpdate}
=======
<<<<<<< HEAD
                                        onChange={handleChange}
=======
                                        onChange={onUpdateField}
                                        value={valuesRegisterForm.confirmPassword}
>>>>>>> bff8123036ea922f215160ea3437c7c2d1108be2
>>>>>>> 25ee462ed6170b17acd4403e6dfaa9a886da622b
                                        type="password" 
                                        placeholder="Confirm password..." 
                                        name="confirmPassword">
                                    </input>     
                                    <label>                                      
                                        {
                                            errors.confirmPassword && 
                                            <span>{errors.confirmPassword}</span>
                                        }
                                    </label>                      
                                </div>                       
                            </div>
                            <div className="form-action-wrapper">
                                <button className='register-button'>Register</button>
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