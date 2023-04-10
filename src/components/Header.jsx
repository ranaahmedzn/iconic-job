import React, { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/solid'

const Header = () => {
    const [isOpen, setIsOpen] = useState(false)

    return (
        <div className='w-full bg-gray-100'>
            <div className='hidden my-container py-12 lg:flex justify-between items-center'>
                <Link className='font-bold text-3xl ' to="/">Iconic-Job</Link>
                <ul className='flex gap-8'>
                    <li className='default'><NavLink to="/" className={({ isActive }) =>
                      isActive
                        ? "active"
                        : ""
                    }>Home</NavLink></li>
                    <li className='default'><NavLink to="/statistics" className={({ isActive }) =>
                      isActive
                        ? "active"
                        : ""
                    }>Statistics</NavLink></li>
                    <li className='default'><NavLink to="/applied-jobs" className={({ isActive }) =>
                      isActive
                        ? "active"
                        : ""
                    }>Applied Jobs</NavLink></li>
                    <li className='default'><NavLink to="/blog" className={({ isActive }) =>
                      isActive
                        ? "active"
                        : ""
                    }>Blog</NavLink></li>
                </ul>
                <button className='btn-primary py-3'>Start Applying</button>
            </div>

            <div className='lg:hidden relative h-[75px] px-3 flex justify-between items-center'>
                <Link className='font-bold text-3xl ' to="/">Iconic-Job</Link>
                
                <div onClick={() => setIsOpen(!isOpen)}>
                    {
                        isOpen 
                        ? <XMarkIcon className="h-8 w-8 text-black" />
                        : <Bars3Icon className="h-8 w-8 text-black" />
                    }
                </div>

                <ul className={`flex flex-col absolute gap-8 py-8 px-6 ${isOpen ? 'top-[75px] left-0' : "top-[75px] -left-[1000px]"} duration-500 bg-gray-700 w-full`}>
                    <li className='default2'><NavLink to="/" className={({ isActive }) =>
                      isActive
                        ? "active"
                        : ""
                    }>Home</NavLink></li>
                    <li className='default2'><NavLink to="/statistics" className={({ isActive }) =>
                      isActive
                        ? "active"
                        : ""
                    }>Statistics</NavLink></li>
                    <li className='default2'><NavLink to="/applied-jobs" className={({ isActive }) =>
                      isActive
                        ? "active"
                        : ""
                    }>Applied Jobs</NavLink></li>
                    <li className='default2'><NavLink to="/blog" className={({ isActive }) =>
                      isActive
                        ? "active"
                        : ""
                    }>Blog</NavLink></li>
                    <li>
                        <button className='btn-primary'>Start Applying</button>
                    </li>
                </ul>

            </div>
        </div>
    );
};

export default Header;