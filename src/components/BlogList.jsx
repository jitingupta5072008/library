import React, { useState, useEffect } from 'react';
import { db } from '../services/firebase';
import { collection, query, onSnapshot } from 'firebase/firestore';
import BlogItem from './BlogItem';


const BlogList = () => {
  const [blogs, setBlogs] = useState([]);

  useEffect(() => {
    const q = query(collection(db, 'blogs'));
    const unsubscribe = onSnapshot(q, (snapshot) => {
      setBlogs(snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() })));
    });
    return () => unsubscribe();
  }, []);

  return (
    <>
      {blogs.map(blog => (
        
        <BlogItem key={blog.id} blog={blog} />
      
      ))}
    </>
  );
};

export default BlogList;
