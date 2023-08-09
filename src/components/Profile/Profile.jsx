import React from "react";
import { useState, useEffect } from 'react';

const Profile = ({ components, setCurrentComponent }) => {


    return (
        <>
            <div class="page-content">
                <div class="page-content__title workspace">
                    Profile
                </div>
                <div class="profile">
                    <div class="profile__box">
                        <div class="profile__heading">First name</div>
                        <input type="text" class="profile__input" placeholder="Enter your first name" />
                    </div>
                    <div class="profile__box">
                        <div class="profile__heading">Last name</div>
                        <input type="text" class="profile__input" placeholder="Enter your last name" />
                    </div>
                    <div class="profile__box">
                        <div class="profile__heading">Email</div>
                        <input type="text" class="profile__input" placeholder="Enter your email" />
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
export default Profile;