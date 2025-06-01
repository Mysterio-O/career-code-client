import React from 'react';
import { useLoaderData } from 'react-router';
import Application from './Application';

const ViewApplications = () => {
    const applications = useLoaderData();
    console.log(applications);
    return (
        <div>

            <div className="overflow-x-auto">
                <table className="table">
                    {/* head */}
                    <thead>
                        <tr>
                            <th></th>
                            <th>Applicant</th>
                            <th>Links</th>
                            <th>Details</th>
                            <th>Status</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            applications.map((application, index) => <Application
                                key={index}
                                application={application}
                                index={index} />)
                        }
                    </tbody>
                </table>
            </div>



        </div>
    );
};

export default ViewApplications;