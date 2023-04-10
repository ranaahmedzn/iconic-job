import React from 'react';

const FeaturedJob = ({job}) => {
    const {id, company_logo, job_title, company_name, job_type, job_duration, location, salary} = job;
    
    return (
        <div className='border border-gray-300 rounded-lg p-10'>
            <img src={company_logo} alt="" />
            <h3 className='text-3xl my-2 font-semibold'>{job_title}</h3>
            <h4 className='text-gray-500 text-lg font-medium'>{company_name}</h4>
            <div className='my-4'>
                <button className='btn-outlined'>{job_type}</button>
                <button className='btn-outlined'>{job_duration}</button>
            </div>
            <div className='flex gap-6 text-gray-500 text-lg font-medium'>
                <p>
                    {location}
                </p>
                <p>
                    {salary}
                </p>
            </div>
            <div className='mt-4'>
                <button className='btn-primary py-2'>View Details</button>
            </div>
        </div>
    );
};

export default FeaturedJob;