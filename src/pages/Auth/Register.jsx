import React from "react";
import { useForm } from "react-hook-form";
import UseAuth from "../../hooks/UseAuth";

const Register = () => {
  const { register, handleSubmit, formState: { errors } } = useForm();
  const { registerUser } = UseAuth();

  const handleRegister = (data) => {
    console.log('After register', data);
    registerUser(data.email, data.password)
      .then(result => {
        console.log(result.user);
      })
      .catch(error => {
        console.log(error);
      });
  };

  return (
    <div>
      <form onSubmit={handleSubmit(handleRegister)}>
        <fieldset className="fieldset">
          {/* Email */}
          <label className="label">Email</label>
          <input 
            type="email" 
            {...register('email', { required: true })} 
            className="input" 
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
            className="input" 
            placeholder="Password" 
          />
          {errors.password?.type === 'required' && (
            <p className="text-red-500">Password is required</p>
          )}
          {errors.password?.type === 'minLength' && (
            <p className="text-red-500">Password must be 6 characters or longer</p>
          )}

          <button type="submit" className="btn btn-neutral mt-4">Register</button>
        </fieldset>
      </form>
    </div>
  );
};

export default Register;
