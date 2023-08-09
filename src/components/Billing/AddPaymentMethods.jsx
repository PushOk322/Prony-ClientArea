import React from "react";
import { useState, useEffect } from 'react';

const AddPaymentMethods = ({ components, setCurrentComponent }) => {


    return (
        <>
            <div class="page-content">
                <div class="page-content__title workspace">
                    Add Payment Methods
                </div>
                <div class="add-payment">
                    <div class="add-payment__row">
                        <div class="add-payment__title">Alias for credit card</div>
                        <div class="add-payment__input-row">
                            <input type="text" class="add-payment__input" placeholder="Enter your Alias" />
                        </div>
                    </div>
                    <div class="add-payment__row">
                        <div class="add-payment__title">First name</div>
                        <div class="add-payment__input-row">
                            <input type="text" class="add-payment__input" placeholder="Enter your first name" />
                            <input type="text" class="add-payment__input" placeholder="Enter your last name" />
                        </div>
                    </div>
                    <div class="add-payment__row">
                        <div class="add-payment__title">Card number</div>
                        <div class="add-payment__input-row">
                            <input type="text" class="add-payment__input" placeholder="" />
                            <input type="text" class="add-payment__input" placeholder="" />
                            <input type="text" class="add-payment__input" placeholder="" />
                            <input type="text" class="add-payment__input" placeholder="" />
                        </div>
                    </div>
                    <div class="add-payment__row">
                        <div class="add-payment__title-row">
                            <div class="add-payment__title">CVV</div>
                            <div class="add-payment__title">Expiration date</div>
                        </div>
                        
                        <div class="add-payment__input-row">
                            <input type="text" class="add-payment__input cvv" placeholder="" />
                            <input type="text" class="add-payment__input date" placeholder="/" />
                        </div>
                    </div>



                    <div class="add-payment__buttons">
                        <div class="workspace-edit__cancel-button">Cancel</div>
                        <button class="workspace-list__add-button edit">
                            <div class="workspace-list__add-text">Submit</div>
                            <div class="workspace-list__button-shadow edit"></div>
                        </button>
                    </div>
                </div>
            </div>
        </>
    );
}
export default AddPaymentMethods;