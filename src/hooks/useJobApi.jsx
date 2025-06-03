import React from 'react';
import useAxiosSecret from './useAxiosSecret';

const useJobApi = () => {

    const axiosSecure = useAxiosSecret();

    const jobsAddedBy = email => {
        return axiosSecure.get(`/job/applications?email=${email}`).then(res => res.data)
    }

    return {
        jobsAddedBy
    };
};

export default useJobApi;