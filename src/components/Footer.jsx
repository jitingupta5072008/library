import React from 'react'

const Footer = () => {
  return (
    <>
     <footer class="footer mt-3">
    <div class="container">
      <div class="row">
      
        <div class="col-md-4">
          <h4 className='mb-3 font-weight-bold'>About Us</h4>
          <p>We are a group of dedicated students committed to delivering high-quality projects and working together to achieve our goals.</p>
        </div>
   
        <div class="col-md-4">
          <h4 className='mb-3 font-weight-bold'>Quick Links</h4>
          <ul class="list-unstyled">
            <li><a href="#">Home</a></li>
            <li><a href="#">About Us</a></li>
            <li><a href="#">Projects</a></li>
            <li><a href="#">Contact</a></li>
          </ul>
        </div>

        <div class="col-md-4">
          <h4 className='mb-3 font-weight-bold'>Contact Us 📩</h4>
          <p>Email: <a href="mailto:info@studentteam.com">info@studentteam.com</a></p>
          <p>Phone: (123) 456-7890</p>
          <div class="social-icons">
            <a href="#"><i class="fab fa-facebook-f"></i></a>
            <a href="#"><i class="fab fa-twitter"></i></a>
            <a href="#"><i class="fab fa-instagram"></i></a>
            <a href="#"><i class="fab fa-linkedin-in"></i></a>
          </div>
        </div>
      </div>
      <div class="row mt-4">
        <div class="col text-center">
          <p>&copy; 2024 Student Team. All rights reserved.</p>
        </div>
      </div>
    </div>
  </footer>
    </>
  )
}

export default Footer