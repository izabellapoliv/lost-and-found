import React from 'react';
import { useSidebar } from '../../contexts/SidebarContext';

import Footer from "./Footer"
import Logo from "./Logo"
import Desktop from "./Menu/Desktop"
import Mobile from "./Menu/Mobile"
import Search from "./Search"

export default function Sidebar() {
    const { darkMode } = useSidebar();

    return (
        <>
            {/* Remove class [ hidden ] and replace [ sm:flex ] with [ flex ] */}
            <div className={`basis-64 shadow h-screen flex-col justify-between flex ${darkMode ? `dark` : ``}`}>
                <div className="h-full px-8 bg-slate-200 dark:bg-gray-800">
                    <Logo />
                    <Search />
                    <Desktop />
                </div>
                <div className="bg-slate-200 dark:bg-gray-800">
                    <Footer />
                </div>
            </div>
            <div
                className={`z-40 absolute shadow md:h-full flex-col justify-between sm:hidden transition duration-150 ease-in-out ${darkMode ? `dark` : ``}`}
                id="mobile-nav">
                <div className="h-10 w-10 bg-slate-200 dark:bg-gray-800 absolute right-0 mt-16 -mr-10 flex items-center shadow rounded-tr rounded-br justify-center cursor-pointer" id="mobile-toggler">
                    <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-adjustments" width={20} height={20} viewBox="0 0 24 24" strokeWidth="1.5" stroke="#FFFFFF" fill="none" strokeLinecap="round" strokeLinejoin="round">
                        <path stroke="none" d="M0 0h24v24H0z" />
                        <circle cx={6} cy={10} r={2} />
                        <line x1={6} y1={4} x2={6} y2={8} />
                        <line x1={6} y1={12} x2={6} y2={20} />
                        <circle cx={12} cy={16} r={2} />
                        <line x1={12} y1={4} x2={12} y2={14} />
                        <line x1={12} y1={18} x2={12} y2={20} />
                        <circle cx={18} cy={7} r={2} />
                        <line x1={18} y1={4} x2={18} y2={5} />
                        <line x1={18} y1={9} x2={18} y2={20} />
                    </svg>
                </div>
                <div className="px-8">
                    <Logo />
                    <Search />
                    <Mobile />
                </div>
                <Footer />
            </div>
        </>
    )
}
