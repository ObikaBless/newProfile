import React from 'react';
import { useNavigate } from 'react-router-dom';
import Inputs from '../../Components/Inputs/Index';
import { useForm } from "react-hook-form";


const Login = () => {
    const navigate = useNavigate()
    const { register, handleSubmit, watch, formState: { errors } } = useForm();
    const fields = [
      {
        name: "email",
        placeholder: "Enter Email",
        type: "email"
      },
      {
        name: "password",
        placeholder: "Enter Password",
        type: "password"
      }
    ]
  return (
    <div>
            <form onSubmit={handleSubmit((data)=>console.log(data))}>
        {fields.map((i) => (<Inputs {...i} register={register} />))}

        <button>Submit</button>
      </form>
      <p onClick={()=>navigate('/signup')}>Go to SignUp</p>
    </div>
  )
}

export default Login
