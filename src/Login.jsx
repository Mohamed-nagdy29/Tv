import Joi from 'joi'
import React from 'react'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'




export const Login = () => {

  const [errorlist, seterrorlist] = useState([])
  

  let navigate=useNavigate()

 const [user, setuser] = useState({
  email: '',
  password: '',


})

function getUser(e)
{
  let myUser = {...user}

  myUser[e.target.name] = e.target.value

  setuser(myUser)
 console.log(myUser)

}

 async function submitData(e){
  e.preventDefault();
 
  let validationsend=validayionInput
if(validationsend.error){
  seterrorlist(validationsend.error.detalis)

}
else{
   // let {data} = await axios.post('https://email-authentication-system.p.rapidapi.com/',user)

  // console.log(data)
  navigate('/home')
}



}

function validayionInput(){

  let schema= Joi.object({
    first_name:Joi.string().alphanum().min(3).max(12),
    last:Joi.string().alphanum().min(3).max(12),
    age:Joi.number().min(15).max(80).required(),
 email:Joi.string().email(),

  })
  return(
    schema.validate(user, {abortEarly:false})
    
  )
}


  return (
    <>
    
    <div className="w-75 m-5 ">
           <h1>Login</h1>

           {errorlist.map((error)=> <div className='alert alert-danger py-3'>{error.message}</div>)}


          

           <form onSubmit={submitData} >
         

            <label htmlFor='email'>email: </label>
            <input  onChange={getUser}  className='form-control p-2 mb-2' type='email' name='email' id='email'/>

             <label htmlFor='password'>password: </label>
            <input  onChange={getUser} className='form-control p-2 mb-2' type='password' name='password' id='password'/>

            <button className='btn btn-outline-info m-4 text-white'>Login </button>



          
         </form>
            
    
    </div>
 
    
    
    </>
  )
}
