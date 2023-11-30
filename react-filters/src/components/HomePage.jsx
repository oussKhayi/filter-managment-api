import React from "react";
import photo from "../images/OIP main.png";
import oilSvg from "../images/lubricant-oil-icon.svg";
import oilLogo from "../images/oil logo.png";
import cabinLogo from "../images/cabin logo.png";
import fuelLogo from "../images/fuel logo.png";
import otherLogo from "../images/other logo.png";
import airLogo from "../images/air logo.png";
import { Link } from "react-router-dom";

const HomePage = () => {
    return (<>


        <section className="bg-white dark:bg-gray-900 shadow">
        <div className="grid max-w-screen-xl px-4 pt-20 pb-8 mx-auto lg:gap-8 xl:gap-0 lg:py-16 lg:grid-cols-12 lg:pt-28" >
            <div className="mr-auto place-self-center lg:col-span-7">
                <h1 className="max-w-2xl mb-4 text-4xl font-extrabold leading-none tracking-tight md:text-5xl xl:text-6xl dark:text-white">
                Filter-H : <br /> Precision Filters for Ultimate Vehicle Care</h1>
                <p className="max-w-2xl mb-6 font-light text-gray-500 lg:mb-8 md:text-lg lg:text-xl dark:text-gray-400">Explore our range of meticulously engineered oil and air filters at PureFlow Performance. Elevate your ride with top-tier filtration, designed for enhanced vehicle performance and longevity. Experience the difference with PureFlow – where excellence meets efficiency in automotive care.</p>
                <div className="space-y-4 sm:flex sm:space-y-0 sm:space-x-4">
                    <Link to={"manage"} className="inline-flex items-center justify-center w-full px-5 py-3 text-sm font-medium text-center text-gray-900 border border-gray-200 rounded-lg sm:w-auto bg-indigo-400 hover:bg-indigo-500 focus:ring-4 focus:ring-gray-100 dark:text-white dark:border-gray-700 dark:hover:bg-gray-700 dark:focus:ring-gray-800">
                    Find your Filter
                    </Link>
<Link className="inline-flex items-center justify-center w-full px-5 py-3 text-sm font-medium text-center text-gray-900 border border-gray-200 rounded-lg sm:w-auto bg-lime-300 hover:bg-lime-400 focus:ring-4 focus:ring-gray-100 dark:text-white dark:border-gray-700 dark:hover:bg-gray-700 dark:focus:ring-gray-800">
                        Explore 
</Link>
                    
                </div>
            </div>
            <div className="hidden lg:mt-0 lg:col-span-5 lg:flex">
                <img src={photo} alt="hero image"/>
            </div>                
        </div>
    </section>  

    <section className="bg-white dark:bg-gray-900 shadow">
            <h1 className="text-4xl font-extrabold pb-2 uppercase ms-12">Our Product</h1>
        <div className="max-w-screen-xl px-4 pb-8 mx-auto lg:pb-16 ">
            <div className="grid grid-cols-2 gap-8 text-gray-500 sm:gap-12 sm:grid-cols-3 lg:grid-cols-6 dark:text-gray-400 ">                
                <a href="#" className="bgg-red-200 text-center h-16 justify-center opacity-60 hover:opacity-70 p-0">
                    <div className="flex p-1 bgg-blue-200 justify-center">
                    <img src={airLogo} width={60} alt="" />
                    </div>
 <h2 className="font-extrabold text-2xl ms-2 text-black">Air Filters</h2>                                                                   
                </a>
                <a href="#" className="bgg-red-200 text-center h-16 justify-center opacity-60 hover:opacity-70 p-0">
                    <div className="flex p-1 bgg-blue-200 justify-center">
                    <img src={fuelLogo} width={60} alt="" />
                    </div>
 <h2 className="font-extrabold text-2xl ms-2 text-black">Fuel Filters</h2>                                                                   
                </a>
                <a href="#" className="bgg-red-200 text-center h-16 justify-center opacity-60 hover:opacity-70 p-0">
                    <div className="flex p-1 bgg-blue-200 justify-center">
                    <img src={oilLogo} width={60} alt="" />
                    </div>
 <h2 className="font-extrabold text-2xl ms-2 text-black">Oil Filters</h2>                                                                   
                </a>
                <a href="#" className="bgg-red-200 text-center h-16 justify-center opacity-60 hover:opacity-70 p-0">
                    <div className="flex p-1 bgg-blue-200 justify-center">
                    <img src={cabinLogo} width={60} alt="" />
                    </div>
 <h2 className="font-extrabold text-2xl ms-2 text-black">Cabin Filters</h2>                                                                   
                </a>
                <a href="#" className="bgg-red-200 text-center h-16 justify-center opacity-60 hover:opacity-70 p-0">
                    <div className="flex p-1 bgg-blue-200 justify-center">
                    <img src={otherLogo} width={60} alt="" />
                    </div>
 <h2 className="font-extrabold text-2xl ms-2 text-black">Other Filters</h2>                                                                   
                </a>
            </div>
        </div>
    </section>
    </>);
};

export default HomePage;

        {/* <main className="grid min-h-full place-items-center bg-white px-6 py-24 sm:py-32 lg:px-8">
            <div className="text-center">
                <p className="text-base font-semibold text-indigo-600">200</p>
                <h1 className="mt-4 text-3xl font-bold tracking-tight text-gray-900 sm:text-5xl">
                    Landing Page
                </h1>
                <p className="mt-6 text-base leading-7 text-gray-600">
                    We're sprucing things up! Our home page is getting ready to
                    shine. Coming soon!
                </p>
                
            </div>
            
        </main> */}