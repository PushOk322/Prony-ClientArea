import React from "react";
import { useState, useEffect } from 'react';

const Socials = ({ components, setCurrentComponent }) => {

    const [socialBars, setSocialBars] = useState({
        active: [false, false, false, false, false],
    });

    const [socialButtons, setSocialButtons] = useState({
        active: ['Connect', 'Connect', 'Connect', 'Connect', 'Connect'],
    });

    const handleSocialButtonsClick = (index) => {
        const newActiveItems = socialButtons.active.map((item, i) => {
            if (i === index) {
                if (item === 'Connect') {
                    return 'Disconnect';
                } else {
                    return 'Connect';
                }
            }
            return item; // Додайте повернення для інших випадків
        });
        setSocialButtons({ ...socialButtons, active: newActiveItems });

        const newSocialBars = [...socialBars.active]; // Створюємо копію масиву
        newSocialBars[index] = !newSocialBars[index]; // Оновлюємо значення обраного об'єкту
        console.log(newSocialBars);
        setSocialBars({ ...socialBars, active: newSocialBars });
    };


    console.log(socialButtons.active[0]);


    return (
        <>
            <div className="page-content">
                <div className="page-content__title workspace">
                    Social accounts
                </div>

                <div className="socials">
                    <div className="socials__row">
                        <div className="socials__box-border">
                            <div className={socialBars.active[0] === true ? "socials__box active" : "socials__box"} >
                                <img src="./img/socials-google-icon.svg" alt="" className="socials__icon" />
                                <div className="socials__text">Add Google account</div>
                            </div>
                        </div>
                        <div className="socials__connect-button" onClick={() => { handleSocialButtonsClick(0) }}>{socialButtons.active[0]}</div>
                    </div>
                    <div className="socials__row">
                        <div className="socials__box-border">
                            <div className={socialBars.active[1] === true ? "socials__box active" : "socials__box"} >
                                <img src="./img/socials-facebook-icon.svg" alt="" className="socials__icon" />
                                <div className="socials__text">Add Facebook account</div>
                            </div>
                        </div>
                        <div className="socials__connect-button" onClick={() => { handleSocialButtonsClick(1) }}>{socialButtons.active[1]}</div>
                    </div>
                    <div className="socials__row">
                        <div className="socials__box-border">
                            <div className={socialBars.active[2] === true ? "socials__box active" : "socials__box"} >
                                <img src="./img/socials-twitter-icon.svg" alt="" className="socials__icon" />
                                <div className="socials__text">Add Twitter account</div>
                            </div>
                        </div>
                        <div className="socials__connect-button" onClick={() => { handleSocialButtonsClick(2) }}>{socialButtons.active[2]}</div>
                    </div>
                    <div className="socials__row">
                        <div className="socials__box-border">
                            <div className={socialBars.active[3] === true ? "socials__box active" : "socials__box"} >
                                <img src="./img/socials-github-icon.svg" alt="" className="socials__icon" />
                                <div className="socials__text">Add Github account</div>
                            </div>
                        </div>
                        <div className="socials__connect-button" onClick={() => { handleSocialButtonsClick(3) }}>{socialButtons.active[3]}</div>
                    </div>
                    <div className="socials__row">
                        <div className="socials__box-border">
                            <div className={socialBars.active[4] === true ? "socials__box active" : "socials__box"} >
                                <img src="./img/socials-discord-icon.svg" alt="" className="socials__icon" />
                                <div className="socials__text">Add Discord account</div>
                            </div>
                        </div>
                        <div className="socials__connect-button" onClick={() => { handleSocialButtonsClick(4) }}>{socialButtons.active[4]}</div>
                    </div>
                </div>
            </div>
        </>
    );
}
export default Socials;