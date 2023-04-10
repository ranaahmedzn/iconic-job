import React from 'react';
import bannerImg from '../assets/banner-img.png'
import { useLoaderData } from 'react-router-dom';
import Category from './Category';

const Home = () => {
    const jobCategories = useLoaderData()
    console.log(jobCategories)
    return (
        <main>
            {/* banner section start */}
            <section className='w-full bg-gray-100 overflow-hidden'>
                <div className='my-container flex gap-16 justify-between items-center'>
                    <div className='w-1/2'>
                        <h1 className='font-bold text-7xl leading-[80px]'>One Step <br /> Closer To Your <br /> <span className='text-indigo-400'>Dream Job</span></h1>
                        <p className='text-gray-600 my-6 w-3/4'>Explore thousands of job opportunities with all the information you need. Its your future. Come find it. Manage all your job application from start to finish.</p>
                        <button className='btn-primary'>Get Started</button>
                    </div>

                    <div className='w-1/2 -mr-20'>
                        <img className='h-full' src={bannerImg} alt="" />
                    </div>
                </div>
            </section>

            {/* category section start */}
            <section className='my-container py-20'>
                <div className='text-center'>
                    <h2 className='sectionTitle'>Job Category List</h2>
                    <p className='text-gray-600'>Explore thousands of job opportunities with all the information you need. Its your future</p>
                </div>

                <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 my-8'>
                    {
                        jobCategories.map(category => <Category
                        key={category.id}
                        category={category}
                        ></Category>)
                    }
                </div>
            </section>
        </main>
    );
};

export default Home;