import React, { Suspense } from 'react';
import useAuth from '../../hooks/useAuth';
import Applications from './Applications';
import useApplicationApi from '../../hooks/useApplicationApi';

const MyApplications = () => {

    const { user } = useAuth();
    const accessToken = user?.accessToken;
    const {applicationsPromise} = useApplicationApi();

    return (
        <div>
            <Suspense fallback={<p className='text-center'>Loading Your Applications</p>}>
                <Applications applicationsPromise={applicationsPromise(user?.email, accessToken)}></Applications>
            </Suspense>
        </div>
    );
};

export default MyApplications;