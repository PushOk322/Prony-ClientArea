import React from "react";
import { useState, useEffect } from 'react';

const Avatar = ({ components, setCurrentComponent }) => {

    const [firstFile, setFirstFile] = useState([]);

    const onInputChangeFirstFile = (e) => {
        const filesArray = Array.from(e.target.files);
        setFirstFile((prevFiles) => [...prevFiles, ...filesArray]);
    };

    const onDeleteFirstFile = (index) => {
        setFirstFile((prevFiles) => prevFiles.filter((_, i) => i !== index));
    };

    const renderImageFirstPreview = (fileItem, index) => {
        const imageUrl = URL.createObjectURL(fileItem);
        return (
            <div key={index} className="avatar__imported-file">
                <img src={imageUrl} alt={`Preview ${index}`} className="avatar__image-preview" />
                <img
                    src="./img/cross-icon.svg"
                    alt=""
                    className="avatar__cancel-icon"
                    onClick={() => onDeleteFirstFile(index)}
                />
            </div>
        );
    };

    return (
        <>
            <div class="page-content">
                <div class="page-content__title workspace">
                    Avatar
                </div>
                <div class="avatar">
                    <div className="avatar__heading">Current avatar</div>
                    <div className="avatar__content">
                        <img src="./img/avatar-picture.png" alt="" className="avatar__img" />
                        <div class="avatar__import-file">
                            <div class="avatar__box">
                                <div class="avatar__file-container" >
                                    <img src="./img/clip-icon.svg" alt="" class="avatar__clip-icon" />
                                    <div class="avatar__file-text">
                                        <label htmlFor="file">Add file</label>
                                        <br />
                                        <div>or drop files here</div></div>
                                    <input id="file" type="file" class="avatar__input" onChange={onInputChangeFirstFile} />
                                </div>
                            </div>
                            <div className="avatar__imported">
                                {firstFile.map((fileItem, index) => renderImageFirstPreview(fileItem, index))}
                            </div>
                        </div>
                    </div>

                    <div class="avatar__buttons">
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
export default Avatar;