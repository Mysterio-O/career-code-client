import Lottie from 'lottie-react';
import React, { useContext } from 'react';
import loginAnimation from '../../assets/lotties/Animation - login.json';
import { AuthContext } from '../../contexts/AuthContext/AuthContext';
import { useNavigate } from 'react-router';
import SocialButton from '../shared/SocialButton';

const Login = () => {

    const {signInUser} = useContext(AuthContext);
    const navigate = useNavigate();

    const handleLogin = e => {
        e.preventDefault();
        const form = e.target;
        const email = form.email.value;
        const password = form.password.value;
        // console.log({email, password});

        signInUser(email, password).then(result => {
            console.log('user successfully logged in', result);
            navigate('/');
        }).catch(err =>{
            console.error(err.code, err.message);
        })
    }
    return (
        <div className="hero bg-base-200 min-h-screen">
            <div className="hero-content flex-col lg:flex-row-reverse gap-12">
                <div className="text-center lg:text-left">

                    <Lottie
                        loop={true}
                        animationData={loginAnimation}
                        style={{
                            width: '300px'
                        }}
                    ></Lottie>

                </div>
                <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
                    <div className="card-body">
                        <h1 className="text-5xl text-center font-bold">Login Now!</h1>

                        <form onSubmit={handleLogin}>
                            <fieldset className="fieldset">
                                <label className="label">Email</label>
                                <input type="email" name='email' className="input" placeholder="Email" />
                                <label className="label">Password</label>
                                <input type="password" name='password' className="input" placeholder="Password" />
                                <div><a className="link link-hover">Forgot password?</a></div>
                                <button className="btn btn-neutral mt-4">Login</button>
                            </fieldset>
                            <SocialButton/>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;