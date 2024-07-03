import { useNavigate } from "react-router-dom";
import React, { useState, useEffect } from "react";
import { db, storage } from "../services/firebase";
import { collection, addDoc, doc, updateDoc, getDoc } from "firebase/firestore";
import { ref, uploadBytes, getDownloadURL } from "firebase/storage";

const BlogForm = ({ id }) => {
  const [name, setName] = useState("");
  const [fatherName, setFatherName] = useState("");
  const [image, setImage] = useState(null);
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [admissionD, setAdmissionD] = useState("");
  const [libraryTimeStart, setLibraryTimeStart] = useState("");
  const [libraryTimeEnd, setLibraryTimeEnd] = useState("");
  const [fees, setFees] = useState("");
  const [url, setUrl] = useState("");

  const navigate = useNavigate();

  useEffect(() => {
    if (id) {
      const fetchData = async () => {
        const docRef = doc(db, "blogs", id);
        const docSnap = await getDoc(docRef);
        if (docSnap.exists()) {
          const blog = docSnap.data();
          setName(blog.name);
          setFatherName(blog.fatherName);
          setUrl(blog.imageUrl);
          setEmail(blog.email);
          setPhone(blog.phone);
          setAdmissionD(blog.admissionD);
          setLibraryTimeStart(blog.libraryTimeStart);
          setLibraryTimeEnd(blog.libraryTimeEnd);
          setFees(blog.fees);
        }
      };
      fetchData();
    }
  }, [id]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    let imageUrl = url;

    if (image) {
      const imageRef = ref(storage, `images/${image.name}`);
      await uploadBytes(imageRef, image);
      imageUrl = await getDownloadURL(imageRef);
    }

    if (id) {
      const blogDoc = doc(db, "blogs", id);
      await updateDoc(blogDoc, {
        name,
        fatherName,
        email,
        phone,
        admissionD,
        libraryTimeStart,
        libraryTimeEnd,
        fees,
       
      });
    } else {
      await addDoc(collection(db, "blogs"), {
        name,
        fatherName,
        email,
        phone,
        admissionD,
        libraryTimeStart,
        libraryTimeEnd,
        fees,
        imageUrl,
      });
    }
    navigate("/");
  };

  return (
    <div className="container">
      <form onSubmit={handleSubmit}>
        <div className="d-flex flex-wrap">
        <div class="form-group  col-12 col-sm-12 col-lg-6">
          <label for="exampleInputEmail1">Name</label>
          <input
            className="form-control"
            type="text"
            label="name"
            name="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
        </div>
        <div class="form-group  col-12 col-sm-12 col-lg-6">
          <label for="exampleInputEmail1">Father Name</label>
          <input
            className="form-control"
            type="text"
            label="fname"
            name="fathername"
            value={fatherName}
            onChange={(e) => setFatherName(e.target.value)}
            required
          />
        </div>
        </div>
        <div class="form-group  col-12 col-sm-12 col-lg-12">
          <label for="exampleInputEmail1">Email address</label>
          <input
            className="form-control"
            type="email"
            label="email"
            name="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        <div class="form-group  col-12 col-sm-12 col-lg-12">
          <label for="exampleInputEmail1">Phone no.</label>
          <input
            className="form-control"
            type="number"
            label="phone"
            name="phone"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            required
          />
        </div>
        <div class="form-group  col-12 col-sm-12 col-lg-12">
          <label for="exampleInputEmail1">Addmission Date</label>
          <input
            className="form-control"
            type="date"
            label="admissionD"
            name="admissionD"
            value={admissionD}
            onChange={(e) => setAdmissionD(e.target.value)}
            required
          />
        </div>
        <div class="form-group  col-12 col-sm-12 col-lg-12">
          <label for="exampleInputEmail1">Library Time Start (am)</label>
          <input
            className="form-control"
            type="time"
            label="libraryTimeStart"
            name="libraryTimeStart"
            value={libraryTimeStart}
            onChange={(e) => setLibraryTimeStart(e.target.value)}
            required
          />
        </div>
        <div class="form-group  col-12 col-sm-12 col-lg-12">
          <label for="exampleInputEmail1">Library Time End (pm)</label>
          <input
            className="form-control"
            type="time"
            label="libraryTimeEnd"
            name="libraryTimeEnd"
            value={libraryTimeEnd}
            onChange={(e) => setLibraryTimeEnd(e.target.value)}
            required
          />
        </div>
        <div class="form-group  col-12 col-sm-12 col-lg-12">
          <label for="exampleInputEmail1">library Fees</label>
          <input
            className="form-control"
            type="number"
            label="fees"
            name="fees"
            value={fees}
            onChange={(e) => setFees(e.target.value)}
            required
          />
        </div>
        <div class="form-group  col-12 col-sm-12 col-lg-12">
          <input
            type="file"
            onChange={(e) => setImage(e.target.files[0])}
            className="form-control"
            required
          />
        </div>
        <div class="form-group  col-12 col-sm-12 col-lg-12">
          <button type="submit">Submit</button>
        </div>
      </form>
    </div>
  );
};

export default BlogForm;
