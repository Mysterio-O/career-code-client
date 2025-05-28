import React from 'react';
import { motion } from 'motion/react'
import { Link, useLoaderData } from 'react-router';
import { FaMapMarkerAlt, FaBriefcase, FaMoneyBillWave, FaEnvelope, FaUser } from 'react-icons/fa';

const JobDetails = () => {
    const job = useLoaderData();
    // console.log(job);
    const {
        title,
        company,
        company_logo,
        location,
        jobType,
        salaryRange,
        applicationDeadline,
        description,
        requirements,
        responsibilities,
        hr_name,
        hr_email,
        status,
        _id
    } = job;


    const containerVariants = {
        hidden: { opacity: 0, y: 20 },
        visible: {
            opacity: 1,
            y: 0,
            transition: {
                duration: 0.5,
                when: "beforeChildren",
                staggerChildren: 0.2
            }
        }
    };

    const itemVariants = {
        hidden: { opacity: 0, x: -20 },
        visible: { opacity: 1, x: 0 }
    };


    return (
        <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="max-w-4xl mx-auto p-6 bg-base-100 shadow-2xl rounded-xl my-8"
        >
            {/* Header Section */}
            <div className="flex flex-col md:flex-row items-center gap-6 mb-8">
                <img
                    src={company_logo}
                    alt={`${company} logo`}
                    className="w-24 h-24 object-contain rounded-full border-4 border-primary"
                />
                <div className="text-center md:text-left">
                    <h1 className="text-3xl font-bold text-primary">{title}</h1>
                    <h2 className="text-xl text-secondary">{company}</h2>
                    <div className="badge badge-accent mt-2">{status.toUpperCase()}</div>
                </div>
            </div>

            {/* Job Info Cards */}
            <motion.div variants={itemVariants} className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
                <div className="card bg-base-200 p-4 rounded-lg">
                    <div className="flex items-center gap-2">
                        <FaMapMarkerAlt className="text-primary" />
                        <span><strong>Location:</strong> {location}</span>
                    </div>
                </div>
                <div className="card bg-base-200 p-4 rounded-lg">
                    <div className="flex items-center gap-2">
                        <FaBriefcase className="text-primary" />
                        <span><strong>Job Type:</strong> {jobType}</span>
                    </div>
                </div>
                <div className="card bg-base-200 p-4 rounded-lg">
                    <div className="flex items-center gap-2">
                        <FaMoneyBillWave className="text-primary" />
                        <span>
                            <strong>Salary:</strong> {salaryRange.min} - {salaryRange.max} {salaryRange.currency.toUpperCase()}
                        </span>
                    </div>
                </div>
                <div className="card bg-base-200 p-4 rounded-lg">
                    <div className="flex items-center gap-2">
                        <FaEnvelope className="text-primary" />
                        <span><strong>Apply by:</strong> {new Date(applicationDeadline).toLocaleDateString()}</span>
                    </div>
                </div>
            </motion.div>

            {/* Description */}
            <motion.div variants={itemVariants} className="mb-8">
                <h3 className="text-2xl font-semibold mb-4 text-primary">Job Description</h3>
                <p className="text-base-content">{description}</p>
            </motion.div>

            {/* Requirements */}
            <motion.div variants={itemVariants} className="mb-8">
                <h3 className="text-2xl font-semibold mb-4 text-primary">Requirements</h3>
                <ul className="list-disc list-inside space-y-2">
                    {requirements.map((req, index) => (
                        <li key={index} className="text-base-content">{req}</li>
                    ))}
                </ul>
            </motion.div>

            {/* Responsibilities */}
            <motion.div variants={itemVariants} className="mb-8">
                <h3 className="text-2xl font-semibold mb-4 text-primary">Responsibilities</h3>
                <ul className="list-disc list-inside space-y-2">
                    {responsibilities.map((resp, index) => (
                        <li key={index} className="text-base-content">{resp}</li>
                    ))}
                </ul>
            </motion.div>

            {/* HR Contact */}
            <motion.div variants={itemVariants} className="card bg-base-200 p-6 rounded-lg">
                <h3 className="text-2xl font-semibold mb-4 text-primary">Contact HR</h3>
                <div className="flex items-center gap-2 mb-2">
                    <FaUser className="text-primary" />
                    <span><strong>Name:</strong> {hr_name}</span>
                </div>
                <div className="flex items-center gap-2">
                    <FaEnvelope className="text-primary" />
                    <span><strong>Email:</strong> <a href={`mailto:${hr_email}`} className="link link-primary">{hr_email}</a></span>
                </div>
            </motion.div>

            {/* Apply Button */}
            <motion.div
                variants={itemVariants}
                className="mt-8 text-center"
            >
                <Link to={`/jobApply/${_id}`}>
                    <motion.button
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        className="btn btn-primary">Apply Now</motion.button>
                </Link>
            </motion.div>
        </motion.div>
    );
};

export default JobDetails;