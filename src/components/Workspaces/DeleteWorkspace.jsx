import React from "react";
import { useState, useEffect } from 'react';

const DeleteWorkspace = ({ components, setCurrentComponent }) => {


    return (
        <>
            <div class="page-content">
                <div class="page-content__title workspace">
                    Delete Workspace
                </div>
                <div class="workspace-delete">
                    <div class="workspace-delete__warning">
                        Are you sure? This action cannot be undone. Enter the name of this workspace below to confirm.
                    </div>
                    <div class="workspace-delete__box">
                        <div class="workspace-delete__heading">Workspace name</div>
                        <input type="text" class="workspace-delete__input" placeholder="Name of workspace" />
                    </div>
                    <div class="workspace-delete__buttons">
                        <div class="workspace-delete__cancel-button">Cancel</div>
                        <button class="workspace-delete__add-button ">
                            <div class="workspace-delete__add-text">Delete</div>
                            <div class="workspace-delete__button-shadow "></div>
                        </button>
                    </div>
                </div>
            </div>
        </>
    );
}
export default DeleteWorkspace;