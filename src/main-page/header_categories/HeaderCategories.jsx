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
                    <div className='header-logo'>
                        <Link className="header-logo-link" to='/' title="App Demo">
                            <img className="header-logo-img" src={logo} alt="App Demo"></img>
                        </Link>
                    </div>
                    <div className='header-categories'>
                        <nav>Electronics</nav>
                        <nav>For Home</nav>
                        <nav>DIY</nav>
                        <nav>Sport</nav>
                        <nav>Supply</nav>
                        <nav>Extra</nav>
                        <nav>Outdoor</nav>
                        <nav>Fire Sale</nav>
                        <nav>All</nav>
                    </div>
                    <div className='header-options'>
                        <div className='search'>
                            <Link to='/search'><BsSearch className="header-user-tools-icon"/></Link> 
                        </div>
                        <div className='login-register'>
                            <Link to='/user'><AiOutlineUser className="header-user-tools-icon"/></Link> 
                        </div>
                        <div className='cart'>
                            <Link to='/cart'><BsBasket3 className="header-user-tools-icon"/></Link> 
                        </div>
                    </div>
                </section>
            </header>
        </React.Fragment>
    )
}

export default HeaderCategories;