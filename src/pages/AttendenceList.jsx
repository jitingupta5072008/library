import React, { useEffect, useState } from "react";
import { db } from "../services/firebase";
import { collection, onSnapshot, orderBy, query } from "firebase/firestore";

const AttendanceList = () => {
  const [attendanceList, setAttendanceList] = useState([]);

  useEffect(() => {
    const data = query(
      collection(db, "attendance"),
      orderBy("createdAt", "desc")
    );
    const unsubscribe = onSnapshot(data, (snapshot) => {
      const attendenceData = snapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));
      setAttendanceList(attendenceData);
    });

    return () => unsubscribe();
  }, []);
  return (
     <div className="container mt-4 d-flex flex-wrap attendence-container">
      <div>
      <h2>Attendance List</h2>
        {attendanceList.map((record) => (
          <li className="attendence-list border" key={record.id}>
          <strong>
          {record.studentName}
          </strong>
          : - {record.attendance && record.attendance === 'Present' ? (<h1 className="badge btn btn-success">present</h1>): (<h1 className="badge btn btn-danger">Absent</h1>)} - {new Date(record.createdAt.seconds * 1000).toLocaleString()}
          </li>
        ))}
      </div>
    </div>
  );
};

export default AttendanceList;
