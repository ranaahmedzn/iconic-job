import React from 'react';
import { CurrencyDollarIcon, MapPinIcon } from '@heroicons/react/24/outline'
import { Link } from 'react-router-dom';

const AppliedJob = ({job}) => {
    const {id, company_logo, job_title, company_name, job_type, job_duration, location, salary} = job;

    return (
        <div className='border border-gray-200 flex flex-col md:flex-row gap-8 items-center rounded-lg p-8'>
            <div className='bg-gray-200 w-full md:w-[220px] h-[220px] flex justify-center items-center rounded-lg'>
                <img src={company_logo} alt="" />
            </div>
            <div>
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
            </div>
            <div className='flex-grow text-right'>
                <Link to={`/job/${id}`}><button className='btn-primary py-2'>View Details</button></Link>
            </div>
        </div>
    );
};

export default AppliedJob;