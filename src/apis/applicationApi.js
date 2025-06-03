export const applicationsPromise = (email, accessToken) => {
    return fetch(`http://localhost:3000/application?email=${email}`, {
        credentials: 'include',
        headers:{
            authorization: `Bearer ${accessToken}`
        }
    }).then(res=> res.json())
}