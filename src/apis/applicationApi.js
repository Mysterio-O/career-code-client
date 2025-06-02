export const applicationsPromise = email => {
    return fetch(`http://localhost:3000/application?email=${email}`, {
        credentials: 'include'
    }).then(res=> res.json())
}