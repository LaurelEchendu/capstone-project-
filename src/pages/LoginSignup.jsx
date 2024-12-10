import React from 'react';
import { useForm } from "react-hook-form";
import { DevTool } from "@hookform/devtools";
import { Link, useNavigate } from 'react-router-dom';

const LoginSignup = () => {
  const navigate = useNavigate(); // Initialize navigate
  const form = useForm();
  const { register, handleSubmit, control, formState: { errors } } = form;

  const onSubmit = (data) => {
    console.log(data);
    navigate('/'); // Redirect to the Shop page after submission
  };


  return (
    <div className='lg:w-[100%] lg:h-[130vh] lg:bg-[#fce3fe] lg:pt-[100px] lg:mb-[50px] md:w-[100%] md:h-[130vh] md:bg-[#fce3fe] md:pt-[100px] md:mb-[50px] sm:w-[100%] sm:h-[130vh] bg-[#fce3fe] pt-[100px]'>
      <div className='lg:w-[700px] lg:h-fit lg:bg-white lg:m-auto lg:py-[40px] lg:px-[60px] md:w-[600px] md:h-fit md:bg-white md:m-auto md:py-[40px] md:px-[60px] w-[300px] bg-white h-fit m-auto py-[40px] px-[60px] rounded-sm'>
        <h1 className='lg:my-[20px] md:my-[20px] sm:my-[20px] text-center'>Sign Up</h1>
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className='lg:flex lg:flex-col lg:gap-[30px] lg:mt-[30px] md:flex md:flex-col md:gap-[30px] md:mt-[30px] sm:flex flex-col gap-[30px] mt-[30px]'>
            <input 
              className='lg:h-[70px] lg:w-[100%] lg:pl-[20px] md:h-[70px] md:w-[100%] md:pl-[20px] sm:h-[70px] sm:w-[100%] sm:pl-[20px] border-2 border-[#c9c9c9] border-solid outline-none text-[#5c5c5c] sm:text-[16px] w-[100%] h-[50px] mb-8' 
              type="text" 
              placeholder='Your full-name' 
              {...register("fullName", { 
                required: true, 
                maxLength: { 
                  value: 20, 
                  message: 'must not exceed 20 characters' 
                } 
              })} 
              aria-invalid={errors.fullName ? "true" : "false"} 
            />
            {errors.fullName?.type === "required" && (
              <p role="alert" className='text-[#ff4141]'>Full name is required!</p>
            )}

            <input 
              className='lg:h-[70px] lg:w-[100%] lg:pl-[20px] md:h-[70px] md:w-[100%] md:pl-[20px] sm:h-[70px] sm:w-[100%] sm:pl-[20px] border-2 border-[#c9c9c9] border-solid outline-none text-[#5c5c5c] sm:text-[16px] w-[100%] h-[50px] mb-8' 
              type="email" 
              placeholder='Email Address' 
              {...register("email", { required: true })} 
              aria-invalid={errors.email ? "true" :"false"} 
            />
            {errors.email?.type === "required" && (
              <p role='alert' className='text-[#ff4141]'>E-mail is required!</p>
            )}

            <input 
              className='lg:h-[70px] lg:w-[100%] lg:pl-[20px] md:h-[70px] md:w-[100%] md:pl-[20px] sm:h-[70px] sm:w-[100%] sm:pl-[20px] border-2 border-[#c9c9c9] border-solid outline-none text-[#5c5c5c] sm:text-[16px] w-[100%] h-[50px] mb-8' 
              type="text" 
              placeholder='Phone Number' 
              {...register("Phone", { required: true })} 
              aria-invalid={errors.Phone ? "true" :"false"} 
            />
            {errors.Phone?.type === "required" && (
              <p role='alert' className='text-[#ff4141]'>Phone number is required!</p>
            )}

            <input 
              className='lg:h-[70px] lg:w-[100%] lg:pl-[20px] md:h-[70px] md:w-[100%] md:pl-[20px] sm:h-[70px] sm:w-[100%] sm:pl-[20px] border-2 border-[#c9c9c9] border-solid outline-none text-[#5c5c5c] sm:text-[16px] w-[100%] h-[50px] mb-8' 
              type="text" 
              placeholder='State' 
              {...register("State", { required: true })} 
              aria-invalid={errors.State ? "true" :"false"} 
            />
            {errors.State?.type === "required" && (
              <p role='alert' className='text-[#ff4141]'>State is required!</p>
            )}

            <input 
              className='lg:h-[70px] lg:w-[100%] lg:pl-[20px] md:h-[70px] md:w-[100%] md:pl-[20px] sm:h-[70px] sm:w-[100%] sm:pl-[20px] border-2 border-[#c9c9c9] border-solid outline-none text-[#5c5c5c] sm:text-[16px] w-[100%] h-[50px] mb-8' 
              type="password" 
              placeholder='Password' 
              {...register("password", { 
                required: true, 
                minLength: { 
                  value: 5, 
                  message: 'weak!!, try a stronger password, should not be less than 5 characters' 
                }, 
                maxLength: { 
                  value: 12, 
                  message: 'must not exceed 12 characters' 
                } 
              })} 
              aria-invalid={errors.password ? "true": "false"} 
            />
            {errors.password?.type==="required" && (
              <p role='alert' className='text-[#ff4141]'>Password is required!</p>
            )}
          </div>
          <input 
            type='submit' 
            className='lg:w-[580px] lg:h-[72px] lg:text-[24px] md:w-[480px] md:h-[72px] md:text-[24px] sm:w-[480px] sm:h-[72px] sm:text-[24px] text-white bg-[#ff4141] sm:mt-[20px] font-[500] cursor-pointer hover:bg-[#f84d4d] w-[100%] h-[50px]' 
          />
          <p className='lg:mt-[20px] lg:text-[#5c5c5c] lg:text-[18px] md:mt-[20px] md:text-[#5c5c5c] md:text-[18px] sm: mt-[20px] text-[#5c5c5c] text-[16px] text-center font-[500]'>
            Already have an account? 
            <span className='text-[#ff4141] font-[600] underline cursor-pointer'>
              <Link to={'/Signup'}>Login here</Link>
            </span>
          </p>
          <div className='lg:flex lg:items-center lg:mt-[25px] lg:gap-[20px] lg:text-[#5c5c5c] lg:text-[18px] md:flex md:items-center md:mt-[25px] md:gap-[20px] md:text-[#5c5c5c] md:text-[18px] sm:flex items-center mt-[25px] gap-[20px] text-[#5c5c5c] text-[18px] font-[500]'>
            <input 
              type="checkbox" 
              {...register("agreement",{required:true})} 
              aria-invalid={errors.agreement ? "true": "false"} 
              className='sm:hidden ' 
            />
            <p className='lg:text-[18px] md:text-[18px] sm:text-[12px]'>
              <input 
                type="checkbox" 
                {...register("agreement",{required:true})} 
                aria-invalid={errors.agreement ? "true": "false"} 
                className='md:hidden lg:hidden ' 
              />
              By signing up, you agree to our privacy policy and terms and conditions.
            </p>
          </div>
        </form>
        <DevTool control={control} />
      </div>
    </div>
  );
};

export default LoginSignup;
