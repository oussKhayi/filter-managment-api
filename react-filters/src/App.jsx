import React from "react";

import { BrowserRouter, Routes, Route } from "react-router-dom";
import Filters from "./Admin/Filters";
import InsertFilter from "./Admin/InsertFilter";
import FooterComponent from "./assets/FooterComponent";
import NavbarComponent from "./assets/NavbarComponent";
import PageNotFound from "./assets/PageNotFound";
import HomePage from "./components/HomePage";
import ImageUploader from "./ImageUploader";

const App = () => {
    return (
        <>
            <div className="min-h-screen">
                <BrowserRouter>
                    <NavbarComponent />
                    <Routes>
                        <Route path="/" element={<HomePage />} />
                        <Route path="manage" element={<Filters />} />
                        <Route path="insert" element={<InsertFilter />} />
                        <Route path="image" element={<ImageUploader />} />
                        <Route path="*" element={<PageNotFound />} />
                    </Routes>
                </BrowserRouter>
            </div>
            <FooterComponent />
        </>
    );
};

export default App;
