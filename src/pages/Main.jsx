import SideBar from "../components/BigComponents/SideBar.jsx";
import Head from "../components/BigComponents/Head.jsx";

import Dashboard from "../components/Workspaces/Dashboard.jsx";
import BoardList from "../components/Workspaces/BoardList.jsx";
import Footer from "../components/BigComponents/Footer.jsx";
import WorkspaceList from "../components/Workspaces/WorkSpaces.jsx";
import EditWorkspace from "../components/Workspaces/EditWorkspace.jsx";
import AddWorkspace from "../components/Workspaces/AddWorkspace.jsx";
import DeleteWorkspace from "../components/Workspaces/DeleteWorkspace.jsx";
import Profile from "../components/Profile/Profile.jsx";
import Avatar from "../components/Profile/Avatar.jsx";
import ChangePassword from "../components/Profile/ChangePassword.jsx";
import Socials from "../components/Profile/Socials.jsx";
import PaymentMethods from "../components/Billing/PaymentMethods.jsx";
import AddPaymentMethods from "../components/Billing/AddPaymentMethods.jsx";
import BillingHistory from "../components/Billing/BillingHistory.jsx";
import BillingPlans from "../components/Billing/BillingPlan.jsx";



import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

// const BigComponents = [Dashboard+, BoardList+, CreateBoard+, EditBoard+, DeleteBoard+, PostList+, PostView+, PostVoters+, ImportPost+, AddPost+, EditPost+, Tags+, EditTag+, AddTag+, ReplaceTag+, UserList+, UserDetails+, Activities+, UserSegments+, AddUserSegment+, EditUserSegment+,        ];
const BigComponents = [
    WorkspaceList, EditWorkspace,
    AddWorkspace, DeleteWorkspace,
    Profile, Avatar,
    ChangePassword, Socials,
    BillingPlans, PaymentMethods,
    AddPaymentMethods, BillingHistory
];
const Main = () => {

    const [currentComponent, setCurrentComponent] = useState(0);


    return (
        <>
            <div className="wrapper">

                <Head components={currentComponent}
                setCurrentComponent={setCurrentComponent}></Head>

                <div className="path">
                    <div className="path__container">
                        <span>Client  /  &nbsp;&nbsp;</span>   Workspaces
                    </div>
                </div>

                <div className="body">
                    <SideBar
                        components={currentComponent}
                        setCurrentComponent={setCurrentComponent}
                    ></SideBar>

                    <div className="body__main-component">
                        {React.createElement(BigComponents[currentComponent], {
                            components: currentComponent,
                            setCurrentComponent: setCurrentComponent,
                        })}
                    </div>

                </div>
                {/* <div className="height"></div> */}

                <Footer components={currentComponent}
                    setCurrentComponent={setCurrentComponent}></Footer>



            </div>            
        </>
    );
};

export default Main;
