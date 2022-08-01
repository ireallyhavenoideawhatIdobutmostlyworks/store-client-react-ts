import React from 'react';
import { Link } from 'react-router-dom';
import './PrivatePolicy.scss';

const PrivatePolicy = () => {
    return (
        <React.Fragment>
            <section className="form-section">
                <div className="private-policytitle-wrapper">
                    <h3>Private Policy</h3>
                </div>
                <div className="private-policy-wrapper">
                    <p>


                    Twoje dane osobiste będą przechowywane w bezpieczny sposób i wykorzystywane jedynie w zgodzie z naszą Polityką Prywatności.
iBOOD szanuje prywatność użytkowników swojej strony, wszystkie dane, które nam udostępnisz będą odpowiednio chronione. Wykorzystujemy Twoje dane aby zrealizować Twoją rezerwację tak szybko, jak to tylko możliwe. W pozostałych przypadkach wykorzystujemy Twoje dane jedynie za Twoją zgodą. iBOOD nie będzie sprzedawał Twoich danych stronom trzecim. Twoje dane będą udostępniane stronom trzecim tylko w przypadku gdy będą one uczestniczyły w procesie realizacji Twojej rezerwacji.

                    </p>
                </div>
                <div className="full-private-policy-wrapper">
                    <Link to="/private-policy">Forgot password?</Link> 
                </div>
            </section>
        </React.Fragment>
    )
}

export default PrivatePolicy;