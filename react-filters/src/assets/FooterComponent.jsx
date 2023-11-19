"use client";

import { Footer } from "flowbite-react";
import React from "react";
import { FaFilter } from "react-icons/fa";

const FooterComponent = () => {
    return (
        <Footer container className="bottom-0">
            <div className="w-full text-center">
                <div className="w-full justify-between sm:flex sm:items-center sm:justify-between">
                    <div className="block">
                    <p className="text-gray-900 font-bold text-2xl sm:text-xl md:text-2xl flex items-center select-none">
                            Filter-H <FaFilter />
                        </p>
                    </div>
                    <Footer.LinkGroup>
                        <Footer.Link href="#">About</Footer.Link>
                        <Footer.Link href="#">Privacy Policy</Footer.Link>
                        <Footer.Link href="#">Licensing</Footer.Link>
                        <Footer.Link href="#">Contact</Footer.Link>
                    </Footer.LinkGroup>
                </div>
                <Footer.Divider />
                <Footer.Copyright href="#" by="OussKhayi" year={2023} />
            </div>
        </Footer>
    );
};

export default FooterComponent;
