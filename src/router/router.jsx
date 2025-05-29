import React from 'react';
import { createBrowserRouter } from 'react-router';
import RootLayout from '../layouts/RootLayout';
import Home from '../pages/Home/Home'
import Register from '../pages/Register/Register';
import Login from '../pages/Login/Login';
import JobDetails from '../pages/JobDetails/JobDetails';
import PrivateRoute from '../routes/PrivateRoute';
import JobApply from '../pages/JobApply/JobApply';
import Clock from '../pages/Clock/CLock';
import MyApplications from '../pages/MyApplications/MyApplications';

const router = createBrowserRouter([
    {
        path: '/',
        Component: RootLayout,
        children: [
            {
                index: true,
                Component: Home
            },
            {
                path: '/clock',
                Component: Clock
            },
            {
                path:'/applications',
                Component:MyApplications
            },
            {
                path: '/job/:id',
                Component: JobDetails,
                loader: ({ params }) => fetch(`http://localhost:3000/job/${params.id}`)
            },
            {
                path: '/jobApply/:id',
                element: <PrivateRoute>
                    <JobApply />
                </PrivateRoute>
            },
            {
                path: '/register',
                Component: Register
            },
            {
                path: '/login',
                Component: Login
            }
        ]
    }
])

export default router;