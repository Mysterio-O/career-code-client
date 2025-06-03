import React from 'react';
import useAxiosSecret from './useAxiosSecret';

const useApplicationApi = () => {

    const axiosSecure = useAxiosSecret();

    const applicationsPromise = email => {
        return axiosSecure.get(`/application?email=${email}`).then(res => res.data);
    }
    return {
        applicationsPromise
    };
};

export default useApplicationApi;