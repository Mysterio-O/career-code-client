import React from 'react';
import { FaLocationDot } from 'react-icons/fa6';
import { Link } from 'react-router';
import { motion } from "motion/react"


const JobCard = ({ job }) => {


    // console.log(job);
    const { title, company, jobType, description, salaryRange, company_logo, location, requirements, _id } = job
    return (
        <div>
            <motion.div
                whileHover={{scale:1.1}}
                transition={{duration:0.3}}
                className="card bg-base-100 w-96 shadow-sm">
                <div className='flex'>
                    <figure className='p-2'>
                        <img
                            className=''
                            src={company_logo}
                            alt={`${company}'s photo`} />
                    </figure>

                    <div>
                        <h2 className="card-title">
                            {title}
                            <div className="badge badge-secondary">{jobType}</div>
                        </h2>
                        <p className='text-sm font-semibold'>{company}</p>
                        <p className='text-sm font-semibold flex items-center gap-1'><FaLocationDot /> {location}</p>
                        <p>
                            {salaryRange.min} - {salaryRange.max} {salaryRange.currency}
                        </p>
                    </div>

                </div>
                <div className="card-body">

                    <p>{description}</p>
                    <div className="card-actions">
                        {
                            requirements.map((skill, i) => <div className="badge badge-outline"
                                key={`${skill}-${i}`}
                            >{skill}
                            </div>)
                        }

                    </div>
                    <div className="w-full flex justify-end">
                        <Link to={`/job/${_id}`}>
                            <motion.button
                            whileHover={{translateY:10}}
                            whileTap={{translateY:0}}
                            transition={{duration:0.3}}
                            className="btn btn-primary">View Details</motion.button>
                        </Link>
                    </div>
                </div>


            </motion.div>
        </div>
    );
};

export default JobCard;