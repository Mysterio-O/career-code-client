import React, { use, useEffect, useState } from 'react';
import ApplicationRow from './ApplicationRow';
import Swal from 'sweetalert2';

const Applications = ({ applicationsPromise }) => {
    const myApplications = use(applicationsPromise);
    const [applications, setApplications] = useState([]);
    useEffect(() => {
        setApplications(myApplications)
    }, [myApplications])
    // console.log(applications)

    const handleDelete = id => {
        fetch(`https://career-code-server-gamma.vercel.app/application/${id}`, {
            method: "DELETE"
        })
            .then(res => res.json())
            .then(data => {
                if (data.acknowledged || data.deletedCount > 0) {
                    console.log('after delete', data);
                    Swal.fire({
                        position: "top-end",
                        icon: "success",
                        title: "Your application has been deleted.",
                        showConfirmButton: false,
                        timer: 1500
                    });
                    const remainingApplications = applications.filter(application => application._id !== id);
                    setApplications(remainingApplications);
                }
            })
            .catch(err => {
                console.error(err);
            })
    }
    return (
        <div className="overflow-x-auto">
            <table className="table">
                {/* head */}
                <thead>
                    <tr>
                        <th>
                            Serial
                        </th>
                        <th>Company Name</th>
                        <th>Job & Salary</th>
                        <th>Job Id</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        applications.map((application, index) => <ApplicationRow
                            key={application._id}
                            application={application}
                            index={index}
                            handleDelete={handleDelete}
                        />)
                    }
                </tbody>
            </table>
        </div>
    );
};

export default Applications;