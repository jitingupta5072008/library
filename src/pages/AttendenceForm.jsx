import React, { useEffect, useState } from "react";
import { db } from "../services/firebase";
import { addDoc, collection, onSnapshot, query } from "firebase/firestore";
import AttendanceList from "./AttendenceList";

const AttendenceForm = () => {
  const [studentName, setStudentName] = useState("");
  const [existsStudentName, setExistsStudentName] = useState([]);
  const [attendance, setAttendance] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    await addDoc(collection(db, "attendance"), {
      studentName,
      attendance,
      createdAt: new Date(),
    });
    alert("Dear Student! Your Attendence hasbeen submited");
    setStudentName("");
    setAttendance("");
  };

  // find all student name in blog collection
  useEffect(() => {
    try {
      const q = query(collection(db, "blogs"));
      const unsubscribe = onSnapshot(q, (snapshot) => {
        setExistsStudentName(
          snapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }.name))
        );
      });
      return () => unsubscribe();
    } catch (error) {
      alert(error);
    }
  }, []);

  const handleInputChange = (event) => {
    const { value } = event.target;
    // if (!existsStudentName.includes(value)) {
    //     alert(`"${value}" is not a Student! Please choose from the list.`);
    // }
    setStudentName(value);
  };

  return (
    <>
      <div className="container mt-4 d-flex flex-wrap attendence-container">
        <form onSubmit={handleSubmit} className="loginForm">
          <h4 className="text-center ">My Attendance Form</h4>
          <div className="form-group  col-12 col-sm-12 col-lg-12 d-flex mt-2 attendence-form">
          <input
            list="StudentsName"
            type="text"
            value={studentName}
            onChange={handleInputChange}
            placeholder="Student Name"
            className="form-control"
            required
          />
          <datalist id="StudentsName">
            {existsStudentName.map((f, index) => (
              <option key={index} value={f} />
            ))}
          </datalist>
          </div>
          <div className="form-group  col-12 col-sm-12 col-lg-12 d-flex mt-2 attendence-form">
            <label className="d-flex">
            Present
              <input
                type="radio"
                value="Present"
                checked={attendance === "Present"}
                onChange={(e) => setAttendance(e.target.value)}
                required
              />
            </label>
            <label className="d-flex">
            Absent
              <input
                type="radio"
                value="Absent"
                checked={attendance === "Absent"}
                onChange={(e) => setAttendance(e.target.value)}
                required
              />
              
            </label>
          </div>
          <button type="submit" className="buttonStyle">
            Submit
          </button>
        </form>
      </div>
      <AttendanceList />
    </>
  );
};

export default AttendenceForm;
