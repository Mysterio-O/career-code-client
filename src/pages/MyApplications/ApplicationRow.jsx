import React from 'react';

const ApplicationRow = ({application, index, handleDelete}) => {
    return (
        <tr>
            <th>
                {index + 1}
            </th>
            <td>
                <div className="flex items-center gap-3">
                    <div className="avatar">
                        <div className="mask mask-squircle h-12 w-12">
                            <img
                                src={application.company_logo}
                                alt={`${application.company}'s logo`} />
                        </div>
                    </div>
                    <div>
                        <div className="font-bold">{application.company}</div>
                        <div className="text-sm opacity-50">{application.location}</div>
                    </div>
                </div>
            </td>
            <td>
                {application.title}
                <br />
                <span className="badge badge-ghost badge-sm">
                    {application.salaryRange.min} - {application.salaryRange.max} {application.salaryRange.currency}
                </span>
            </td>
            <td>{application.jobId}</td>
            <th>
                <button 
                onClick={()=> handleDelete(application._id)}
                className="btn btn-ghost btn-xs">Delete</button>
            </th>
        </tr>
    );
};

export default ApplicationRow;