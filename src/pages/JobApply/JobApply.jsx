import React from 'react';
import { motion } from 'framer-motion';
import { FaUser, FaEnvelope, FaPhone, FaLinkedin, FaGithub, FaFileAlt } from 'react-icons/fa';
import { useNavigate, useParams } from 'react-router';
import useAuth from '../../hooks/useAuth';
import axios from 'axios';
import Swal from 'sweetalert2';

const JobApply = () => {

    const navigate = useNavigate();

    const { user } = useAuth();
    // console.log(user)

    const { id: jobId } = useParams();
    // console.log(jobId)

    // Animation variants
    const containerVariants = {
        hidden: { opacity: 0, y: 20 },
        visible: {
            opacity: 1,
            y: 0,
            transition: {
                duration: 0.5,
                when: 'beforeChildren',
                staggerChildren: 0.2,
            },
        },
    };

    const itemVariants = {
        hidden: { opacity: 0, x: -20 },
        visible: { opacity: 1, x: 0 },
    };


    const handleApply = e => {
        e.preventDefault();
        const form = e.target;
        const formData = new FormData(form);
        const data = Object.fromEntries(formData.entries());
        // console.log({...data});
        const applicationData = {
            jobId,
            ...data,
            userName: user?.displayName,
            userEmail: user?.email
        }

        axios.post('http://localhost:3000/application', applicationData)
            .then(res => {
                console.log(res.data);
                if (res.data.insertedId) {
                    isNavigating(true)
                    Swal.fire({
                        position: "top-end",
                        icon: "success",
                        title: "Your work has been saved",
                        showConfirmButton: false,
                        timer: 1500
                    });
                    navigate('/');
                }
            })
            .catch(err => {
                console.error(err);
            })

        form.reset();

    }

    return (
        <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="max-w-4xl mx-auto p-6 bg-base-100 shadow-2xl rounded-xl my-8"
        >
            {/* Header Section */}
            <motion.div variants={itemVariants} className="mb-8 text-center">
                <h1 className="text-3xl font-bold text-primary">Job Application</h1>
                <p className="text-secondary mt-2">Submit your details to apply for the position</p>
            </motion.div>

            {/* Application Form */}
            <motion.div variants={itemVariants} className="space-y-6">
                {/* Name */}
                <form onSubmit={handleApply}>
                    <motion.div variants={itemVariants} className="form-control">
                        <label className="label">
                            <span className="label-text flex items-center gap-2">
                                <FaUser className="text-primary" /> Full Name
                            </span>
                        </label>
                        <input
                            type="text"
                            name='name'
                            defaultValue={user?.displayName}
                            placeholder="Enter your full name"
                            className="input input-bordered w-full"
                        />
                    </motion.div>

                    {/* Email */}
                    <motion.div variants={itemVariants} className="form-control">
                        <label className="label">
                            <span className="label-text flex items-center gap-2">
                                <FaEnvelope className="text-primary" /> Email Address
                            </span>
                        </label>
                        <input
                            type="email"
                            name='email'
                            defaultValue={user?.email}
                            placeholder="Enter your email"
                            className="input input-bordered w-full"
                        />
                    </motion.div>

                    {/* Phone */}
                    <motion.div variants={itemVariants} className="form-control">
                        <label className="label">
                            <span className="label-text flex items-center gap-2">
                                <FaPhone className="text-primary" /> Phone Number
                            </span>
                        </label>
                        <input
                            type="tel"
                            name='phone'
                            placeholder="Enter your phone number"
                            className="input input-bordered w-full"
                        />
                    </motion.div>

                    {/* LinkedIn URL */}
                    <motion.div variants={itemVariants} className="form-control">
                        <label className="label">
                            <span className="label-text flex items-center gap-2">
                                <FaLinkedin className="text-primary" /> LinkedIn URL
                            </span>
                        </label>
                        <input
                            type="url"
                            name='linkedin'
                            placeholder="Enter your LinkedIn profile URL"
                            className="input input-bordered w-full"
                        />
                    </motion.div>

                    {/* GitHub URL */}
                    <motion.div variants={itemVariants} className="form-control">
                        <label className="label">
                            <span className="label-text flex items-center gap-2">
                                <FaGithub className="text-primary" /> GitHub URL
                            </span>
                        </label>
                        <input
                            type="url"
                            name='github'
                            placeholder="Enter your GitHub profile URL"
                            className="input input-bordered w-full"
                        />
                    </motion.div>

                    {/* Resume URL */}
                    <motion.div variants={itemVariants} className="form-control">
                        <label className="label">
                            <span className="label-text flex items-center gap-2">
                                <FaFileAlt className="text-primary" /> Resume URL
                            </span>
                        </label>
                        <input
                            type="url"
                            name='resume'
                            placeholder="Enter your resume URL"
                            className="input input-bordered w-full"
                        />
                    </motion.div>

                    {/* Submit Button */}
                    <motion.div
                        variants={itemVariants}
                        className="text-center"
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                    >
                        <button
                            type="submit"
                            className="btn btn-primary btn-lg mt-3 w-full"
                        >
                            Submit Application
                        </button>
                    </motion.div>
                </form>
            </motion.div>
        </motion.div>
    );
};

export default JobApply;