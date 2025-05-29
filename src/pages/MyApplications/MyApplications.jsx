import React, { Suspense } from 'react';
import useAuth from '../../hooks/useAuth';
import Applications from './Applications';
import { applicationsPromise } from '../../apis/applicationApi';

const MyApplications = () => {

    const { user } = useAuth();

    return (
        <div>
            <Suspense fallback={<p className='text-center'>Loading Your Applications</p>}>
                <Applications applicationsPromise={applicationsPromise(user?.email)}></Applications>
            </Suspense>
        </div>
    );
};

export default MyApplications;