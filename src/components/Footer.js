import React from 'react'

function Footer() {
    return (
        <>
            <footer className="text-gray-600 body-font mt-8 px-10 bg-white">
                <div className="px-2 py-4 mx-auto flex items-center sm:flex-row flex-col">
                    <span className="flex title-font font-medium items-center md:justify-start justify-center text-gray-900">
                        <span className="ml-3 mt-4 text-xl">Hemant's Project</span></span>
                    <p className="text-sm text-gray-500 sm:ml-4 sm:pl-4 sm:border-l-2 sm:border-gray-200 sm:py-2 sm:mt-0 mt-4 text-center">Copyright © 2022</p>
                </div>
            </footer>
        </>
    )
}

export default Footer;