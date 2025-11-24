import React from "react";
import { useForm } from "react-hook-form";
import UseAuth from "../../hooks/UseAuth";
import { Link, useLocation, useNavigate } from "react-router";
import SocialLogin from "./SocialLogin";
import axios from "axios";

const Register = () => {
  const { register, handleSubmit, formState: { errors } } = useForm();
  const { registerUser, updateUserProfile } = UseAuth();

  const location = useLocation();
  const navigate = useNavigate();

  const handleRegister = (data) => {
    console.log('After register', data.photo[0]);
    const profileImg = data.photo[0];
    registerUser(data.email, data.password)
      .then(result => {
        console.log(result.user);

        // Store the image in form data
        const formData = new FormData();
        formData.append('image', profileImg)

        // Send the photo to store and get the URL
        const image_API_URL = `https://api.imgbb.com/1/upload?key=${import.meta.env.VITE_image_host_key}`
        axios.post(image_API_URL, formData)
        .then(res => {
          console.log('after image upload', res.data.data.url )

          // Update user profile
          const userProfile = {
            displayName : data.name,
            photoURL: res.data.data.url
          }
          updateUserProfile(userProfile)
          .then(() => {
            console.log('user profile updated done')
          })
          .catch(error => {
            console.log(error)
          })
        })
      })
      .catch(error => {
        console.log(error);
      });
  };

  return (
    <div>
      <form onSubmit={handleSubmit(handleRegister)} className="my-20">
        <h2 className="text-3xl font-bold text-center">New To ZapShift? , Please Register...</h2>
        <fieldset className="fieldset">

        {/* Name */}
          <label className="label">Name</label>
          <input 
            type="text" 
            {...register('name', { required: true })} 
            className="input w-full" 
            placeholder="Name" 
          />
          {errors.email?.type === 'required' && (
            <p className="text-red-500">Name is required</p>
          )}

          {/* Photo */}
          <label className="label">Photo URL</label>
          <input 
            type="file" 
            {...register('photo', { required: true })} 
            className="file-input w-full" 
            placeholder="Photo URL" 
          />
          {errors.email?.type === 'required' && (
            <p className="text-red-500">Photo is required</p>
          )}

          {/* Email */}
          <label className="label">Email</label>
          <input 
            type="email" 
            {...register('email', { required: true })} 
            className="input w-full" 
            placeholder="Email" 
          />
          {errors.email?.type === 'required' && (
            <p className="text-red-500">Email is required</p>
          )}

          {/* Password */}
          <label className="label">Password</label>
          <input 
            type="password" 
            {...register('password', { required: true, minLength: 6 })} 
            className="input w-full" 
            placeholder="Password" 
          />
          {errors.password?.type === 'required' && (
            <p className="text-red-500">Password is required</p>
          )}
          {errors.password?.type === 'minLength' && (
            <p className="text-red-500">Password must be 6 characters or longer</p>
          )}

          <button type="submit" className="btn btn-neutral mt-4">Register</button>
          <SocialLogin></SocialLogin>
          <h3 className="text-md font-semibold text-center mt-2">Already Have An Account? Please <Link state={location.state} className="text-green-500 underline font-bold" to='/login'>Login Now</Link> </h3>
        </fieldset>
      </form>
    </div>
  );
};

export default Register;
