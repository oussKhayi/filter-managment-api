import { Spinner } from "flowbite-react";
import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const Redirect = () => {
    const navigate = useNavigate();
    useEffect(() => {
        navigate("/auth-login");
    }, []);
    return (
        <div className="text-center h-[70vh] flex pt-[30vh] justify-around">
            <Spinner size={"xl"} className="text-5xl mt-auto" />
        </div>
    );
};

export default Redirect;
