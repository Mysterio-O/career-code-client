import React, { use, useRef } from 'react';
import { motion } from 'motion/react'
import JobCard from './JobCard';
const HotJobs = ({ jobsPromise }) => {

    const scrollRef = useRef(null);

    const jobs = use(jobsPromise);
    // console.log(jobs)

    return (
        <div ref={scrollRef}>
            <h2 className='text-5xl text-center font-semibold mb-6'>Most Recent Jobs</h2>
            <motion.div
                initial={{ opacity: 0, scale:0.3, rotate:-60 }}
                whileInView={{ opacity: 1, scale: 1, rotate:0 }}
                transition={{ duration: 1 }}
                viewport={{ root: scrollRef }}
                className='grid gap-4 grid-cols-1 md:grid-cols-2 lg:grid-cols-3'>
                {
                    jobs.map(job => <JobCard key={job._id} job={job} />)
                }
            </motion.div>
        </div>
    );
};

export default HotJobs;