import React from "react";
import { useState, useEffect } from 'react';

const BillingHistory = ({ components, setCurrentComponent }) => {
    const [pagination, setPagination] = useState(1);
    const handlePagination = (type) => {
        if (type === '-') {
            if (pagination > 1) {
                let pagIndex = pagination - 1;
                setPagination(pagIndex)
            }
        } else if (type === '+') {
            if (pagination < 5) {
                let pagIndex = pagination + 1;
                setPagination(pagIndex)
            }
        }
    }

    return (
        <>
            <div class="page-content">
                <div class="page-content__title workspace">
                    Billing History
                </div>
                <div class="billing-history">
                    <div class="billing-history__head">
                        <div class="billing-history__heading first">Transaction date</div>
                        <div class="billing-history__heading">Amount</div>
                    </div>


                    <div class="billing-history__list">
                        <div class="billing-history__row">
                            <div class="billing-history__data first">21 Feb 2020</div>
                            <div class="billing-history__data">$50</div>
                        </div>
                        <div class="billing-history__line"></div>
                        <div class="billing-history__row">
                            <div class="billing-history__data first">21 Feb 2020</div>
                            <div class="billing-history__data">$50</div>
                        </div>
                        <div class="billing-history__line"></div>
                        <div class="billing-history__row">
                            <div class="billing-history__data first">21 Feb 2020</div>
                            <div class="billing-history__data">$50</div>
                        </div>
                        <div class="billing-history__line"></div>
                        <div class="billing-history__row">
                            <div class="billing-history__data first">21 Feb 2020</div>
                            <div class="billing-history__data">$50</div>
                        </div>
                        <div class="billing-history__line"></div>
                        <div class="billing-history__row">
                            <div class="billing-history__data first">21 Feb 2020</div>
                            <div class="billing-history__data">$50</div>
                        </div>
                        <div class="billing-history__line"></div>
                        <div class="billing-history__row">
                            <div class="billing-history__data first">21 Feb 2020</div>
                            <div class="billing-history__data">$50</div>
                        </div>
                        <div class="billing-history__line"></div>
                        <div class="billing-history__row">
                            <div class="billing-history__data first">21 Feb 2020</div>
                            <div class="billing-history__data">$50</div>
                        </div>
                        <div class="billing-history__line"></div>
                        <div class="billing-history__row">
                            <div class="billing-history__data first">21 Feb 2020</div>
                            <div class="billing-history__data">$50</div>
                        </div>
                        <div class="billing-history__line"></div>
                        <div class="billing-history__row">
                            <div class="billing-history__data first">21 Feb 2020</div>
                            <div class="billing-history__data">$50</div>
                        </div>
                        <div class="billing-history__line"></div>
                        <div class="billing-history__row">
                            <div class="billing-history__data first">21 Feb 2020</div>
                            <div class="billing-history__data">$50</div>
                        </div>
                        <div class="billing-history__line"></div>
                        <div class="billing-history__row">
                            <div class="billing-history__data first">21 Feb 2020</div>
                            <div class="billing-history__data">$50</div>
                        </div>
                        <div class="billing-history__line"></div>
                        <div class="billing-history__row">
                            <div class="billing-history__data first">21 Feb 2020</div>
                            <div class="billing-history__data">$50</div>
                        </div>
                        <div class="billing-history__line"></div>
                        <div class="billing-history__row">
                            <div class="billing-history__data first">21 Feb 2020</div>
                            <div class="billing-history__data">$50</div>
                        </div>
                        <div class="billing-history__line"></div>
                        <div class="billing-history__row">
                            <div class="billing-history__data first">21 Feb 2020</div>
                            <div class="billing-history__data">$50</div>
                        </div>
                        <div class="billing-history__line"></div>
                        <div class="billing-history__row">
                            <div class="billing-history__data first">21 Feb 2020</div>
                            <div class="billing-history__data">$50</div>
                        </div>
                        <div class="billing-history__line"></div>
                        <div class="billing-history__row">
                            <div class="billing-history__data first">21 Feb 2020</div>
                            <div class="billing-history__data">$50</div>
                        </div>
                        <div class="billing-history__line"></div>
                    </div>


                    <div class="post-foot">
                        <div class="post-foot__pagination">
                            <div class="post-foot__pag-box" onClick={() => { setPagination(1) }}>
                                <img src="./img/double-arrow-pag.svg" alt="" class="post-foot__double-arrow" />
                            </div>
                            <div class="post-foot__pag-box" onClick={() => { handlePagination('-') }}>
                                <img src="./img/arrow-pag.svg" alt="" class="post-foot__arrow" />
                            </div>

                            <div class={pagination === 1 ? "post-foot__pag-box active" : "post-foot__pag-box"} onClick={() => { setPagination(1) }}>
                                1
                            </div>
                            <div class={pagination === 2 ? "post-foot__pag-box active" : "post-foot__pag-box"} onClick={() => { setPagination(2) }}>
                                2
                            </div>
                            <div class={pagination === 3 ? "post-foot__pag-box active" : "post-foot__pag-box"} onClick={() => { setPagination(3) }}>
                                3
                            </div>
                            <div class={pagination === 4 ? "post-foot__pag-box active" : "post-foot__pag-box"} onClick={() => { setPagination(4) }}>
                                4
                            </div>
                            <div class={pagination === 5 ? "post-foot__pag-box active" : "post-foot__pag-box"} onClick={() => { setPagination(5) }}>
                                5
                            </div>

                            <div class="post-foot__pag-box" onClick={() => { handlePagination('+') }}>
                                <img src="./img/arrow-pag.svg" alt="" class="post-foot__arrow right" />
                            </div>
                            <div class="post-foot__pag-box" onClick={() => { setPagination(5) }}>
                                <img src="./img/double-arrow-pag.svg" alt="" class="post-foot__double-arrow right" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
export default BillingHistory;