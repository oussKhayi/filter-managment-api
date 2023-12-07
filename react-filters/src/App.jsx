import React, { useEffect, useState } from "react";
import Cookies from "js-cookie";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Filters from "./Admin/Filters";
import InsertFilter from "./Admin/InsertFilter";
import FooterComponent from "./assets/FooterComponent";
import NavbarComponent from "./assets/NavbarComponent";
import PageNotFound from "./assets/PageNotFound";
import HomePage from "./components/HomePage";
import ImageUploader from "./ImageUploader";
import FindFilter from "./components/search/FindFilter";
import Filter from "./components/Filter";
import "./Style.css";

import LogIn from "./Admin/LogIn";

import Redirect from "./Admin/Redirect";

const App = () => {
    const [isToken, setIsToken] = useState(false);
    useEffect(() => {
        const token = Cookies.get("token");
        setIsToken(!!token);
        
        // console.log(!!token);
    }, []);

    const returnRoutes = () => {
        const routes = [
            { path: "/", element: <HomePage />, isPrivate: false },
            { path: "*", element: <PageNotFound />, isPrivate: false },
            { path: "auth-login", element: <LogIn />, isPrivate: false },
            { path: "insert", element: <InsertFilter />, isPrivate: true },
            { path: "search", element: <FindFilter />, isPrivate: false },
            { path: "manage", element: <Filters />, isPrivate: true },
            {
                path: "filter/:productId",
                element: <Filter />,
                isPrivate: false,
            },
        ];

        return (
            <Routes>
                {routes.map((r, i) => {
                    if (isToken && r.isPrivate) {
                        return (
                            <Route key={i} path={r.path} element={r.element} />
                        );
                    } else if (!r.isPrivate) {
                        return (
                            <Route key={i} path={r.path} element={r.element} />
                        );
                    } else {
                        return (
                            <Route
                                key={i}
                                path={r.path}
                                element={<Redirect />}
                            />
                        );
                    }
                })}
                {/* <Route path="/" element={<HomePage />} />
                <Route path="auth-login" element={<LogIn />} />
                <Route path="manage" element={<Filters />} />
                <Route path="search" element={<FindFilter />} />
                <Route path="filter/:productId" element={<Filter />} />
                <Route path="insert" element={<InsertFilter />} />
                <Route path="*" element={<PageNotFound />} /> */}
            </Routes>
        );
    };
    return (
        <>
            <div className="parent">
                <BrowserRouter>
                    <NavbarComponent />
                    {returnRoutes()}
                </BrowserRouter>
            </div>
            <FooterComponent />
        </>
    );
};

export default App;
