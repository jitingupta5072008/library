import { addDoc, collection } from "firebase/firestore";
import React, { useState } from "react";
import { db } from "../services/firebase";
import emailjs from 'emailjs-com';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    
    });
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {

      const data = await addDoc(collection(db, "contact"), {
        formData,
        // createdAt: new Date(),
      });
      alert("Thanks for contact us");


      //send email function here
      emailjs.send('service_kksmbn7', 'template_l9c1bpd', formData, 'z9XopcVXTfMa2YEhp')
      .then((result) => {
        console.log(result.text);
        // alert('Email sent successfully!');
      }, (error) => {
        console.log(error.text);
        alert('Failed to send email.');
      });

    } catch (error) {
      alert(error);
    }
  };

  return (
    <>
      <div class="d-flex align-items-center justify-content-center mt-3">
        <img
          style={{ borderRadius: "50%", height: "100px" }}
          src="https://th.bing.com/th/id/OIP.fmz5M2Zj4aT2Ro0dS0ZZBgHaHa?pid=ImgDet&w=184&h=184&c=7&dpr=1.3"
          alt=""
        />
        <div className="text">
          <strong className="heading">Jai Hind Digital Library</strong>
          <h5>Contact Us</h5>
        </div>
      </div>
      <div className="container d-flex align-items-center justify-content-center mt-3">
        <div className="row d-flex">
          <div className="col-sm-12 col-md-12 col-lg-6" style={{textAlign:'-webkit-center'}}>
            <div className="map">
            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d223.92624094802767!2d82.51737955856942!3d26.104798578005838!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x399067001c3a764b%3A0xdbb9fc171c2474fe!2sJai%20hind%20digital%20library!5e0!3m2!1sen!2sin!4v1719985786470!5m2!1sen!2sin" width="450" height="520" style={{border:'1'}} allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
            </div>
          </div>
          <div className="col-sm-12 col-md-12 col-lg-6" style={{textAlign:'-webkit-center'}}>
            <form className="loginForm" onSubmit={handleSubmit}  style={{textAlign:'left'}}>
              <h2 className="text-center font-weight-bold">Get in touch 📩</h2>
              <div class="form-group  col-12 col-sm-12 col-lg-12">
                <label htmlFor="exampleInputEmail1">Name</label>
                <input
                  className="form-control"
                  type="text"
                  label="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                />
              </div>
              <div class="form-group  col-12 col-sm-12 col-lg-12">
                <label htmlFor="exampleInputEmail1">Email address</label>
                <input
                  className="form-control"
                  type="email"
                  label="Email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                />
              </div>
              <div class="form-group  col-12 col-sm-12 col-lg-12">
                <label htmlFor="exampleInputEmail1">Subject</label>
                <input
                  className="form-control"
                  type="text"
                  label="Subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                />
              </div>
              <div class="form-group col-12 col-sm-12 col-lg-12">
                <label htmlFor="exampleInputEmail1">Message</label>
                <textarea className="form-control" name="message"
                   value={formData.message}
                   onChange={handleChange}
                ></textarea>
              </div>
              <div className="mt-4">
                <button type="submit" className="buttonStyle">Submit</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default Contact;
