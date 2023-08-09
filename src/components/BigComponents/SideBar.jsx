import React from "react";
import { useState, useEffect } from 'react';
import Dashboard from "../Workspaces/Dashboard";
const SideBar = ({ components, setCurrentComponent }) => {

    const [currentNav, setCurrentNav] = useState(1);


    const [settingsDrop, setSettingsDrop] = useState(false);

    return (
        <>
            <div className="sidebar">
                <div className={components === 0 ? "sidebar__heading active" : "sidebar__heading"} onClick={() => { setCurrentComponent(0) }}>
                    Workspaces
                </div>
                <div className={components === 4 ? "sidebar__heading active" : "sidebar__heading"} onClick={() => { setCurrentComponent(4) }}>
                    Profile
                </div>
                <div className={components === 4 ? "sidebar__tab active" : "sidebar__tab"} onClick={() => { setCurrentComponent(4) }}>
                    Profile
                </div>
                <div className={components === 5 ? "sidebar__tab active" : "sidebar__tab"} onClick={() => { setCurrentComponent(5) }}>
                    Avatar
                </div>
                <div className={components === 7 ? "sidebar__tab active" : "sidebar__tab"} onClick={() => { setCurrentComponent(7) }}>
                    Email Preferences
                </div>
                <div className={components === 6 ? "sidebar__tab active" : "sidebar__tab"} onClick={() => { setCurrentComponent(6) }}>
                    Change password
                </div>
                <div className={components === 8 ? "sidebar__heading active" : "sidebar__heading"} onClick={() => { setCurrentComponent(8) }}>
                    Billing
                </div>
                <div className={components === 8 ? "sidebar__tab active" : "sidebar__tab"} onClick={() => { setCurrentComponent(8) }}>
                    Billing Plan
                </div>
                <div className={components === 9 ? "sidebar__tab active" : "sidebar__tab"} onClick={() => { setCurrentComponent(9) }}>
                    Payment Methods
                </div>
                <div className={components === 11 ? "sidebar__tab active" : "sidebar__tab"} onClick={() => { setCurrentComponent(11) }}>
                    Billing History
                </div>
            </div>
        </>
    );
}
export default SideBar;