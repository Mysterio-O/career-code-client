import React, { Suspense } from 'react';
import useAuth from '../../hooks/useAuth';
import JobLists from './JobLists'
import { jobsAddedBy } from '../../apis/jobsApis';
const MyJobs = () => {

    const {user} = useAuth();
    console.log(user)

    return (
        <div>
            <Suspense fallback={'loading..'}>
                <JobLists jobsAddedBy={jobsAddedBy(user.email, user.accessToken)}/>
            </Suspense>
        </div>
    );
};

export default MyJobs;