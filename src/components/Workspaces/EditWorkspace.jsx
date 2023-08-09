import React from "react";
import { useState, useEffect } from 'react';

const EditWorkspace = ({ components, setCurrentComponent }) => {


    return (
        <>
            <div class="page-content">
                <div class="page-content__title workspace">
                    Edit Workspace
                </div>
                <div class="workspace-edit">
                    <div class="workspace-edit__content">
                        <div class="workspace-edit__box">
                            <div class="workspace-edit__heading">New Name</div>
                            <input type="text" class="workspace-edit__input" placeholder="Name of workspace" />
                        </div>
                        <div class="workspace-edit__box">
                            <div class="workspace-edit__heading">Subdomain</div>
                            <input type="text" class="workspace-edit__input" placeholder="Name of workspace" />
                        </div>
                    </div>
                    <div class="workspace-edit__buttons">
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
export default EditWorkspace;