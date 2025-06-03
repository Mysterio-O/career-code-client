import React from 'react';
import useAuth from './useAuth'
import axios from 'axios';

const axiosInstance = axios.create({
    baseURL: 'http://localhost:3000'
})

const useAxiosSecret = () => {

    const { user } = useAuth();

    axiosInstance.interceptors.request.use(config => {
        config.headers.authorization = `Bearer ${user?.accessToken}`
        return config
    })

    return axiosInstance
};

export default useAxiosSecret;