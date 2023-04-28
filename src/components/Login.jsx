import React, { useContext, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { FaFacebook, FaGoogle } from "react-icons/fa";
import { AuthContext } from '../providers/AuthProvider';
import { toast } from 'react-hot-toast';

const Login = () => {
    const [email, setEmail] = useState('')
    const {signIn, passwordReset, googleLogin} = useContext(AuthContext)
    const navigate = useNavigate()

    const handleSignIn = (event) => {
        event.preventDefault()

        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;
        // console.log(email, password)

        signIn(email, password)
        .then(result => {
            const loggedUser = result.user;
            console.log(loggedUser)
            toast.success('Login successful!')
            form.reset()
            navigate('/')
        })
        .catch(error => {
            console.log(error)
        })
    }

    const handlePasswordReset = () => {
        if(email){
            passwordReset(email)
            .then(() => toast.success('Please check your email for resetting your password.'))
        }
        else{
            toast.error('Please give your email address in order to reset your password!')
        }
    }

    // handle google login
    const handleGoogleLogin = () => {
        googleLogin()
        .then(result => {
            const loggedUser = result.user;
            console.log(loggedUser)
            toast.success('Sign in successful!')
            navigate('/')
        })
        .catch(error => {
            console.log(error)
        })
    }

    return (
        <div className='min-h-screen flex justify-center items-center bg-gradient-to-r from-violet-500 to-indigo-500'>
            <div className='bg-white w-2/6 rounded-lg p-8'>
                <h2 className='text-center font-bold text-3xl mb-8'>Login</h2>
                <form onSubmit={handleSignIn}>
                    <div className="mb-6">
                        <input onChange={(e) => setEmail(e.target.value)} type="email" id="email" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5" placeholder="Email address" required />
                    </div>
                    <div className="mb-2">
                        <input type="password" id="password" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5" placeholder='Password' required />
                    </div>
                    <p onClick={handlePasswordReset} className='mb-4 text-sm text-blue-600 font-semibold cursor-pointer w-fit'>Forgot password?</p>
                    <button type="submit" className="btn-primary py-3 w-full">Login</button>

                    <p className='text-center my-4 text-sm'>Don't have an account? <Link to="/signup" className='text-blue-600 font-semibold hover:underline'>Sing Up</Link></p>
                    <div className='flex justify-between items-center'>
                        <span className='w-full h-[1px] bg-gray-300'></span>
                        <span className='mx-4'>Or</span>
                        <span className='w-full h-[1px] bg-gray-300'></span>
                    </div>
                    <div className='mt-5 '>
                        <button type="button" className="w-full text-white bg-[#3b5998] hover:bg-[#3b5998]/90 font-medium rounded-lg text-base px-5 py-2.5 text-center inline-flex justify-center items-center mr-2 mb-4">
                            <FaFacebook className='text-xl mr-3' />
                            Sign in with Facebook
                        </button>
                        <button onClick={handleGoogleLogin} type="button" className="w-full text-white bg-[#4285F4] hover:bg-[#4285F4]/90 font-medium rounded-lg text-base px-5 py-2.5 text-center inline-flex justify-center items-center mr-2">
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