import React, { useState } from 'react';
import {useDispatch}from'react-redux';
import { addUser } from '../../redux/userSlice';
import './Form.css';
const Form = () => {
  const [name,setName]=useState("");
  const [email,setEmail]=useState("");
  const dispatch=useDispatch();

  const handleSubmit=(e)=>{
        e.preventDefault();
       dispatch(addUser({name,email}));
  }
    return <form onSubmit={handleSubmit}>
             <div className='form-group'>
               <input 
                 type="text"
                 placeholder="enter name"
                 onChange={(e)=>setName(e.target.value)}
                /> 
             </div>
             <div className='form-group'>
               <input 
                 type="text" 
                 placeholder="enter email"
                 onChange={(e)=>setEmail(e.target.value)}
                 /> 
             </div> 
             <div className='form-group'>
               <input  type="submit" value="add user"/> 
             </div>  
           </form>;
}

export default Form;