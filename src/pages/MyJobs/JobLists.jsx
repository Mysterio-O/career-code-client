import React, { use } from 'react';
import JobsTableRow from './JobsTableRow';

const JobLists = ({ jobsAddedBy }) => {

    const jobs = use(jobsAddedBy);

    return (
        <div>
            <h1 className="text-4xl">{jobs.length}</h1>

            <div className="overflow-x-auto">
                <table className="table">
                    {/* head */}
                    <thead>
                        <tr>
                            <th></th>
                            <th>Job Title</th>
                            <th>Job Type</th>
                            <th>Deadline</th>
                            <th>Total Applications</th>
                            <th>Applications</th>
                        </tr>
                    </thead>
                    <tbody>
                        
                        {/* dynamic rows */}
                        
                        {
                            jobs.map((job,index)=> <JobsTableRow key={`${job.title} + ${index}`} job={job} index={index}/>)
                        }
                        
                    </tbody>
                </table>
            </div>

        </div>
    );
};

export default JobLists;