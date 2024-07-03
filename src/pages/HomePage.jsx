import React from 'react';
import About from './About';
import { Link } from 'react-router-dom';

const HomePage = () => {
  return (
    <>
       <div class="main-section">
        <div class="container text-center">
        <img src="https://th.bing.com/th/id/OIP.fmz5M2Zj4aT2Ro0dS0ZZBgHaHa?pid=ImgDet&w=184&h=184&c=7&dpr=1.3" alt="Profile" class="profile-image rounded-circle" />
            <h1 class="main-title">Jai Hind Digital Library</h1>
            <p class="main-subtitle">Here are some blogs and tutorials contributed by Devknus.</p>
            <Link to='/attendence' className='animation'><button className='btn buttonStyle'>Attendance</button></Link>
        </div>
    </div>
    <hr />
    <section class="about-section">
    <h1>About Us</h1>
    <div class="container">
      <div class="row align-items-center">
        <div class="col-md-6 about-data">
          <h2>Welcome To Our Website</h2>
          <p class="lead">Welcome to our Student Library, a hub of knowledge and resources tailored for academic excellence. Our library offers a diverse collection of books, journals, and digital materials to support your studies. We are committed to providing a quiet, conducive environment for learning and research. Join us in exploring a world of information and discovery.</p>
          <Link to='/about'>
            <button class="btn buttonStyle">Learn More</button>
          </Link>
        </div>
        <div class="col-md-6 about-img">
          <img src="https://3.bp.blogspot.com/-nRP5f8EflW8/WTCAJ38GLKI/AAAAAAAACmw/yc5HvvDWhlkxFyKTsOH6ZnPgQR0BemV3gCLcB/s1600/Caleb_WEB-1.jpg" alt="Team Working"/>
        </div>
      </div>
    </div>
  </section>
    </>
  );
};

export default HomePage;
