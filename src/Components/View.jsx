
import axios from 'axios';
import {
  MDBCard,
  MDBCardHeader,
  MDBListGroup,
  MDBListGroupItem,
  MDBBtn
} from 'mdb-react-ui-kit';
import { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';



function View() {
  const base_url='http://localhost:8000'
  const [userData,setuserData]=useState({})


  // to get an id from url
  const {id} =useParams()
  console.log(id);

  // api fetching function
  const fetchAnUser=async(id)=>{
    const result=await axios.get(`${base_url}/get-all-user/${id}`)
    console.log(result.data.contusers);
    setuserData(result.data.contusers)
  }
  console.log(userData);
  // to active fetchAnUser function
  useEffect(()=>{
    fetchAnUser(id)
  },[])

  return (
    <div>
      <div className="row m-5 p-5">
        <h2 className='text-center text-primary'>DETAILS</h2>
        <div className="col-3 m-5 p-5">

          <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRl_3C9f184YdepmY8v1NI1b-QnfCQAY9Q5lvrmu6WI3icYqasb9c2RJBPz4hkFJjQJM_c&usqp=CAU"  alt="" />
        </div>
        <div className="col-6  pt-5 mt-4">
          <MDBCard>
            {/* <MDBCardHeader>Contact Details</MDBCardHeader> */}
            {
              <MDBListGroup flush>
                <MDBListGroupItem>ID :{userData.id}</MDBListGroupItem>
                <MDBListGroupItem>Name :{userData.name}</MDBListGroupItem>
                <MDBListGroupItem>Username :{userData.username}</MDBListGroupItem>
                <MDBListGroupItem>Email :{userData.email}</MDBListGroupItem>
                <MDBListGroupItem>Phone :{userData.phone}</MDBListGroupItem>
                <MDBListGroupItem>Address :{userData.address}</MDBListGroupItem>
              </MDBListGroup>
            }

          </MDBCard>
          <div className='text-center m-5'>
            <Link to={'/'}>
              <MDBBtn className='mb-3'>Back to Home</MDBBtn>
            </Link>

          </div>
        </div>
        <div className="col-3"></div>
      </div>
    </div>
  )
}

export default View