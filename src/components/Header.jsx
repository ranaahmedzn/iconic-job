import React from 'react';
import { NavLink } from 'react-router-dom';

const Header = () => {
    return (
        <div className='w-full bg-gray-100'>
            <div className='container py-12 mx-auto flex justify-between items-center'>
                <a className='font-bold text-3xl ' href="/">Iconic-Job</a>
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
                <button className='btn-primary'>Start Applying</button>
            </div>
        </div>
    );
};

export default Header;