import React from 'react'
import {Link, useNavigate } from "react-router-dom";
const Navbar = () => {
     const navigate = useNavigate();
     const token = localStorage.getItem('admin')
    //  console.log(token)

     const logout = () => {
      localStorage.clear();
      navigate('/')
     }

  return (
    <>
     <nav class="navbar navbar-expand-lg navbar-light bg-light">
  <Link class="navbar-brand" to="/">JaiHindDigitalLibrary</Link>
  <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
  </button>

  <div class="collapse navbar-collapse" id="navbarSupportedContent">
    <ul class="navbar-nav mr-auto">
      <li class="nav-item active">
        <Link class="nav-link" to="/">Home <span class="sr-only">(current)</span></Link>
      </li>
      <li class="nav-item">
        <Link class="nav-link" to="/notice">Notice</Link>
      </li>
      <li class="nav-item">
        <Link class="nav-link" to="/all-students">All Student</Link>
      </li>
      <li class="nav-item">
        <Link class="nav-link" to="/contact-us">Contact</Link>
      </li>
    </ul>
    <form class="form-inline my-2 my-lg-0">
      <input class="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search" />
    </form>
    {
      token ? (
      <>
      <button onClick={logout} class="btn buttonStyle my-2 my-sm-0" >Logout</button>
      <Link to='/admin/dashboard'>
      <img src="https://th.bing.com/th/id/OIP.fmz5M2Zj4aT2Ro0dS0ZZBgHaHa?pid=ImgDet&w=184&h=184&c=7&dpr=1.3" alt="Profile" className='header-profile-image rounded-circle' />
      </Link>
      </>
    ) : (<>
      <button onClick={()=> navigate('/admin/login')} class="btn buttonStyle my-2 my-sm-0" >🔒Admin Login</button>
    </>)
    }
  </div>
</nav>
    </>
  )
}

export default Navbar