import React from "react";
import { useState, useEffect } from 'react';
const Head = ({ components, setCurrentComponent }) => {
    const [menuActive, setMenuActive] = useState(false);

    return (
        <>
            <div className="head__blue-line"></div>
            <div className="head">
                <img src="./img/head-logo.svg" alt="" className="head__logo" onClick={() => { setCurrentComponent(0) }} />
                <div className="head__account">
                    <img src="./img/head-avatar.svg" alt="" className="head__avatar" />
                    <div className="head__name">Lucy Lavender</div>

                    <div className="head__menu-button-wrapper" onClick={() => { if (menuActive === true) { setMenuActive(false) } else { setMenuActive(true) } }}>
                        <img src="./img/head-menu-button.svg" alt="" className="head__menu-button"  />
                    </div>


                    <div className={menuActive === true ? "head-menu active" : "head-menu"}>
                        <div className="head-menu__blue-line"></div>

                        <div className="head-menu__rows">

                            <div className="head-menu__row" onClick={() => { setCurrentComponent(0) }}>
                                Workspaces
                            </div>
                            <div className="head-menu__row" onClick={() => { setCurrentComponent(1) }}>
                                Profile
                            </div>
                            <div className="head-menu__row" onClick={() => { setCurrentComponent(2) }}>
                                Logout
                            </div>

                        </div>
                    </div>
                </div>




                
            </div>
        </>
    );
}
export default Head;