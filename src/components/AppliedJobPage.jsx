import React, { useContext, useState } from 'react';
import vector from '../assets/Vector.png'
import vector1 from '../assets/Vector-1.png'
import { JobsContext } from '../App';
import AppliedJob from './AppliedJob';

const AppliedJobPage = () => {
    const [jobs, setJobs] = useContext(JobsContext)

    const [selectedValue, setSelectedValue] = useState("");

    function handleFilterByJobType(event) {
        const value = event.target.value;
        setSelectedValue(value);

        // Filter the dataArray based on the selected value
        const filteredJobs = jobs.filter(job => job.job_type == value);
        setJobs(filteredJobs);
    }

    return (
        <div className=''>
            <div className='bg-gray-100 relative'>
                <div className='my-container pt-12 pb-28 text-center'>
                    <h2 className='font-bold text-3xl'>Applied Jobs</h2>
                </div>
                <img className='absolute bottom-0 left-0 w-72' src={vector} alt="" />
                <img className='absolute -top-36 right-0 w-72' src={vector1} alt="" />
            </div>
            
            <div className='my-container py-24'>
                <div className='flex justify-end'>
                                    
                    <select onChange={handleFilterByJobType} value={selectedValue} className="bg-gray-50 border border-gray-300 font-bold text-base text-gray-800 rounded-lg focus:ring-blue-500 focus:border-blue-500 w-fit p-3">
                        <option value="">Filter By</option>
                        <option value="Remote">Remote</option>
                        <option value="Onsite">Onsite</option>
                    </select>

                </div>
                <div className='space-y-6 my-6'>
                    {
                        jobs.map(job => <AppliedJob
                        key={job.id}
                        job={job}
                        ></AppliedJob>)
                    }
                </div>
            </div>
        </div>
    );
};

export default AppliedJobPage;