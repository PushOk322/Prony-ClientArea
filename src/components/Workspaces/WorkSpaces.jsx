import React from "react";
import { useState, useEffect } from 'react';

const WorkspaceList = ({ components, setCurrentComponent }) => {


    return (
        <>
            <div className="page-content">
                <div className="page-content__title workspace">
                    Workspaces
                </div>
                <div className="workspace-list__container">
                    <div className="workspace-list">
                        <div className="workspace-list__row">
                            <div className="workspace-list__row-name">Name of workspace</div>
                            <div className="workspace-list__domain">Subdomain_or_domain.com</div>
                            <div className="workspace-list__buttons">
                                <img src="./img/edit-icon.svg" alt="" className="workspace-list__button" onClick={()=>{setCurrentComponent(1)}}/>
                                <img src="./img/cancel-icon.svg" alt="" className="workspace-list__button" onClick={()=>{setCurrentComponent(3)}}/>
                                <img src="./img/play-icon.svg" alt="" className="workspace-list__button" />
                            </div>
                        </div>
                        <div className="workspace-list__row">
                            <div className="workspace-list__row-name">Name of workspace</div>
                            <div className="workspace-list__domain">Subdomain_or_domain.com</div>
                            <div className="workspace-list__buttons">
                                <img src="./img/edit-icon.svg" alt="" className="workspace-list__button" onClick={()=>{setCurrentComponent(1)}}/>
                                <img src="./img/cancel-icon.svg" alt="" className="workspace-list__button" onClick={()=>{setCurrentComponent(3)}}/>
                                <img src="./img/play-icon.svg" alt="" className="workspace-list__button" />
                            </div>
                        </div>
                        <div className="workspace-list__row">
                            <div className="workspace-list__row-name">Name of workspace</div>
                            <div className="workspace-list__domain">Subdomain_or_domain.com</div>
                            <div className="workspace-list__buttons">
                                <img src="./img/edit-icon.svg" alt="" className="workspace-list__button"onClick={()=>{setCurrentComponent(1)}} />
                                <img src="./img/cancel-icon.svg" alt="" className="workspace-list__button" onClick={()=>{setCurrentComponent(3)}}/>
                                <img src="./img/play-icon.svg" alt="" className="workspace-list__button" />
                            </div>
                        </div>
                    </div>
                    <button className="workspace-list__add-button"onClick={()=>{setCurrentComponent(2)}}>
                        <img src="./img/plus-icon.svg" alt="" className="workspace-list__plus-icon" />
                        <div className="workspace-list__add-text">Add a new workspace</div>
                        <div className="workspace-list__button-shadow"></div>
                    </button>
                </div>
            </div>
        </>
    );
}
export default WorkspaceList;