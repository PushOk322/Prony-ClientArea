import React from "react";
import { useState, useEffect } from 'react';
const Footer = ({ components, setCurrentComponent }) => {
    const [themeActive, setThemeActive] = useState(true);

    return (
        <>
            <div className="footer">
                <div className="footer__upper">
                    <div className="footer__wrapper-upper">
                        <img src="./img/footer-logo.svg" alt="" className="footer__logo" onClick={()=>{setCurrentComponent(0)}}/>
                        <div className="footer__lists">
                            <div className="footer__list first">
                                <div className="footer__heading">Product</div>
                                <div className="footer__rows">
                                    <div className="footer__row">Features</div>
                                    <div className="footer__row">Integrations</div>
                                    <div className="footer__row">Case studies</div>
                                    <div className="footer__row">Documentation</div>
                                </div>
                            </div>
                            <div className="footer__list second">
                                <div className="footer__heading">Use cases</div>
                                <div className="footer__rows">
                                    <div className="footer__row">Feature requests</div>
                                    <div className="footer__row">Share roadmap</div>
                                    <div className="footer__row">Manage ideas</div>
                                </div>
                            </div>
                            <div className="footer__list third">
                                <div className="footer__heading">Alternatives</div>
                                <div className="footer__rows">
                                    <div className="footer__row">Prony vs Uservoice</div>
                                    <div className="footer__row">Prony vs Aha ideas</div>
                                    <div className="footer__row">Prony vs Canny</div>
                                    <div className="footer__row">Prony vs Trello</div>
                                    <div className="footer__row">Prony vs Nolt</div>
                                </div>
                            </div>
                            <div className="footer__list fourth">
                                <div className="footer__heading">Company</div>
                                <div className="footer__rows">
                                    <div className="footer__row">About us</div>
                                    <div className="footer__row">Why Prony?</div>
                                    <div className="footer__row">Team</div>
                                    <div className="footer__row">Culture</div>
                                    <div className="footer__row">Manifesto</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="footer__lower">
                    <div className="footer__wrapper-lower">
                        <div className="footer__ct-text">
                            © 2020 Prony &nbsp; | &nbsp; All rights reserved
                        </div>
                        <div className="footer__lower-links">
                            <div className="footer__ct-text">
                                Privacy policy  &nbsp;| &nbsp; Terms of service
                            </div>
                            <div className="footer__socials">
                                <img src="./img/facebook-icon.svg" alt="" className="footer__social" />
                                <img src="./img/instagram-icon.svg" alt="" className="footer__social" />
                                <img src="./img/twitter-icon.svg" alt="" className="footer__social" />
                                <img src="./img/youtube-icon.svg" alt="" className="footer__social" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
export default Footer;