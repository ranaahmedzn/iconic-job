import React from 'react';
import { Link } from 'react-router-dom';
import { FaFacebook, FaGoogle } from "react-icons/fa";

const Login = () => {
    return (
        <div className='h-screen flex justify-center items-center bg-indigo-500'>
            <div className='bg-white w-2/6 rounded-lg p-8'>
                <h2 className='text-center font-bold text-3xl mb-8'>Login</h2>
                <form>
                    <div class="mb-6">
                        <input type="email" id="email" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5" placeholder="Email address" required />
                    </div>
                    <div class="mb-2">
                        <input type="password" id="password" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5" placeholder='Password' required />
                    </div>
                    <p className='mb-4 text-sm text-blue-600 font-semibold'><Link>Forgot password?</Link></p>
                    <button type="submit" class="btn-primary py-3 w-full">Login</button>

                    <p className='text-center my-4 text-sm'>Don't have an account? <Link to="/signup" className='text-blue-600 font-semibold hover:underline'>Sing Up</Link></p>
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

export default Login;