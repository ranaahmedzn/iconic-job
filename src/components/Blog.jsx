import React, { useState } from 'react';

const Blog = ({ blog }) => {
    const [fold, setFold] = useState(true)

    const { question, answer, image, author, published_date} = blog;

    return (
        <div>
            <img className='w-full h-[200px] lg:h-[300px] rounded-lg mb-6' src={image} alt="" />
            <h1 className='text-3xl md:text-4xl w-full md:w-3/4 font-bold my-3 leading-[50px]'>{question}</h1>

            {fold ? (
                <p className=' text-gray-600'>
                    {answer.substring(0, 200)}.....
                    <span
                    className='cursor-pointer text-blue-600 font-semibold'
                    onClick={() => setFold(!fold)}
                    >
                        Read More
                    </span>
                </p>
                
            ) : (
                <p className=' text-gray-900'>
                    {answer}...
                    <span
                        className='cursor-pointer text-blue-600 font-semibold'
                        onClick={() => setFold(!fold)}
                    >
                        Read Less
                    </span>
                </p>
            )}


            <div className='flex items-center gap-7 mt-4 text-gray-700'>
                <h3 className='font-bold text-xl mb-1'>{author}</h3>
                <p className='font-semibold'>{published_date}</p>
            </div>
        </div>
    );
};

export default Blog;