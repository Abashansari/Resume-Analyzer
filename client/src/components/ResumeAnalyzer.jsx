import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./Navbar";
import Home from "../pages/Home";
import Uploads from "../pages/Uploads";
import About from "../pages/About";
import Pricing from "../pages/Pricing";
import Login from "../pages/Login";
import Register from "../pages/Register";
import Footer from "./Footer";

export default function ResumeAnalyzer() {
    return (
        <div>
            <Router>
                <Navbar />
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/uploads" element={<Uploads />} />
                    <Route path="/about" element={<About />} />
                    <Route path="/pricing" element={<Pricing />} />
                    <Route path="/login" element={<Login />} />
                    <Route path="/register" element={<Register />} />
                </Routes>
                <Footer />
            </Router>
        </div>
    )
}
