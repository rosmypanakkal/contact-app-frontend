import React, { useEffect, useState } from 'react'
import { MDBInput } from 'mdb-react-ui-kit';
import { useNavigate, useParams } from 'react-router-dom';
import axios from 'axios';


function Edit() {
  const base_url='http://localhost:8000'
  
  // to hold data
  const[userid,setId]=useState("")
  const[uname,setName]=useState("")
  const[uusername,setUsername]=useState("")
  const[uphone,setPhone]=useState("")
  const[uaddress,setAddress]=useState("")
  const[uemail,setEmail]=useState("")
  const[upincode,setPincode]=useState("")

  // get an particular id of an contact
  const {id}=useParams()
  console.log(id);

  // get an particular details of an contact
  const fetchAnUser=async(id)=>{
    const result=await axios.get(`${base_url}/get-all-user/${id}`)
    console.log(result.data.contusers);
    setId(result.data.contusers.id)
    setName(result.data.contusers.name)
    setAddress(result.data.contusers.address)
    setUsername(result.data.contusers.username)
    setPhone(result.data.contusers.phone)
    setEmail(result.data.contusers.email)
    setPincode(result.data.contusers.pincode)
  }
 
  // to active fetchAnUser function
  useEffect(()=>{
    fetchAnUser(id)
  },[id])

const location=useNavigate()

  // to update an user
  const updateContact=async(e)=>{
    e.preventDefault()
    const body={
      id:userid,
      name:uname,
      username:uusername,
      address:uaddress,
      pincode:upincode,
      phone:uphone,
      email:uemail
    }
const result = await axios.post(`${base_url}/update-an-user/${id}`,body)
console.log(result.data);//
alert(result.data.message)
location('/')
  }

  return (
    <div>
       <div className="container">
        <div className="row">
          <h1 className='text-center text-primary mt-5'>UPDATE CONTACT</h1>
          <div className="col-6">
            <form className='p-5 m-5 border shadow'>
            <div>
      <MDBInput onChange={(e)=>setId(e.target.value)} value={userid} label='Id' id='formControlLg' type='text' />
      <br />
      <MDBInput onChange={(e)=>setName(e.target.value)} value={uname} label='Name' id='formControlDefault' type='text' />
      <br />
      <MDBInput onChange={(e)=>setUsername(e.target.value)} value={uusername} label='Username' id='formControlLg' type='text' />
      <br />
      <MDBInput onChange={(e)=>setPhone(e.target.value)} value={uphone} label='Phone' id='formControlDefault' type='text' />
      <br />
      <MDBInput onChange={(e)=>setAddress(e.target.value)} value={uaddress} label='Address' id='formControlLg' type='text' />
      <br />
      <MDBInput onChange={(e)=>setEmail(e.target.value)} value={uemail} label='Email' id='formControlDefault' type='text' />
      <br />
      <MDBInput onChange={(e)=>setPincode(e.target.value)} value={upincode} label='Pincode' id='formControlLg' type='text' />
      <br />
       <div className='text-center'>
        <button onClick={(e)=>updateContact(e)} className='btn btn-primary'>Update</button>
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

export default Edit