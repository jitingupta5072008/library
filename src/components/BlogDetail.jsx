// src/components/BlogDetail.js

import React, { useState, useEffect } from 'react';
import { db } from '../services/firebase';
import { deleteDoc, doc, getDoc } from 'firebase/firestore';
import { Link, useParams,useNavigate } from 'react-router-dom';

const BlogDetail = () => {
  const [blog, setBlog] = useState(null);
  const { id } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    const fetchBlog = async () => {
      const docRef = doc(db, 'blogs', id);
      const docSnap = await getDoc(docRef);
      if (docSnap.exists()) {
        setBlog(docSnap.data());
      }
    };
    fetchBlog();
  }, [id]);


  const handleDelete = async () => {
    await deleteDoc(doc(db, "blogs",id));
    navigate('/all-students')

  };
  return (
    blog && (
      <div>
         <div class="container my-5">
        <div class="d-flex align-items-center justify-content-center">
          <img style={{borderRadius:'50%',height:'100px'}} src="https://th.bing.com/th/id/OIP.fmz5M2Zj4aT2Ro0dS0ZZBgHaHa?pid=ImgDet&w=184&h=184&c=7&dpr=1.3" alt="" />
          <div className="text">
            <strong className='heading'>Jai Hind Digital Library</strong>
            <h5>Student's Details</h5>
          </div>
        </div>
        <div class="details mt-2">
          <div className='editBtn'>
            <Link to={`/edit/${id}`}><button className='btn btn-primary'>Edit</button></Link>
            <button onClick={handleDelete} className='btn btn-danger'>Delete</button>
          </div>
            <div class="detail-row">
                <div class="detail-item">
                    <strong>Candidate's Name</strong><br/>
                   {blog.name}
                </div>
                <div class="detail-item profile-photo" rowspan="5">
                    <img src={blog.imageUrl} alt="Candidate Photo"/>
                </div>
            </div>
      
            <div class="detail-row">
                <div class="detail-item">
                    <strong>Father's Name</strong><br/>
                    {blog.fatherName}
                </div>
                <div class="detail-item">
                    <strong>Admission Date</strong><br/>
                    {blog.admissionD}
                </div>
            </div>
            <div class="detail-row">
                <div class="detail-item">
                    <strong>Phone no.</strong><br/>
                   {blog.phone}
                </div>
                <div class="detail-item">
                    <strong>Email address</strong><br/>
                    {blog.email}
                </div>
            </div>
            <div class="detail-row">
                <div class="detail-item">
                    <strong>Library Time (Am)</strong><br/>
                    {blog.libraryTimeStart}
                </div>
                <div class="detail-item">
                    <strong>Library Time (Pm)</strong><br/>
                    {blog.libraryTimeEnd}
                </div>
            </div>
            <div class="detail-row">
                <div class="detail-item">
                    <strong>Fees</strong><br/>
                    {blog.fees}
                </div>
            </div>
        </div>
        <div class="score-details mt-4">
            <div class="score-row header">
                <div class="score-item">Subject</div>
                <div class="score-item">NTA Score</div>
            </div>
            <div class="score-row">
                <div class="score-item">Physics</div>
                <div class="score-item">93.8610551</div>
            </div>
            <div class="score-row">
                <div class="score-item">Chemistry</div>
                <div class="score-item">94.8655595</div>
            </div>
            <div class="score-row">
                <div class="score-item">Mathematics</div>
                <div class="score-item">38.2740763</div>
            </div>
        </div>
    </div>
      </div>
    )
  );
};

export default BlogDetail;
