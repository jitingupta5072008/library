// src/components/BlogItem.js

import React from "react";
import { Link } from "react-router-dom";
import { db } from "../services/firebase";
import { doc, deleteDoc } from "firebase/firestore";

const BlogItem = ({ blog }) => {
  const handleDelete = async () => {
    await deleteDoc(doc(db, "blogs", blog.id));
  };
  // console.log(blog);
  return (
    <>
     
     
    </>
  );
};

export default BlogItem;
