import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ToastContainer } from "react-toastify";

import Home from "./pages/Home";
import Login from "./pages/Login";
import MyCarts from "./pages/MyCarts";
import PageInital from "./pages/PageInital/";
import Register from "./pages/Register";

import "./styles/globalcss.css";
import "react-toastify/ReactToastify.min.css";

const App: React.FC = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<PageInital />} />
                <Route path="/register" element={<Register />} />
                <Route path="/login" element={<Login />} />
                <Route path="/home" element={<Home />} />
                <Route path="/my-cart" element={<MyCarts />} />
            </Routes>

            <ToastContainer
                theme="dark"
                position="top-right"
                autoClose={1000 * 2}
                closeOnClick
                pauseOnHover={false}
            />
        </BrowserRouter>
    );
};

export default App;
