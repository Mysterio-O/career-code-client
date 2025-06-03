import axios from 'axios';
import React from 'react';
import useAuth from '../../hooks/useAuth';
import Swal from 'sweetalert2';

const AddJobForm = () => {

    const { user } = useAuth();

    const handleAddJob = e => {
        e.preventDefault();
        const form = e.target;
        const formData = new FormData(form);
        const data = Object.fromEntries(formData.entries());
        // console.log(data);
        const { min, max, currency, ...newData } = data;

        newData.status = 'active'
        newData.requirements = newData.requirements.split(',').map(req => req.trim());
        newData.responsibilities = newData.responsibilities.split(',').map(res => res.trim());
        newData.salaryRange = { min, max, currency };
        console.log(newData);

        axios.post('https://career-code-server-gamma.vercel.app/jobs', newData)
            .then(res => {
                if (res.data.acknowledged || res.data.insertedId > 0) {
                    Swal.fire({
                        position: "top-end",
                        icon: "success",
                        title: "Your job has been published",
                        showConfirmButton: false,
                        timer: 1500
                    });
                }
            })
            .catch(err => {
                console.log(err);
            })
    }

    return (
        <form onSubmit={handleAddJob}>
            <fieldset className="fieldset bg-base-200 border-base-300 rounded-box w-sm md:w-3xl mx-auto border p-4">
                <legend className="fieldset-legend">Add job details</legend>

                <label className="label">Job Title</label>
                <input type="text" name='title' className="input w-full" placeholder="Enter Job Title" />

                <label className="label">Company Name</label>
                <input type="text" name='company' className="input w-full" placeholder="Enter Company Name" />

                <label className="label">Location</label>
                <input type="text" name='location' className="input w-full" placeholder="Enter Location" />
            </fieldset>



            {/* job type  */}
            <fieldset className="fieldset bg-base-200 border-base-300 rounded-box w-sm md:w-3xl mx-auto border p-4">
                <legend className="fieldset-legend">Job Type</legend>
                <div className="filter">
                    <input className="btn filter-reset" type="radio" name="jobType" aria-label="All" />
                    <input className="btn" type="radio" name="jobType" aria-label="On-Site" value="On-Site" />
                    <input className="btn" type="radio" name="jobType" aria-label="Remote" value="Remote" />
                    <input className="btn" type="radio" name="jobType" aria-label="Hybrid" value="Hybrid" />
                    <input className="btn" type="radio" name="jobType" aria-label="Contractual" value="Contractual" />
                </div>
            </fieldset>

            {/* job category  */}
            <fieldset className="fieldset bg-base-200 border-base-300 rounded-box w-sm md:w-3xl mx-auto border p-4">
                <legend className="fieldset-legend">Job Category</legend>
                <select defaultValue="Pick a color" className="select w-full" name='category'>
                    <option disabled={true}>Pick a category</option>
                    <option>Engineering</option>
                    <option>Marketing</option>
                    <option>Management</option>
                </select>
            </fieldset>

            {/* job salary  */}
            <fieldset className="fieldset bg-base-200 border-base-300 rounded-box w-sm md:w-3xl mx-auto border p-4">
                <legend className="fieldset-legend">Job Salary</legend>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-2">
                    <fieldset className="fieldset">
                        <legend className="fieldset-legend">Min Salary</legend>
                        <input type="number" name='min' className="input" placeholder="Type here" />
                    </fieldset>
                    <fieldset className="fieldset">
                        <legend className="fieldset-legend">Max Salary</legend>
                        <input type="number" className="input" name='max' placeholder="Type here" />
                    </fieldset>
                    <fieldset className="fieldset">
                        <legend className="fieldset-legend">Currency</legend>
                        <select defaultValue="Pick a currency" className="select w-full" name='currency'>
                            <option disabled={true}>Pick a currency</option>
                            <option>bdt</option>
                            <option>usd</option>
                            <option>euro</option>
                            <option>pound</option>
                            <option>aud</option>
                            <option>dirham</option>
                        </select>
                    </fieldset>
                </div>
            </fieldset>

            {/* job description  */}
            <fieldset className="fieldset bg-base-200 border-base-300 rounded-box w-sm md:w-3xl mx-auto border p-4">
                <legend className="fieldset-legend">Job description</legend>
                <textarea className="textarea w-full" placeholder="job description" name='description'></textarea>
            </fieldset>
            {/* job requirements  */}
            <fieldset className="fieldset bg-base-200 border-base-300 rounded-box w-sm md:w-3xl mx-auto border p-4">
                <legend className="fieldset-legend">Job requirements</legend>
                <textarea className="textarea w-full" placeholder="job requirements (separate by comma ,)" name='requirements'></textarea>
            </fieldset>
            {/* job responsibilities  */}
            <fieldset className="fieldset bg-base-200 border-base-300 rounded-box w-sm md:w-3xl mx-auto border p-4">
                <legend className="fieldset-legend">Job responsibilities</legend>
                <textarea className="textarea w-full" placeholder="responsibilities (separate by comma)" name='responsibilities'></textarea>
            </fieldset>
            {/* submission deadline */}
            <fieldset className="fieldset bg-base-200 border-base-300 rounded-box w-sm md:w-3xl mx-auto border p-4">
                <legend className="fieldset-legend">Submission deadline</legend>
                <input type="date" name="date" id="" className='input' />
            </fieldset>

            {/* he details */}
            <fieldset className="fieldset bg-base-200 border-base-300 rounded-box w-sm md:w-3xl mx-auto border p-4">
                <legend className="fieldset-legend">Add HR details</legend>

                <label className="label">HR Name</label>
                <input type="text" name='hr_name' className="input w-full" placeholder="Enter HR name" />

                <label className="label">HR Email</label>
                <input type="email" name='hr_email' className="input w-full" value={user?.email} />

                <label className="label">Company Logo</label>
                <input type="url" name='company_logo' className="input w-full" placeholder="Enter logo url" />
            </fieldset>
            <div className="md:w-3xl mx-auto flex justify-center items-center mt-2">
                <button className="btn btn-block">Add Job</button>
            </div>
        </form>
    );
};

export default AddJobForm;