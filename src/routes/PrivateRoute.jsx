import React, { useContext } from 'react';
import { AuthContext } from '../contexts/AuthContext/AuthContext';
import { Navigate } from 'react-router';

const PrivateRoute = ({children}) => {

    const {user} = useContext(AuthContext);

    if(!user) {
        return <Navigate to='/login'></Navigate>
    }

    return children
};

export default PrivateRoute;