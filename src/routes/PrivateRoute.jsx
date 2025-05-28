import React, { useContext } from 'react';
import { AuthContext } from '../contexts/AuthContext/AuthContext';
import { Navigate, useLocation } from 'react-router';

const PrivateRoute = ({children}) => {

    const {user, loading} = useContext(AuthContext);
    const location = useLocation();

    if(loading) return <span className="loading loading-ring loading-xl"></span>

    if(!user) {
        return <Navigate to='/login' state={location?.pathname}></Navigate>
    }

    return children
};

export default PrivateRoute;