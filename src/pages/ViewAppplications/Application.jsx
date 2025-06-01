import axios from 'axios';
import React from 'react';
import Swal from 'sweetalert2';

const Application = ({ application, index }) => {

    const {
        email,
        github,
        jobId,
        linkedin,
        name,
        resume,
        _id
    } = application;
    console.log(application)

    const handleStatusChange = (e, application) => {
        // console.log(e.target.value, application._id);

        const status = e.target.value;

        axios.patch(`http://localhost:3000/applications/${application._id}`, { status })
            .then(res => {
                console.log(res)
                if (res.data.acknowledged) {
                    Swal.fire({
                        position: "top-end",
                        icon: "success",
                        title: "Application status has been changed",
                        showConfirmButton: false,
                        toast: true,
                        timer: 1500
                    });
                }
            })
            .catch(err => console.log(err))
    }

    return (
        <tr className="bg-base-200">
            <th>{index + 1}</th>
            <td>{name}</td>
            <td className='space-x-2'>
                <a className='text-blue-500 underline' target='_blank' href={github}>Github</a>
                <a className='text-blue-500 underline' target='_blank' href={linkedin}>Linkedin</a>
                <a className='text-blue-500 underline' target='_blank' href={resume}>Resume</a>
            </td>
            <td className='flex flex-col'>
                <span>JobId: {jobId}</span>
                <span>Email: {email}</span>
            </td>
            <td>
                <select
                    onChange={e => handleStatusChange(e, application)}
                    defaultValue={`${application?.status || 'Pending'}`} className="select">
                    <option disabled={true}>Select Status</option>
                    <option>Pending</option>
                    <option>Interview</option>
                    <option>Hired</option>
                    <option>Rejected</option>
                </select>
            </td>
        </tr>
    );
};

export default Application;