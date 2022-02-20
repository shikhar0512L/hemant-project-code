import React from 'react';
import {
    Link
} from "react-router-dom";

export default function Navbar() {
    return (
        <nav className="bg-white top-0 ">
            <div className="container mx-auto">
                <div className="sm:flex justify-around">
                    {/* Site title */}
                    <Link to="/" className="text-purple-700 text-3xl font-bold p-3 mx-0 px-0 lg:pl-4 hover:text-purple-700">Hemant's Project</Link>

                    {/* Menu Items */}
                    <ul className="text-black sm:self-center text-lg px-40 py-4 space-x-3 border-t sm:border-none">
                        <li className="hidden md:inline-block">
                            <Link to="/" className="text-white bg-purple-700 hover:bg-purple-800 focus:ring-4 focus:ring-purple-300 font-medium rounded-lg text-sm px-3 py-2 text-center inline-flex items-center mx-1">Home</Link>
                        </li>
                        <li className="hidden md:inline-block">
                            <Link to="/Blog" className="text-white bg-purple-700 hover:bg-purple-800 focus:ring-4 focus:ring-purple-300 font-medium rounded-lg text-sm px-3 py-2 text-center inline-flex items-center mx-1">Blog</Link>
                        </li>
                        <li className="hidden md:inline-block">
                            <a href="https://www.youtube.com/channel/UCzeALSxw6-_NrjuGcIIY44g?sub_confirmation=1" target="_blank" className="text-white bg-purple-700 hover:bg-purple-800 focus:ring-4 focus:ring-purple-300 font-medium rounded-lg text-sm px-3 py-2 text-center inline-flex items-center mx-1">Subscribe</a>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    )
}