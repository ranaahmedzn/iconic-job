import React from 'react';
import socialIcons from '../assets/social-group.png'
import { Link } from 'react-router-dom';

const Footer = () => {
    return (
        <div className='w-full bg-gray-900 py-24'>
            <div className='my-container px-10 space-y-8 '>
                <div className='grid gap-10 grid-cols-1 md:grid-cols-2 lg:grid-cols-6'>
                    <div className='lg:col-span-2 space-y-5'>
                        <Link className='font-bold text-3xl text-white' to="/">Iconic-Job</Link>
                        <p className='text-base text-gray-300'>There are many variations of passages of Lorem Ipsum , but the majority have suffered alteration in some form.</p>
                        <img src={socialIcons} alt="" />
                    </div>
                    <div className='text-gray-300 space-y-3'>
                        <h3 className='font-bold text-2xl text-white'>Company</h3>
                        <p>About Us</p>
                        <p>Work</p>
                        <p>Latest News</p>
                        <p>Careers</p>
                    </div>
                    <div className='text-gray-300 space-y-3'>
                        <h3 className='font-bold text-2xl text-white'>Products</h3>
                        <p>Plans & Pricing</p>
                        <p>Prototype</p>
                        <p>Customers</p>
                        <p>Integrations</p>
                    </div>
                    <div className='text-gray-300 space-y-3'>
                        <h3 className='font-bold text-2xl text-white'>Support</h3>
                        <p>Help Desk</p>
                        <p>Sales</p>
                        <p>Become a Partner</p>
                        <p>Developers</p>
                    </div>
                    <div className='text-gray-300 space-y-3'>
                        <h3 className='font-bold text-2xl text-white'>Contact</h3>
                        <p>Mirpur 1210, Dhaka, Bangladesh</p>
                        <p>+1777 - 978 - 5570</p>
                    </div>
                </div>
                <hr />
                <div className='flex justify-between text-gray-300 mt-12'>
                    <p>&copy;2023 Iconic-Job | All Rights Reserved</p>
                    <p>Powered by Iconic-Job</p>
                </div>
            </div>
        </div>
    );
};

export default Footer;