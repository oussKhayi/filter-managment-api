import React from "react";

import { BrowserRouter, Routes, Route } from "react-router-dom";
import Filters from "./Admin/Filters";
import InsertFilter from "./Admin/InsertFilter";
import FooterComponent from "./assets/FooterComponent";
import NavbarComponent from "./assets/NavbarComponent";
import PageNotFound from "./assets/PageNotFound";
import HomePage from "./components/HomePage";
import ImageUploader from "./ImageUploader";
import FindFilter from "./components/searsh/FindFilter";

import ProductSearch from "./components/searsh/ProductSearch";
import Filter from "./components/Filter";

const App = () => {
    return (
        <>
            <div className="min-h-screen">
                <BrowserRouter>
                    <NavbarComponent />
                    <Routes>
                        <Route path="/" element={<HomePage />} />
                        <Route path="manage" element={<Filters />} />
                        {/* <Route path="search" element={<ProductSearch />} /> */}
                        <Route path="insert" element={<InsertFilter />} />
                        <Route path="image" element={<ImageUploader />} />
                        <Route path="*" element={<PageNotFound />} />
                        <Route path="filter/:productId" element={<Filter />} />
                        <Route path="search" element={<FindFilter />} />
                    </Routes>
                </BrowserRouter>
            </div>
            <FooterComponent />
        </>
    );
};

export default App;
