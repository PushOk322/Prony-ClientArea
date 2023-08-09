import Main from './pages/Main.jsx';
import NotFound from './pages/404.jsx';
import ServerError from './pages/Page500.jsx';


import React from "react";
import { Routes, Route } from 'react-router-dom';

const App = () => {
    return (
        <>
            <Routes>
                <Route path="/" element={<Main />} />
                <Route path="*" element={<NotFound />} />
                <Route path="/server-error" element={<ServerError />} />
            </Routes>
        </>
    );
};

export default App;
