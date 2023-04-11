import React from 'react';
import { Link } from 'react-router-dom';
import { CurrencyDollarIcon, MapPinIcon } from '@heroicons/react/24/outline'

const FeaturedJob = ({job}) => {
    const {id, company_logo, job_title, company_name, job_type, job_duration, location, salary} = job;

    return (
        <div className='border border-gray-200 rounded-lg p-10'>
            <div className='h-[60px]'>
                <img className='h-full' src={company_logo} alt="" />
            </div>
            <h3 className='text-3xl my-2 font-semibold'>{job_title}</h3>
            <h4 className='text-gray-500 text-lg font-medium'>{company_name}</h4>
            <div className='my-4'>
                <button className='btn-outlined'>{job_type}</button>
                <button className='btn-outlined'>{job_duration}</button>
            </div>
            <div className='flex flex-col md:flex-row gap-6 text-gray-500 text-lg font-medium'>
                <p className='flex items-center'>
                    <MapPinIcon className='icon-style' />
                    {location}
                </p>
                <p className='flex items-center'>
                    <CurrencyDollarIcon className='icon-style' />
                    {salary}
                </p>
            </div>
            <div className='mt-4'>
                <Link to={`/job/${id}`}><button className='btn-primary py-2'>View Details</button></Link>
            </div>
        </div>
    );
};

export default FeaturedJob;