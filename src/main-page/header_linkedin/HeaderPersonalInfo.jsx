import React from 'react';
import './HeaderPersonalInfo.scss';
import {BsLinkedin} from 'react-icons/bs';
import {MdEmail} from 'react-icons/md';

const HeaderPersonalInfo = () => {
    return (
        <React.Fragment>
            <header className='header-personal-info-container'>
                <address className='header-email-wrapper'>
                    <MdEmail className='email-icon'/>
                    <a href="mailto:urbaniak.michal@yahoo.com">Send Email</a>
                </address>
                <address className='header-linkedin-wrapper'> 
                    <BsLinkedin className="linkedin-icon"/>
                    <a href='https://www.linkedin.com/in/urltomichalurbaniakprofile/' target="_blank">My Linkedin profile :)</a>
                </address>
            </header>
        </React.Fragment>
    )
}

export default HeaderPersonalInfo;