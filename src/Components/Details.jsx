import React, { useEffect, useState } from 'react'
import { MDBBadge, MDBBtn, MDBTable, MDBTableHead, MDBTableBody } from 'mdb-react-ui-kit';
import axios from 'axios'
import { Link } from 'react-router-dom';


function Details() {
  const base_url='http://localhost:8000'
  const [allUsers,setAllUsers]=useState([])

  const fetchData=async()=>{
    const result =await axios.get(`${base_url}/get-all-users`)
    console.log(result.data.contusers);
    setAllUsers(result.data.contusers)
  }
  console.log(allUsers);
  useEffect(()=>{
    fetchData()
  },[])



  // delete contact
  const DeleteContact = async(id)=>{
    const result =await axios.delete(`${base_url}/delete-contact/${id}`)
    alert(result.data.message)
    fetchData()

  }
  return (
    <div>
        <div className="row m-2">
       
            <div className="col-6 text-center">
                <img src="https://storage.googleapis.com/4over4-shop/assets/images/product_story_image/1073a14.gif" alt="" />
            </div>
            <div className="col-6 mt-5 text-center">
                <br /><br />
            <h3 className='text-center text-primary'>My Networks</h3>
                <br /><br />
                <p>"To effectively communicate, we must realize that we are all different in the way we perceive the world and use this understanding as a guide to our communication with others."</p>
                <br />
            </div>
        </div>
        <div>
            <h2 className='text-center text-primary'>Contacts</h2>
            <div className='fs-3 text-end m-5'>
            <Link to={'/add'}>
            <MDBBtn  rounded>
         add contact
      </MDBBtn>
            </Link>
            </div>
            <div className="container">
            <MDBTable align='middle'>
      <MDBTableHead>
        <tr>

         <th scope='col'>ID</th>
          <th scope='col'>Name</th>
          <th scope='col'>Phone</th>
          <th scope='col'>Email</th>
          <th scope='col'>Actions</th>
        </tr>
      </MDBTableHead>
      <MDBTableBody>
       {
        allUsers.map((item)=>(
          <tr>
             <td>
            <p className='fw-normal mb-1'>{item.id}</p>
          </td>
          <td>
            <div className='d-flex align-items-center'>
           
              <div className='ms-3'>
                <p className='fw-normal mb-1'>{item.name}</p>
              </div>
            </div>
          </td>
          <td>
            <p className='fw-normal mb-1'>{item.phone}</p>
          </td>
          <td>
          <p className='text-normal mb-1'>{item.email}</p>
          </td>
          <td>
           <div className='d-flex justify-content-evenly'>
            <Link to={`/edit/${item.id}`}>
            <i className='fa-solid fa-pen text-success'></i>
            </Link>
            <i onClick={()=>DeleteContact(item.id)} className='fa-solid fa-trash text-success'></i>
            <Link to={`/view/${item.id}`}>
            <i className='fa-solid fa-eye text-success'></i>
            </Link>
          
           </div>
          </td>
        </tr>
        ))
       }
      </MDBTableBody>
    </MDBTable>
            </div>
        </div>
    </div>
  )
}

export default Details