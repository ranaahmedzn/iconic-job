import React, { useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import { FaFacebook, FaGoogle } from "react-icons/fa";
import { AuthContext } from '../providers/AuthProvider';
import { toast } from 'react-hot-toast';

const SignUp = () => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [emailError, setEmailError] = useState('')
    const [passwordError, setPasswordError] = useState('')
    const { createUser } = useContext(AuthContext)
    const { updateUser } = useContext(AuthContext)

    const handleSignUp = (event) => {
        event.preventDefault()

        const form = event.target;
        const firstName = form.first.value;
        const lastName = form.last.value;
        const photoUrl = form.photoUrl.value;
        const confirmPassword = form.confirm.value;
        // console.log(firstName, lastName, photoUrl, confirmPassword)

        if (emailError) {
            form.email.focus()
            return;
        }
        else if (passwordError) {
            form.password.focus()
            return;
        }
        else if (password !== confirmPassword) {
            setPasswordError("Your password didn't matched!")
            return;
        }

        createUser(email, password)
            .then(result => {
                const loggedUser = result.user
                console.log(loggedUser)
                toast.success("Successfully created user!!")
                form.reset()
                setEmail('')
                setPassword('')

                // update user profile 
                updateUser(`${firstName} ${lastName}`, photoUrl)
                .then(() => toast.success('Successfully updated user profile'))
                .catch(error => console.log(error))
            })
            .catch(error => {
                const errorMessage = error.message;
                console.log(error)
                toast.error(errorMessage)
            })

    }

    // handle email validation
    const handleEmail = (e) => {
        const emailInput = e.target.value;
        setEmail(emailInput)

        if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
            setEmailError('Please give a valid email')
        }
        else {
            setEmailError('')
        }
    }

    // handle password validation
    const handlePassword = (e) => {
        const passwordInput = e.target.value;
        setPassword(passwordInput)

        if (!/(?=.*?[A-Z])(?=.*?[a-z])/.test(passwordInput)) {
            setPasswordError('Password should contain at least one uppercase & lowercase letter')
        }
        else if (!/(?=.*?[0-9])/.test(passwordInput)) {
            setPasswordError('Password should contain at lest one digit')
        }
        else if (!/(?=.*?[#?!@$%^&*-])/.test(passwordInput)) {
            setPasswordError('Please add at least one special character')
        }
        else if (passwordInput.length < 6) {
            setPasswordError('Password must be 6 character or longer')
        }
        else {
            setPasswordError('')
        }
    }


    return (
        <div className='py-10 min-h-screen flex justify-center items-center bg-gradient-to-r from-violet-500 to-indigo-500'>
            <div className='bg-white w-3/6 rounded-lg p-8'>
                <h2 className='text-center font-bold text-3xl mb-8'>Signup</h2>
                <form onSubmit={handleSignUp}>
                    <div className="mb-6 flex gap-3">
                        <input type="text" id="first" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5" placeholder="First name" required />
                        <input type="text" id="last" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5" placeholder="Last name" required />
                    </div>
                    <div className="mb-6 flex gap-3">
                        <input onChange={handleEmail} value={email} type="email" id="email" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5" placeholder="Email address" required />
                        <input type="text" id="photoUrl" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5" placeholder="Your photo url" required />
                    </div>

                    {emailError && <p className='mb-4 -mt-4 text-sm text-rose-600 font-semibold cursor-pointer w-fit'>{emailError}</p>}

                    <div className="mb-4 flex gap-3">
                        <input onChange={handlePassword} value={password} type="password" id="password" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5" placeholder='Create password' required />
                        <input type="password" id="confirm" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5" placeholder='Confirm password' required />
                    </div>

                    {passwordError && <p className='mb-4 -mt-2 text-sm text-rose-600 font-semibold cursor-pointer w-fit'>{passwordError}</p>}

                    <div className="flex items-start mb-6">
                        <div className="flex items-center h-5">
                            <input id="remember" type="checkbox" value="" className="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-blue-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800" required />
                        </div>
                        <label htmlFor="remember" className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300">Accept Terms & Conditions</label>
                    </div>

                    <button type="submit" className="btn-primary py-3 w-full">Sign Up</button>

                    <p className='text-center my-4 text-sm'>Already have an account? <Link to="/login" className='text-blue-600 font-semibold hover:underline'>Login</Link></p>
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
                        <button type="button" className="w-full text-white bg-[#4285F4] hover:bg-[#4285F4]/90 font-medium rounded-lg text-base px-5 py-2.5 text-center inline-flex justify-center items-center mr-2">
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