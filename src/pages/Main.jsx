import SideBar from "../components/BigComponents/SideBar.jsx";
import Head from "../components/BigComponents/Head.jsx";

import Dashboard from "../components/BigComponents/Dashboard.jsx";
import BoardList from "../components/BigComponents/BoardList.jsx";

import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

// const BigComponents = [Dashboard+, BoardList+, CreateBoard+, EditBoard+, DeleteBoard+, PostList+, PostView+, PostVoters+, ImportPost+, AddPost+, EditPost+, Tags+, EditTag+, AddTag+, ReplaceTag+, UserList+, UserDetails+, Activities+, UserSegments+, AddUserSegment+, EditUserSegment+,        ];
const BigComponents = [Dashboard, BoardList];
const Main = () => {

    const [currentComponent, setCurrentComponent] = useState(0);


    return (
        <>
            <div className="page">
                <SideBar
                    components={currentComponent}
                    setCurrentComponent={setCurrentComponent}
                ></SideBar>
                <div className="page__vertical-container">
                    <Head></Head>

                    {React.createElement(BigComponents[currentComponent], {
                        components: currentComponent,
                        setCurrentComponent: setCurrentComponent,
                    })}



                    <div className="height"></div>
                </div>
            </div>
        </>
    );
};

export default Main;
