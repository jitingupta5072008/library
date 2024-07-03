// src/pages/EditPage.js

import React from 'react';
import BlogForm from '../components/BlogForm';
import { useParams } from 'react-router-dom';

const EditPage = () => {
  const { id } = useParams();
  return (
    <div>
     <div class="d-flex align-items-center justify-content-center">
          <img style={{borderRadius:'50%',height:'100px'}} src="https://th.bing.com/th/id/OIP.fmz5M2Zj4aT2Ro0dS0ZZBgHaHa?pid=ImgDet&w=184&h=184&c=7&dpr=1.3" alt="" />
          <div className="text">
            <strong className='heading'>Jai Hind Digital Library</strong>
            <h5>Student Edit Details</h5>
          </div>
        </div>
      <BlogForm id={id} />
    </div>
  );
};

export default EditPage;
