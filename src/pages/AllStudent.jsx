import React, { useEffect, useState } from "react";
import { collection, onSnapshot, query } from "firebase/firestore";
import { db } from "../services/firebase";
import { Link } from "react-router-dom";

const AllStudent = () => {
  const [students, setStudents] = useState([]); // State to store all posts
  const [filteredStudent, setFilteredStudent] = useState([]); // State to store filtered posts
  const [searchTerm, setSearchTerm] = useState(""); // State to store the search term
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const q = query(collection(db, "blogs"));
    const unsubscribe = onSnapshot(q, (snapshot) => {
      setStudents(snapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() })));
      setFilteredStudent(
        snapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }))
      );
      setLoading(false);
    });
    return () => unsubscribe();
  }, []);
  useEffect(() => {
    const results = students.filter(
      (students) =>
        students.name
          ?.split(" ")
          .join(" ")
          .toLowerCase()
          .includes(searchTerm.toLowerCase()) ||
        students.fatherName?.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setFilteredStudent(results);
  }, [searchTerm, students]);
  const handleSearchChange = (event) => {
    setSearchTerm(event.target.value); 
  };
  if(loading){
    return <div className="text-center mt-5"><h3>Loading... <br /></h3><h6>Please wait</h6></div>
  }
  return (
    <>
      <div className="d-flex align-item-center justify-content-center mt-5">
        <input
          type="text"
          autoFocus
          value={searchTerm}
          onChange={handleSearchChange}
          className="searchText form-control col-lg-6 col-md-6 col-sm-6"
          placeholder="Search Student.."
        />
        <button onClick={()=> setSearchTerm('')} className="btn buttonStyle ml-2">Clear</button>
      </div>
      <div
        className="container d-flex align-item-center justify-content-center mt-5 flex-wrap"
        style={{ gap: "20px" }}
      >
        {filteredStudent.length === 0 ? (
          <h2 className="errorEmoji">NOT FOUND</h2>
        ) : (
          <>
              <div class="card-deck">
            {filteredStudent.map((blog) => (
              <div class="card profile-card text-center" key={blog.id}>
                  <div class="card-body">
                      <img src={blog.imageUrl} class="card-img-top rounded-circle mx-auto" alt="Myrtie May" />
                      <h5 class="card-title mt-3">{blog.name}</h5>
                      <p class="card-subtitle mb-2 text-muted">Father name. {blog.fatherName}</p>
                      <div className="d-flex align-items-center justify-content-between ">
                      <Link to={`/view/${blog.id}`}><button class="btn student-card-btn">View &rarr; </button></Link>
                      <Link to={`/edit/${blog.id}`}><button className='btn buttonStyle'>Edit</button></Link>
                      </div>
                  </div>
              </div>
            ))}
            </div>
          </>
        )}
      </div>
    </>
  );
};

export default AllStudent;
