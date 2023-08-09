import React from "react";
import { useState, useEffect } from 'react';

const AddWorkspace = ({ components, setCurrentComponent }) => {
    const [colorActive, setColorActive] = useState([false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false,]);
    const handleColorClick = (index) => {
        const newActiveItems = colorActive.map((item, i) => i === index);
        setColorActive(newActiveItems);
    };

    const [chosenTheme, setChosenTheme] = useState([true, false, false, false]);
    const handleThemeClick = (index) => {
        const newActiveItems = chosenTheme.map((item, i) => i === index);
        setChosenTheme(newActiveItems);
    };

    const [chosenPrivacy, setChosenPrivacy] = useState(1);

    return (
        <>
            <div class="page-content">
                <div class="page-content__title workspace">
                    Add Workspace
                </div>
                <div class="workspace-add">
                    <div class="workspace-add__row inputs">
                        <div class="workspace-add__input-box">
                            <div class="workspace-add__heading">Name</div>
                            <input type="text" class="workspace-add__input" placeholder="Name of workspace" />
                        </div>
                        <div class="workspace-add__input-box">
                            <div class="workspace-add__heading">Subdomain</div>
                            <input type="text" class="workspace-add__input" placeholder="Name of subdomain" />
                        </div>
                    </div>


                    <div class="workspace-add__row">
                        <div class="workspace-add__heading">Language</div>
                        <div class="settings-language">
                            <div class="settings-language__column">
                                <div class="settings-language__box" onClick={() => { handleColorClick(0) }}>
                                    <div class={colorActive[0] === true ? "settings-language__radio active" : "settings-language__radio"}>
                                        <div class="settings-language__circle"></div>
                                    </div>

                                    <div class="settings-language__text-container">
                                        <div class="settings-language__box-name">English</div>
                                        <div class="settings-language__box-undertext">English, US</div>
                                    </div>

                                    <img src="./img/language-flag-american.svg" alt="" class="settings-language__flag" />
                                </div>
                                <div class="settings-language__box" onClick={() => { handleColorClick(1) }}>
                                    <div class={colorActive[1] === true ? "settings-language__radio active" : "settings-language__radio"}>
                                        <div class="settings-language__circle"></div>
                                    </div>

                                    <div class="settings-language__text-container">
                                        <div class="settings-language__box-name">English</div>
                                        <div class="settings-language__box-undertext">English, US</div>
                                    </div>

                                    <img src="./img/language-flag-american.svg" alt="" class="settings-language__flag" />
                                </div>
                            </div>
                            <div class="settings-language__column">
                                <div class="settings-language__box" onClick={() => { handleColorClick(3) }}>
                                    <div class={colorActive[3] === true ? "settings-language__radio active" : "settings-language__radio"}>
                                        <div class="settings-language__circle"></div>
                                    </div>

                                    <div class="settings-language__text-container">
                                        <div class="settings-language__box-name">German</div>
                                        <div class="settings-language__box-undertext">Deutsch</div>
                                    </div>

                                    <img src="./img/language-flag-german.svg" alt="" class="settings-language__flag" />
                                </div>
                                <div class="settings-language__box" onClick={() => { handleColorClick(4) }}>
                                    <div class={colorActive[4] === true ? "settings-language__radio active" : "settings-language__radio"}>
                                        <div class="settings-language__circle"></div>
                                    </div>

                                    <div class="settings-language__text-container">
                                        <div class="settings-language__box-name">German</div>
                                        <div class="settings-language__box-undertext">Deutsch</div>
                                    </div>

                                    <img src="./img/language-flag-german.svg" alt="" class="settings-language__flag" />
                                </div>
                            </div>
                            <div class="settings-language__column">
                                <div class="settings-language__box" onClick={() => { handleColorClick(5) }}>
                                    <div class={colorActive[5] === true ? "settings-language__radio active" : "settings-language__radio"}>
                                        <div class="settings-language__circle"></div>
                                    </div>

                                    <div class="settings-language__text-container">
                                        <div class="settings-language__box-name">English</div>
                                        <div class="settings-language__box-undertext">English, US</div>
                                    </div>

                                    <img src="./img/language-flag-american.svg" alt="" class="settings-language__flag" />
                                </div>
                                <div class="settings-language__box" onClick={() => { handleColorClick(6) }}>
                                    <div class={colorActive[6] === true ? "settings-language__radio active" : "settings-language__radio"}>
                                        <div class="settings-language__circle"></div>
                                    </div>

                                    <div class="settings-language__text-container">
                                        <div class="settings-language__box-name">English</div>
                                        <div class="settings-language__box-undertext">English, US</div>
                                    </div>

                                    <img src="./img/language-flag-american.svg" alt="" class="settings-language__flag" />
                                </div>
                            </div>
                        </div>
                    </div>


                    <div class="workspace-add__row">
                        <div class="workspace-add__heading second">Theme</div>
                        <div class="workspace-theme__themes">
                            <div class="workspace-theme__theme" onClick={() => { handleThemeClick(0) }}>
                                <div class="workspace-theme__color-back white">
                                    <img src="./img/theme-white-icon.svg" alt="" class={chosenTheme[0] === true ? "workspace-theme__chosen-icon active" : "workspace-theme__chosen-icon"} />
                                </div>
                                <div class="workspace-theme__balls custom">
                                    <img src="./img/gear-icon.svg" alt="" class="workspace-theme__gear-icon" />
                                    Custom
                                </div>
                            </div>
                            <div class="workspace-theme__theme" onClick={() => { handleThemeClick(1) }}>
                                <div class="workspace-theme__color-back blue">
                                    <img src="./img/theme-white-icon.svg" alt="" class={chosenTheme[1] === true ? "workspace-theme__chosen-icon active" : "workspace-theme__chosen-icon"} />
                                </div>
                                <div class="workspace-theme__balls">
                                    <div class="workspace-theme__ball color-1"></div>
                                    <div class="workspace-theme__ball color-2"></div>
                                    <div class="workspace-theme__ball color-3"></div>
                                    <div class="workspace-theme__ball color-4"></div>
                                </div>
                            </div>
                            <div class="workspace-theme__theme " onClick={() => { handleThemeClick(2) }}>
                                <div class="workspace-theme__color-back green">
                                    <img src="./img/theme-white-icon.svg" alt="" class={chosenTheme[2] === true ? "workspace-theme__chosen-icon active" : "workspace-theme__chosen-icon"} />
                                </div>
                                <div class="workspace-theme__balls">
                                    <div class="workspace-theme__ball color-5"></div>
                                    <div class="workspace-theme__ball color-6"></div>
                                    <div class="workspace-theme__ball color-7"></div>
                                    <div class="workspace-theme__ball color-8"></div>
                                </div>
                            </div>
                            <div class="workspace-theme__theme" onClick={() => { handleThemeClick(3) }}>
                                <div class="workspace-theme__color-back grey">
                                    <img src="./img/theme-white-icon.svg" alt="" class={chosenTheme[3] === true ? "workspace-theme__chosen-icon active" : "workspace-theme__chosen-icon"} />
                                </div>
                                <div class="workspace-theme__balls">
                                    <div class="workspace-theme__ball color-9"></div>
                                    <div class="workspace-theme__ball color-10"></div>
                                    <div class="workspace-theme__ball color-11"></div>
                                    <div class="workspace-theme__ball color-12"></div>
                                </div>
                            </div>
                        </div>
                    </div>


                    <div class="workspace-add__row privacy">
                        <div class="workspace-add__heading">How do you plan to use Prony?</div>
                        <div class="workspace-add__privacy-container">
                            <div class={chosenPrivacy === 1 ? "workspace-add__privacy-button active" : "workspace-add__privacy-button"} onClick={() => { setChosenPrivacy(1) }}>
                                <img src="./img/theme-white-icon.svg" alt="" class={chosenPrivacy === 1 ? "workspace-add__privacy-icon active" : "workspace-add__privacy-icon"} />
                                <div class={chosenPrivacy === 1 ? "workspace-add__privacy-text active" : "workspace-add__privacy-text"}>Public feedback</div>
                            </div>
                            <div class={chosenPrivacy === 2 ? "workspace-add__privacy-button active" : "workspace-add__privacy-button"} onClick={() => { setChosenPrivacy(2) }}>
                                <img src="./img/theme-white-icon.svg" alt="" class={chosenPrivacy === 2 ? "workspace-add__privacy-icon active" : "workspace-add__privacy-icon"} />
                                <div class={chosenPrivacy === 2 ? "workspace-add__privacy-text active" : "workspace-add__privacy-text"}>Private feedback</div>
                            </div>
                            <div class={chosenPrivacy === 3 ? "workspace-add__privacy-button active" : "workspace-add__privacy-button"} onClick={() => { setChosenPrivacy(3) }}>
                                <img src="./img/theme-white-icon.svg" alt="" class={chosenPrivacy === 3 ? "workspace-add__privacy-icon active" : "workspace-add__privacy-icon"} />
                                <div class={chosenPrivacy === 3 ? "workspace-add__privacy-text active" : "workspace-add__privacy-text"}>Employee feedback</div>
                            </div>
                        </div>

                    </div>


                    <div class="workspace-add__buttons">
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
export default AddWorkspace;