import React from 'react';
import bannerImg from '../assets/banner-img.png'
import { useLoaderData } from 'react-router-dom';
import Category from './Category';
import FeaturedJob from './FeaturedJob';

const Home = () => {
    const [jobCategories, featuredJobs] = useLoaderData()
    // console.log(jobCategories, featuredJobs)

    return (
        <main>
            {/* banner section start */}
            <section className='w-full bg-gray-100 overflow-hidden'>
                <div className='my-container flex gap-16 justify-between items-center'>
                    <div className='w-1/2'>
                        <h1 className='font-bold text-7xl leading-[80px]'>One Step <br /> Closer To Your <br /> <span className='text-indigo-400'>Dream Job</span></h1>
                        <p className='text-gray-600 my-6 w-3/4'>Explore thousands of job opportunities with all the information you need. Its your future. Come find it. Manage all your job application from start to finish.</p>
                        <button className='btn-primary py-3'>Get Started</button>
                    </div>

                    <div className='w-1/2 -mr-20'>
                        <img className='h-full' src={bannerImg} alt="" />
                    </div>
                </div>
            </section>

            {/* category section start */}
            <section className='my-container pt-20'>
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

            {/* featured jobs section start */}
            <section className='my-container py-20'>
                <div className='text-center'>
                    <h2 className='sectionTitle'>Featured Jobs</h2>
                    <p className='text-gray-600'>Explore thousands of job opportunities with all the information you need. Its your future</p>
                </div>

                <div className='grid grid-cols-1 md:grid-cols-2 gap-6 my-8'>
                    {
                        featuredJobs.slice(0, 4).map(job => <FeaturedJob
                        key={job.id}
                        job={job}
                        ></FeaturedJob>)
                    }
                </div>
                <div className='text-center'>
                    <button className='btn-primary py-3'>See All Jobs</button>
                </div>
            </section>
        </main>
    );
};

export default Home;