import React from "react";
import { useState, useEffect } from 'react';

const PaymentMethods = ({ components, setCurrentComponent }) => {


    const [radioCard, setRadioCard] = useState({
        active: [true, false, false],
    });

    const handleRadioCardClick = (index) => {
        const newActiveItems = radioCard.active.map((item, i) => i === index);
        setRadioCard({ ...radioCard, active: newActiveItems });
    };



    return (
        <>
            <div class="page-content">
                <div class="page-content__title workspace">
                    Payment Methods
                </div>
                <div class="payment-methods">
                    <div class={radioCard.active[0] === true ? "payment-methods__card active" : "payment-methods__card"} onClick={() => { handleRadioCardClick(0) }}>
                        <img src="./img/card-cancel-icon.svg" alt="" class="payment-methods__cancel-icon" />
                        <div class="payment-methods__radio-box" >
                            <div class="payment-methods__radio">
                                <div class="payment-methods__circle"></div>
                            </div>
                            <div class="payment-methods__radio-name">Name of method</div>
                        </div>
                        <div class="payment-methods__bank">
                            <div class="payment-methods__card-number">XXXX</div>
                            <div class="payment-methods__card-number">XXXX</div>
                            <div class="payment-methods__card-number">XXXX</div>
                            <div class="payment-methods__card-number">4538</div>
                        </div>
                    </div>
                    <div class={radioCard.active[1] === true ? "payment-methods__card active" : "payment-methods__card"} onClick={() => { handleRadioCardClick(1) }}>
                        <img src="./img/card-cancel-icon.svg" alt="" class="payment-methods__cancel-icon" />
                        <div class="payment-methods__radio-box" >
                            <div class="payment-methods__radio">
                                <div class="payment-methods__circle"></div>
                            </div>
                            <div class="payment-methods__radio-name">Name of method</div>
                        </div>
                        <div class="payment-methods__bank">
                            <div class="payment-methods__card-number">XXXX</div>
                            <div class="payment-methods__card-number">XXXX</div>
                            <div class="payment-methods__card-number">XXXX</div>
                            <div class="payment-methods__card-number">4538</div>
                        </div>
                    </div>
                    <div class={radioCard.active[2] === true ? "payment-methods__card active" : "payment-methods__card"} onClick={() => { handleRadioCardClick(2) }}>
                        <img src="./img/card-cancel-icon.svg" alt="" class="payment-methods__cancel-icon" />
                        <div class="payment-methods__radio-box" >
                            <div class="payment-methods__radio">
                                <div class="payment-methods__circle"></div>
                            </div>
                            <div class="payment-methods__radio-name">Name of method</div>
                        </div>
                        <div class="payment-methods__bank">
                            <div class="payment-methods__card-number">XXXX</div>
                            <div class="payment-methods__card-number">XXXX</div>
                            <div class="payment-methods__card-number">XXXX</div>
                            <div class="payment-methods__card-number">4538</div>
                        </div>
                    </div>
                </div>
                <button class="payment-methods__add-button" onClick={() => { setCurrentComponent(10) }}>
                    <img src="./img/plus-icon.svg" alt="" class="payment-methods__plus-icon" />
                    <div class="payment-methods__add-text">Add a new payment method</div>
                    <div class="payment-methods__button-shadow"></div>
                </button>
            </div>
        </>
    );
}
export default PaymentMethods;