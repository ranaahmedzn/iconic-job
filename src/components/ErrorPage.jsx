import React from 'react';
import errorImg from '../assets/error.png'
import { Link, useRouteError } from 'react-router-dom';

const ErrorPage = () => {
    const errorObj = useRouteError()
    console.log(errorObj)

    return (
        <div className='bg-gray-100 w-screen h-screen flex flex-col justify-center items-center'>
            <img className='w-[500px] -mt-16' src={errorImg} alt="" />
            <div className='text-center -mt-10'>
                <h3 className='text-3xl font-bold mb-6'>{errorObj.data}</h3>
                <Link to='/'><button className='btn-primary py-3'>Back To Home</button></Link>
            </div>
        </div>
    );
};

export default ErrorPage;