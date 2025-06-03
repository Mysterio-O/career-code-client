export const applicationsPromise = (email, accessToken) => {
    return fetch(`https://career-code-server-gamma.vercel.app/application?email=${email}`, {
        credentials: 'include',
        headers: {
            authorization: `Bearer ${accessToken}`
        }
    }).then(res => res.json())
}