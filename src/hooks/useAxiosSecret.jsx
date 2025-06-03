import React from 'react';
import useAuth from './useAuth'
import axios from 'axios';

const axiosInstance = axios.create({
    baseURL: 'https://career-code-server-gamma.vercel.app'
})

const useAxiosSecret = () => {

    const { user, logOutUser } = useAuth();

    // request interceptor
    axiosInstance.interceptors.request.use(config => {
        config.headers.authorization = `Bearer ${user?.accessToken}`
        return config
    })

    // response interceptor
    axiosInstance.interceptors.response.use(response => {
        return response;
    }, error => {
        // console.log(error);
        if (error.status === 401 || error.status === 403) {
            logOutUser().then(() => {
                console.log('user logged out for 401 or 403 status');
            }).catch(err => {
                console.log(err);
            })
        }

        return Promise.reject(error);
    })

    return axiosInstance
};

export default useAxiosSecret;