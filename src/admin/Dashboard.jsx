import React, { useEffect, useState } from 'react'
import {useNavigate} from 'react-router-dom'
import { collection, query,onSnapshot } from 'firebase/firestore';
import { db } from '../services/firebase';
import { doc, deleteDoc } from 'firebase/firestore';

const Dashboard = () => {
     const navigate = useNavigate();
     //* Logout Function 
    const logout = () => {
     localStorage.clear();
     navigate('/')
    }
    const [blogs, setBlogs] = useState([]);
    useEffect(() => {
      const q = query(collection(db, 'blogs'));
      const unsubscribe = onSnapshot(q, (snapshot) => {
        setBlogs(snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() })));
      });
      return () => unsubscribe();
    }, []);

    // const handleDelete = async () => {
    //   await deleteDoc(doc(db, 'blogs', blog.id));
    // };
  return (
    <>
     <div class="container mt-5">
        <div class="profile-section text-center">
            <img src="https://th.bing.com/th/id/OIP.fmz5M2Zj4aT2Ro0dS0ZZBgHaHa?pid=ImgDet&w=184&h=184&c=7&dpr=1.3" alt="Profile" class="profile-image rounded-circle" />
            <h2>Jitin K Gupta</h2>
            <p class="title">Software Developer</p>
            <p class="email">knupadhyay784@gmail.com</p>
            <p>Total Students : {blogs.length}</p>
            <div class="buttons">
                <button class="btn buttonStyle" onClick={()=> navigate('/')}>Home</button>
                <button class="btn buttonStyle" onClick={()=> navigate('/create')}>Add Student</button>
                <button class="btn buttonStyle" onClick={()=> navigate('/all-students')}>View Students</button>
                <button class="btn buttonStyle" onClick={logout}>Logout</button>
            </div>
        </div>
        <div class="blog-list mt-5">
            <table class="table table-bordered">
                <thead class="thead-dark">
                    <tr>
                        <th scope="col">S.No</th>
                        <th scope="col">Photo</th>
                        <th scope="col">Title</th>
                        <th scope="col">Category</th>
                        <th scope="col">Date</th>
                        <th scope="col">View</th>
                        <th scope="col">Delete</th>
                    </tr>
                </thead>
                {blogs.map(blog => (
                <tbody key={blog.id}>
                    <tr>
                        <th scope="row">1</th>
                        <td><img src={blog.imageUrl} alt="Thumbnail" /></td>
                        <td>{blog.name}</td>
                        <td>reactjs</td>
                        <td>Jul 25, 2023</td>
                        <td><button class="btn buttonStyle" onClick={()=> navigate(`/view/${blog.id}`)}>View</button></td>
                        <td><button class="btn btn-danger" onClick={()=> deleteDoc(doc(db, 'blogs', blog.id))}>Delete</button></td>
                    </tr>
                </tbody>
                 ))}
            </table>
        </div>
      </div>
     {/* <button onClick={logout}>Logout</button> */}
    </>
  )
}

export default Dashboard