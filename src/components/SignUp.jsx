import React from 'react';
import { Link } from 'react-router-dom';
import { FaFacebook, FaGoogle } from "react-icons/fa";

const SignUp = () => {
    return (
        <div className='py-10 flex justify-center items-center bg-gradient-to-r from-violet-600 to-indigo-500'>
            <div className='bg-white w-3/6 rounded-lg p-8'>
                <h2 className='text-center font-bold text-3xl mb-8'>Signup</h2>
                <form>
                    <div class="mb-6 flex gap-3">
                        <input type="text" id="first-name" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5" placeholder="First name" required />
                        <input type="text" id="last-name" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5" placeholder="Last name" required />
                    </div>
                    <div class="mb-6 flex gap-3">
                        <input type="email" id="email" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5" placeholder="Email address" required />
                        <input type="text" id="photo-url" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5" placeholder="Your photo url" required />
                    </div>
                    <div class="mb-4 flex gap-3">
                        <input type="password" id="password" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5" placeholder='Create password' required />
                        <input type="password" id="password" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5" placeholder='Confirm password' required />
                    </div>

                    <div class="flex items-start mb-6">
                        <div class="flex items-center h-5">
                            <input id="remember" type="checkbox" value="" class="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-blue-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800" required />
                        </div>
                        <label for="remember" class="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300">Accept Terms & Conditions</label>
                    </div>

                    <button type="submit" class="btn-primary py-3 w-full">Sign Up</button>

                    <p className='text-center my-4 text-sm'>Already have an account? <Link to="/login" className='text-blue-600 font-semibold hover:underline'>Login</Link></p>
                    <div className='flex justify-between items-center'>
                        <span className='w-full h-[1px] bg-gray-300'></span>
                        <span className='mx-4'>Or</span>
                        <span className='w-full h-[1px] bg-gray-300'></span>
                    </div>
                    <div className='mt-5 '>
                        <button type="button" class="w-full text-white bg-[#3b5998] hover:bg-[#3b5998]/90 font-medium rounded-lg text-base px-5 py-2.5 text-center inline-flex justify-center items-center mr-2 mb-4">
                            <FaFacebook className='text-xl mr-3' />
                            Sign in with Facebook
                        </button>
                        <button type="button" class="w-full text-white bg-[#4285F4] hover:bg-[#4285F4]/90 font-medium rounded-lg text-base px-5 py-2.5 text-center inline-flex justify-center items-center mr-2">
                            <FaGoogle className='text-xl mr-3' />
                            Sign in with Google
                        </button>
                    </div>

                </form>
            </div>
        </div>
    );
};

export default SignUp;