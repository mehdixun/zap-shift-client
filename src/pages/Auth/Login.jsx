import React from 'react';
import { useForm } from 'react-hook-form';
import UseAuth from '../../hooks/UseAuth';
import { Link, Navigate, useLocation, useNavigate } from 'react-router';
import SocialLogin from './SocialLogin';

const Login = () => {
    const {register, handleSubmit, formState: {errors}} = useForm();
    const {signInUser} = UseAuth();
    const location = useLocation();
     const navigate = useNavigate();

    const handleLogin = (data) => {
        console.log(data)
        signInUser(data.email, data.password)
        .then(result => {
            console.log(result.user)
            navigate(location?.state || '/')
        })
        .catch(error => {
            console.log(error)
        })
    }
    return (
        <form onSubmit={handleSubmit (handleLogin)} className='my-20'>
            <h2 className='text-3xl font-bold text-center'>Welecome Back, Please Login...</h2>
        <fieldset className="fieldset">
                {/* Email */}
          <label className="label">Email</label>
          <input type="email" {...register('email', {required:true})} className="input w-full" placeholder="Email" />
          {
            errors.email?.type === 'required' && <p className='text-red-500'>Email is required</p>
          }
          {/* Password */}
          <label className="label">Password</label>
          <input type="password" {...register('password', {required: true, minLength: 6})} className="input w-full" placeholder="Password" />
          {
            errors.password?.type === 'minLength' && <p className='text-red-500'>Password must be 6 charecter or longer</p>
          }
          <div><a className="link link-hover">Forgot password?</a></div>
          <button className="btn btn-neutral mt-4">Login</button>
          <SocialLogin></SocialLogin>
          <h3 className='text-center text-md font-semibold mt-2'>Don't Have An Account? Please <Link state={location.state} className='text-green-500 underline font-bold' to='/register'>Register Now</Link></h3>
        </fieldset>
        </form>
    );
};

export default Login;