import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Filters from "./Admin/Filters";
import InsertFilter from "./Admin/InsertFilter";
import ImageUploader from "./ImageUploader";

const App = () => {
    return (
        <div>
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<Filters />} />
                    <Route path="insert" element={<InsertFilter />} />
                    <Route path="image" element={<ImageUploader/>} />
                    <Route path="*" element={<h1>ERROR 404</h1>} />
                    
                </Routes>
            </BrowserRouter>
        </div>
    );
};

export default App;
