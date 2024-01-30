import React, { useState } from 'react'
import { MDBInput } from 'mdb-react-ui-kit';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';




function Add() {
  const[id,setId]=useState("")
  const[name,setName]=useState("")
  const[username,setUsername]=useState("")
  const[phone,setPhone]=useState("")
  const[address,setAddress]=useState("")
  const[email,setEmail]=useState("")
  const[pincode,setPincode]=useState("")



  const base_url='http://localhost:8000/add-contact'
  const location = useNavigate()

  const AddContact=(e)=>{
    e.preventDefault()
    console.log(id,name,username,phone,address,email,pincode);
    // api call to add user details
    const body={
      id,name,username,phone,email,address,pincode
    }
    const result = axios.post(base_url,body).then((response)=>{
      console.log(response);
      alert(response.data.message)
    
      location('/')
  
    })
  .catch((error)=>{
    alert("please enter a unique id")
  })
  
  }


  return (
    <div>
      <div className="container">
        <div className="row">
          <h1 className='text-center text-primary mt-5'>ADD CONTACTS</h1>
          <div className="col-6">
            <form className='p-5 m-5 border shadow'>
            <div>
      <MDBInput onChange={(e)=>setId(e.target.value)} label='Id' id='formControlLg' type='text' />
      <br />
      <MDBInput onChange={(e)=>setName(e.target.value)} label='Name' id='formControlDefault' type='text' />
      <br />
      <MDBInput onChange={(e)=>setUsername(e.target.value)} label='Username' id='formControlLg' type='text' />
      <br />
      <MDBInput onChange={(e)=>setPhone(e.target.value)} label='Phone' id='formControlDefault' type='text' />
      <br />
      <MDBInput onChange={(e)=>setAddress(e.target.value)} label='Address' id='formControlLg' type='text' />
      <br />
      <MDBInput onChange={(e)=>setEmail(e.target.value)} label='Email' id='formControlDefault' type='text' />
      <br />
      <MDBInput onChange={(e)=>setPincode(e.target.value)} label='Pincode' id='formControlLg' type='text' />
      <br />
       <div className='text-center'>
        <button onClick={(e)=>AddContact(e)} className='btn btn-primary'>Add</button>
       </div>
    </div>
            </form>
          </div>
          <div className="col-6">
            <img src="https://eticks.io/assets/images/gif/contact-us-main.gif" alt="" />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Add