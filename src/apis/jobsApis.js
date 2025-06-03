export const jobsAddedBy = (email, accessToken) => {
    return fetch(`http://localhost:3000/job/applications?email=${email}`,{
        credentials: 'include',
        headers:{
            authorization: `Bearer ${accessToken}`
        }
    }).then(res => res.json())
}