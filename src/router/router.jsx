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
import AddJob from '../pages/AddJob/AddJob';
import MyJobs from '../pages/MyJobs/MyJobs';
import ViewApplications from '../pages/ViewAppplications/ViewApplications';

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
                path: '/addJob',
                element: <PrivateRoute>
                    <AddJob />
                </PrivateRoute>
            },
            {
                path: '/myJobs',
                element: <PrivateRoute>
                    <MyJobs />
                </PrivateRoute>
            },
            {
                path: '/applications/:job_id',
                element: <PrivateRoute>
                    <ViewApplications />
                </PrivateRoute>,
                loader: ({params})=> fetch(`http://localhost:3000/applications/job/${params.job_id}`)
            },
            {
                path: '/clock',
                Component: Clock
            },
            {
                path: '/applications',
                element: <PrivateRoute>
                    <MyApplications />
                </PrivateRoute>
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