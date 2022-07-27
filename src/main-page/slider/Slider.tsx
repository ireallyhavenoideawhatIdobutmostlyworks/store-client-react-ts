import React from 'react';
import './Slider.scss';
import {TbTruckDelivery} from 'react-icons/tb';
import {Link} from 'react-router-dom';
import testImg from './test-img.jpg';
import sale from './sale.jpg';


const HeaderSlider = () => {
    return (
        <React.Fragment>
            <main className="slider-container">
                <section className="slider-wrapper">
                    <div className="slider-title-wrapper">
                        <div className="slider-title">
                            <p>Odkurzacz Rowenta Silence Force Cyclonic | RO7253</p>
                        </div>
                    </div>
                    <div className="slider-info-wrapper">
                        <div className="slider-info">
                            <div className="slider-price-details">
                                <p>Cena sugerowana</p>
                                <p>954,95 zł</p>
                                <p>30% zniżki</p>
                            </div>
                                <div className="slider-price">
                                <p>Teraz!</p>
                                <p>664,95 zł</p>
                            </div>
                            <div className="slider-delivery-price">
                                <TbTruckDelivery/>
                                <p>Dostawa: 39,95 zł</p>
                            </div>
                            <div className="slider-details-link">
                                <div>
                                    <Link to='/slider-details'>I want this!</Link>                        
                                </div>
                            </div>
                            </div>

                        <div>
                            <figure className="slider-image">
                                <img src={testImg}></img>
                            </figure>
                        </div>
                    </div>
                </section>
                <section className="slider-details-wrapper">
                    <div className="slider-subscribe">
                        <input placeholder="Email address..."></input>
                        <button>Subscribe</button>
                    </div>
                    <div className="product-advantages-wrapper">
                        <div className="product-adventages-title">
                            <h2>Zalety</h2>
                        </div>
                        <div className="product-adventages-detail-wrapper">
                            <div className="product-adventages-details">
                                <ul>
                                    <li>Potężna moc</li>
                                    <li>Do wszystkich typów podłóg</li>
                                    <li>Bardzo cichy</li>
                                </ul>
                            </div>
                            <div className="product-adventages-description-wrapper">
                                <div className="product-adventages-description">
                                    <p>Silence Force Cyclonic od Rowenta to niesamowicie wydajny i cichy odkurzacz bezworkowy, który pomoże Ci utrzymać wszystkie podłogi w czystości.</p>
                                </div>
                                <div className="product-adventages-read-more">
                                    <Link to='/product-adventages-read-more'>Read more...</Link> 
                                </div>
                            </div>
                        </div>
                    </div>
                    <figure className="product-sale-img">
                        <img src={sale}></img>
                    </figure>
                </section>
            </main>
        </React.Fragment>
    )
}

export default HeaderSlider;