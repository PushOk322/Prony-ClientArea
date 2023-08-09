import React from "react";
import { useState, useEffect } from 'react';

const ChangePassword = ({ components, setCurrentComponent }) => {


    return (
        <>
            <div class="page-content">
                <div class="page-content__title workspace">
                    Change password
                </div>
                <div class="profile">
                    <div class="profile__box">
                        <div class="profile__heading">Current password</div>
                        <input type="text" class="profile__input" placeholder="Enter current password" />
                    </div>
                    <div class="profile__box">
                        <div class="profile__heading">New Password</div>
                        <input type="text" class="profile__input" placeholder="Enter new password" />
                    </div>
                    <div class="profile__box">
                        <div class="profile__heading">Repeat New Password</div>
                        <input type="text" class="profile__input" placeholder="Enter new password" />
                    </div>
                    <div class="profile__buttons">
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
export default ChangePassword;