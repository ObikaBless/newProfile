import React from 'react';
import Inputs from '../../Components/Inputs/Index';
import { useForm } from "react-hook-form";
import { useNavigate } from 'react-router-dom';
import './signUp.css';



const SignUp = () => {
  const navigate = useNavigate()
  const { register, handleSubmit, watch, formState: { errors } } = useForm();
  const fields = [
    {
      name: "fullName",
      placeholder: "Enter Full Name",
      type: "text",
    },
    {
      name: "email",
      placeholder: "Enter Email",
      type: "email"
    },
    {
      name: "phoneNumber",
      placeholder: "Enter Phone Number",
      type: "text"
    },
    {
      name: "password",
      placeholder: "Enter Password",
      type: "password"
    },
  ]
  return (
    <div className='sign-up'>
     <div className='sign-up-wrapper'>
     <form className='sign-up-form' onSubmit={handleSubmit((data)=>console.log(data))}>
        {fields.map((i) => (<Inputs inputType="text" {...i} register={register} />))}

        <Inputs inputType="select" name='Gender' register={register} />

        <button>Submit</button>
      </form>
      <p onClick={()=>navigate('/Login')}>Already have an Account? Login instead</p>
     </div>
    </div>
  )
}

export default SignUp
