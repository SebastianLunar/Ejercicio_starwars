import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from '../components/Home';
import List from '../components/List';
import NavBar from '../containers/NavBar';
import Search from '../components/Search';

const AppRoutes = () => {
    return (
        <BrowserRouter>
            <NavBar />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/search" element={<Search />} />
                <Route path="/list" element={<List />} />
            </Routes>
        </BrowserRouter>
    );
};

export default AppRoutes;