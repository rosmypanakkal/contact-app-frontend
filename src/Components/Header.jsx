import React from 'react'
import {
    MDBContainer,
    MDBNavbar,
    MDBNavbarBrand
  } from 'mdb-react-ui-kit';

function Header() {
  return (
    <div>
        <MDBNavbar light bgColor='primary'>
        <MDBContainer fluid>
          <MDBNavbarBrand href='#' className='text-white fs-2'>
            <img
              src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRIxvEXR442mVEOtrpPT3bp8bXsflTara-1EQ&usqp=CAU'
              height='40'
              alt=''
              loading='lazy'
            />
          ConnectHub
          </MDBNavbarBrand>
        </MDBContainer>
      </MDBNavbar>
    </div>
  )
}

export default Header