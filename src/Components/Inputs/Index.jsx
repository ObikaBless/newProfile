import React, { useState } from 'react';
import './input.css';
import { BsFillEyeSlashFill } from 'react-icons/bs';
import { IoEyeSharp } from 'react-icons/io5'


const Inputs = ({ name, placeholder, errors, type, register, inputType }) => {

  const [toggle, setToggle] = useState(false)

  switch (inputType) {
    case "text":
      return (
        <div className='input-wrapper'>

          <input placeholder={placeholder}  type={type==="password" && toggle  ? "text" : type} {...register(name)} />

          {type === "password" ? <> {toggle ? <IoEyeSharp onClick={()=>setToggle(false)} /> :<BsFillEyeSlashFill onClick={()=>setToggle(true)}/>} </> : null}

        </div>
      )
    case "select":
      return (
        <div className='input-wrapper'>
          <select  {...register(name)}>
            <option value="">Select Gender</option>
            <option value="male">Male</option>
            <option value="female">Female</option>
          </select>
        </div>
      )
    default:
      return null
  }
}
export default Inputs





// export const SelectInput = ({ name, errors, register }) => {
//   return (
//     <div className='input-wrapper'>
//     <select  {...register(name)}>
//       <option value="">Select Gender</option>
//       <option value="male">Male</option>
//       <option value="female">Female</option>
//     </select>
//     </div>
//   )
// }