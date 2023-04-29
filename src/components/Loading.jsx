import React from 'react';

const Loading = () => {
    return (
        <div className='h-screen w-full bg-gray-100 flex justify-center items-center'>
            <h2 className='text-7xl font-bold'>L
            <span className='border-8 border-dotted border-indigo-600 rounded-full w-[50px] h-[50px] inline-block animate-spin'></span>
            ading..</h2>
        </div>
    );
};

export default Loading;