import React from "react";
import { useState, useEffect } from 'react';

const BillingPlans = ({ components, setCurrentComponent }) => {

    return (
        <>
            <div class="page-content">
                <div class="page-content__title workspace">
                    Billing Plan
                </div>
                <div class="expire">
                    <img src="./img/expire-icon.svg" alt="" class="expire__icon" />
                    Your Trial expires in X days. You can always buy a plan before the trial period ends
                </div>

                <div className="billing-plan">
                    <div class="billing-plan__title">
                        Your plan
                    </div>
                    <div class="billing-plan__head">
                        <div class="billing-plan__box one">
                            <div className="billing-plan__box-wrapper heading-w">
                                <div class="billing-plan__top-text">Plan</div>
                                <div class="billing-plan__bottom-text">Free</div>
                            </div>
                        </div>
                        <div class="billing-plan__box two">
                            <div className="billing-plan__box-wrapper heading-w">
                                <div class="billing-plan__top-text">Suggestions</div>
                                <div class="billing-plan__bottom-text">1</div>
                            </div>
                        </div>
                        <div class="billing-plan__box three">
                            <div className="billing-plan__box-wrapper heading-w">
                                <div class="billing-plan__top-text">Team members</div>
                                <div class="billing-plan__bottom-text">1</div>
                            </div>
                        </div>
                        <div class="billing-plan__box four">
                            <div className="billing-plan__box-wrapper heading-w">
                                <div class="billing-plan__top-text">Price</div>
                                <div class="billing-plan__bottom-text">Free</div>
                            </div>
                        </div>
                        <div class="billing-plan__box five">
                            <div className="billing-plan__box-wrapper heading-w">
                                <div class="billing-plan__top-text">Billing date</div>
                                <div class="billing-plan__bottom-text">None</div>
                            </div>
                        </div>
                    </div>


                    <div class="billing-plan__title second">
                        Available plans
                    </div>
                    <div class="billing-plan__plans">
                        <div class="billing-plan__plan">
                            <div class="billing-plan__color-flag blue">
                            </div>
                            <div class="billing-plan__box first">
                                <div className="billing-plan__box-wrapper">
                                    <div class="billing-plan__top-text">Plan</div>
                                    <div class="billing-plan__bottom-text">Basic</div>
                                </div>
                            </div>
                            <div class="billing-plan__box second">
                                <div className="billing-plan__box-wrapper">
                                    <div class="billing-plan__top-text">Suggestions</div>
                                    <div class="billing-plan__bottom-text">1000</div>
                                </div>
                            </div>
                            <div class="billing-plan__box third">
                                <div className="billing-plan__box-wrapper">
                                    <div class="billing-plan__top-text">Team members</div>
                                    <div class="billing-plan__bottom-text">10</div>
                                </div>
                            </div>
                            <div class="billing-plan__box fourth">
                                <div className="billing-plan__box-wrapper">
                                    <div class="billing-plan__top-text">Price</div>
                                    <div class="billing-plan__bottom-text">$25/mo</div>
                                </div>
                            </div>
                            <button class="billing-plan__buy-button blue">Buy now</button>
                        </div>
                        <div class="billing-plan__plan">
                            <div class="billing-plan__color-flag red">
                            </div>
                            <div class="billing-plan__box first">
                                <div className="billing-plan__box-wrapper">
                                    <div class="billing-plan__top-text">Plan</div>
                                    <div class="billing-plan__bottom-text">Basic</div>
                                </div>
                            </div>
                            <div class="billing-plan__box second">
                                <div className="billing-plan__box-wrapper">
                                    <div class="billing-plan__top-text">Suggestions</div>
                                    <div class="billing-plan__bottom-text">1000</div>
                                </div>
                            </div>
                            <div class="billing-plan__box third">
                                <div className="billing-plan__box-wrapper">
                                    <div class="billing-plan__top-text">Team members</div>
                                    <div class="billing-plan__bottom-text">10</div>
                                </div>
                            </div>
                            <div class="billing-plan__box fourth">
                                <div className="billing-plan__box-wrapper">
                                    <div class="billing-plan__top-text">Price</div>
                                    <div class="billing-plan__bottom-text">$25/mo</div>
                                </div>
                            </div>
                            <button class="billing-plan__buy-button red">Buy now</button>
                        </div>
                        <div class="billing-plan__plan">
                            <div class="billing-plan__color-flag dark-blue">
                            </div>
                            <div class="billing-plan__box first">
                                <div className="billing-plan__box-wrapper">
                                    <div class="billing-plan__top-text">Plan</div>
                                    <div class="billing-plan__bottom-text">Basic</div>
                                </div>
                            </div>
                            <div class="billing-plan__box second">
                                <div className="billing-plan__box-wrapper">
                                    <div class="billing-plan__top-text">Suggestions</div>
                                    <div class="billing-plan__bottom-text">1000</div>
                                </div>
                            </div>
                            <div class="billing-plan__box third">
                                <div className="billing-plan__box-wrapper">
                                    <div class="billing-plan__top-text">Team members</div>
                                    <div class="billing-plan__bottom-text">10</div>
                                </div>
                            </div>
                            <div class="billing-plan__box fourth">
                                <div className="billing-plan__box-wrapper">
                                    <div class="billing-plan__top-text">Price</div>
                                    <div class="billing-plan__bottom-text">$25/mo</div>
                                </div>
                            </div>
                            <button class="billing-plan__buy-button dark-blue">Buy now</button>
                        </div>
                        <div class="billing-plan__plan">
                            <div class="billing-plan__color-flag cyan">
                            </div>
                            <div class="billing-plan__box first">
                                <div className="billing-plan__box-wrapper">
                                    <div class="billing-plan__top-text">Plan</div>
                                    <div class="billing-plan__bottom-text">Basic</div>
                                </div>
                            </div>
                            <div class="billing-plan__box second">
                                <div className="billing-plan__box-wrapper">
                                    <div class="billing-plan__top-text">Suggestions</div>
                                    <div class="billing-plan__bottom-text">1000</div>
                                </div>
                            </div>
                            <div class="billing-plan__box third">
                                <div className="billing-plan__box-wrapper">
                                    <div class="billing-plan__top-text">Team members</div>
                                    <div class="billing-plan__bottom-text">10</div>
                                </div>
                            </div>
                            <div class="billing-plan__box fourth">
                                <div className="billing-plan__box-wrapper">
                                    <div class="billing-plan__top-text">Price</div>
                                    <div class="billing-plan__bottom-text">$25/mo</div>
                                </div>
                            </div>
                            <button class="billing-plan__buy-button cyan">Buy now</button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
export default BillingPlans;