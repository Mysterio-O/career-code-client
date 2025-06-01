export const jobsAddedBy = email => {
    return fetch(`http://localhost:3000/job/applications?email=${email}`).then(res => res.json())
}