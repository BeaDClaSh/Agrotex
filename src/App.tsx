import React, {useEffect} from 'react';
import {Route, Routes, useNavigate} from 'react-router-dom';
import Cieplica from './components/Cieplica';
import PageNotFound from './components/PNF.jsx'

const App = () => {
    const navigate = useNavigate();

    useEffect(() => {
        const isFirstLoad = sessionStorage.getItem('isFirstLoad');
        if (!isFirstLoad) {
            sessionStorage.setItem('isFirstLoad', 'true');
            navigate('/Welcome');
        }
    }, [navigate]);

    return (
        <Routes>
            <Route path="/Welcome" element={<Cieplica />} />
            <Route path="*" element={<PageNotFound />} />
        </Routes>
    );
};

export default App;
