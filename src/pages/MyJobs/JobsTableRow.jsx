import React from 'react';
import { Link } from 'react-router';

const JobsTableRow = ({job, index}) => {
    console.log(job)
    return (
        <tr className="hover:bg-base-300">
            <th>{index + 1}</th>
            <td>{job?.title}</td>
            <td>{job?.jobType}</td>
            <td>{job?.date}</td>
            <td>{job?.applicationCount}</td>
            <td className='cursor-pointer'><Link to={`/applications/${job._id}`}>View Application</Link></td>
        </tr>
    );
};

export default JobsTableRow;