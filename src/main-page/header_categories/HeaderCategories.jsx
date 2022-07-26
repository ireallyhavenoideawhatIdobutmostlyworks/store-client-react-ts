import React from 'react';
import {Link} from 'react-router-dom';
import logo from '../../main-page/logo.png'
import {AiOutlineUser} from 'react-icons/ai';
import {BsSearch, BsBasket3} from 'react-icons/bs';
import './HeaderCategories.scss';


const HeaderCategories = () => {
    return (
        <React.Fragment>
            <header className='header-categories-container'>
                <section className='header-categories-wrapper'>
                    <nav className='header-logo'>
                        <Link className='header-logo-link' to='/'>E-Store</Link>
                    </nav>
                    <nav className='header-categories'>
                        <Link className='header-categories-link' to='/electronics'>Electronics</Link>
                        <Link className='header-categories-link' to='/for-home'>For Home</Link>
                        <Link className='header-categories-link' to='/dyi'>DIY</Link>
                        <Link className='header-categories-link' to='/wport'>Sport</Link>
                        <Link className='header-categories-link' to='/supply'>Supply</Link>
                        <Link className='header-categories-link' to='/extra'>Extra</Link>
                        <Link className='header-categories-link' to='/outdoor'>Outdoor</Link>
                        <Link className='header-categories-link' to='/fire-sale'>Fire Sale</Link>
                        <Link className='header-categories-link' to='/all'>All</Link>
                    </nav>
                    <nav className='header-options'>
                        <div className='search'>
                            <Link to='/search'><BsSearch className="header-user-tools-icon"/></Link> 
                        </div>
                        <div className='login-register'>
                            <Link to='/user'><AiOutlineUser className="header-user-tools-icon"/></Link> 
                        </div>
                        <div className='cart'>
                            <Link to='/cart'><BsBasket3 className="header-user-tools-icon"/></Link> 
                        </div>
                    </nav>
                </section>
            </header>
        </React.Fragment>
    )
}

export default HeaderCategories;