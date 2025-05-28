import React, { useContext, useState } from 'react';
import { AuthContext } from '../../contexts/AuthContext/AuthContext';
import { useNavigate } from 'react-router';

const SocialButton = ({from}) => {
    const { google } = useContext(AuthContext);
    const [loading, setLoading] = useState(false)
    const navigate = useNavigate();

    const handleGoogleLogin = () => {
        setLoading(true)
        google().then(result => {
            console.log('user signed in with google', result);
            setLoading(false)
            navigate(from || '/');
        }).catch(err => {
            console.error(err.code, err.message);
        })
        setLoading(false)
    }
    return (
        <div>
            <div className="flex w-full flex-col">
                <div className="divider">Or Login with</div>
            </div>

            <div className='w-full flex justify-center items-center'>
                <button onClick={handleGoogleLogin} className="btn bg-white text-black border-[#e5e5e5] w-full">
                    {
                        !loading && <svg aria-label="Google logo" width="16" height="16" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><g><path d="m0 0H512V512H0" fill="#fff"></path><path fill="#34a853" d="M153 292c30 82 118 95 171 60h62v48A192 192 0 0190 341"></path><path fill="#4285f4" d="m386 400a140 175 0 0053-179H260v74h102q-7 37-38 57"></path><path fill="#fbbc02" d="m90 341a208 200 0 010-171l63 49q-12 37 0 73"></path><path fill="#ea4335" d="m153 219c22-69 116-109 179-50l55-54c-78-75-230-72-297 55"></path></g></svg>
                    }
                    {
                        loading ? <span className="loading loading-spinner text-info"></span> : 'Login with Google'
                    }
                </button>
            </div>
        </div>
    );
};

export default SocialButton;