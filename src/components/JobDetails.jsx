import React, { useContext, useEffect, useState } from 'react';
import { useLoaderData, useParams } from 'react-router-dom';
import { CurrencyDollarIcon, CalendarDaysIcon, PhoneIcon, EnvelopeIcon, MapPinIcon } from '@heroicons/react/24/outline'
import vector from '../assets/Vector.png'
import vector1 from '../assets/Vector-1.png'
import { JobsContext } from '../App';
import { addToDb, getAppliedJobList } from '../Utilities/fakeDb';
import { toast } from 'react-hot-toast';

const JobDetails = () => {
    const [jobs, setJobs] = useContext(JobsContext)

    const featuredJobs = useLoaderData()
    const params = useParams()

    const job = featuredJobs.find(job => job.id == params.id)
    const {job_title, location, salary, educational_requirements, job_description, job_responsibility, experiences, contact_information} = job;

    
    const handleApplyNow = (job) => {
        let newJobs = [];
        const exists = jobs.find(existingJob => existingJob.id === job.id)
        if(!exists){
            job.quantity = 1;
            newJobs = [...jobs, job]

            addToDb(job.id)
            setJobs(newJobs)
            toast.success("Successfully Applied!👍")
        }
        else{
            toast.error("You have already applied in this job!🔥")
        }
    }

    return (
        <div>
            <div className='bg-gray-100 md:relative'>
                <div className='my-container pt-12 pb-28 text-center'>
                    <h2 className='font-bold text-3xl'>Job Details</h2>
                </div>
                <img className='hidden md:block absolute bottom-0 left-0 w-72' src={vector} alt="" />
                <img className='hidden md:block absolute -top-36 right-0 w-72' src={vector1} alt="" />
            </div>

            <div className='my-container py-20 grid gap-5 grid-cols-1 lg:grid-cols-3'>
                <div className='col-span-2 space-y-6'>
                    <p className='text-gray-600'>
                        <span className='font-bold text-black'>Job Description: </span>
                        {job_description}
                    </p>
                    <p className='text-gray-600'>
                        <span className='font-bold text-black'>Job Responsibility: </span>
                        {job_responsibility}
                    </p>
                    <p className='text-gray-600'>
                        <span className='font-bold text-black block'>Educational Requirements:</span>
                        {educational_requirements}
                    </p>
                    <p className='text-gray-600'>
                        <span className='font-bold text-black block'>Experiences:</span>
                        {experiences}
                    </p>
                </div>

               <div>
                    <div className='space-y-5 bg-gradient-to-r from-indigo-50 to-gray-100 rounded-lg p-7'>
                        <h3 className='text-xl font-bold'>Job Details</h3>
                        <hr className='border-1 border-gray-300' />
                        <div className='space-y-3'>
                            <p className='text-gray-600'>
                                <CurrencyDollarIcon className='icon-style2' />
                                <span className='font-bold text-gray-700'>Salary : </span>
                                {salary}
                            </p>
                            <p className='text-gray-600'>
                                <CalendarDaysIcon className='icon-style2' />
                                <span className='font-bold text-gray-700'>Job Title : </span>
                                {job_title}
                            </p>
                        </div>
                        <h3 className='text-xl font-bold'>Contact Information</h3>
                        <hr className='border-1 border-gray-300' />
                        <div className='space-y-3'>
                            <p className='text-gray-600'>
                                <PhoneIcon className='icon-style2' />
                                <span className='font-bold text-gray-700'>Phone : </span>
                                {contact_information.phone}
                            </p>
                            <p className='text-gray-600'>
                                <EnvelopeIcon className='icon-style2' />
                                <span className='font-bold text-gray-700'>Email : </span>
                                {contact_information.email}
                            </p>
                            <p className='text-gray-600'>
                                <MapPinIcon className='icon-style2' />
                                <span className='font-bold text-gray-700'>Address : </span>
                                {location}
                            </p>
                        </div>
                    </div>
                    <button onClick={() => handleApplyNow(job)} className='w-full mt-6 py-3 text-white text-lg font-semibold rounded-lg bg-gradient-to-r from-indigo-400 to-violet-400'>Apply Now</button>
                </div>
            </div>
        </div>
    );
};

export default JobDetails;