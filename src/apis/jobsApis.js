export const jobsAddedBy = (email, accessToken) => {
    return fetch(`https://career-code-server-gamma.vercel.app/job/applications?email=${email}`, {
        credentials: 'include',
        headers: {
            authorization: `Bearer ${accessToken}`
        }
    }).then(res => res.json())
}