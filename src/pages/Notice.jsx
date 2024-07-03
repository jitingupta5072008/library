import React, { useEffect, useState } from "react";
import {
  collection, addDoc, onSnapshot, query, orderBy, getDoc,
} from "firebase/firestore";
import { db } from "../services/firebase";

const Notice = () => {
  const [name, setName] = useState("");
  const [content, setContent] = useState("");
  const [notices, setNotices] = useState([]);
  const [emails, setEmails] = useState([]);
  const [loading, setLoading] = useState(true);

  const token = localStorage.getItem("admin");

  const handleNotice = async (e) => {
    e.preventDefault();
    try {
      const notice = await addDoc(collection(db, "notice"), {
        name,
        content,
        createdAt: new Date(),
      });
      alert("Your Notice has been submited");
      setContent("");
      setLoading(false);
      setName("");

    } catch (error) {
      alert(error);
    }
  };
  useEffect(() => {
    const q = query(collection(db, "notice"), orderBy("createdAt", "desc"));
    const unsubscribe = onSnapshot(q, (snapshot) => {
      const noticesData = snapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));
      setNotices(noticesData);
    });

    return () => unsubscribe();
  }, []);
  useEffect(() => {
    const q = query(collection(db, 'blogs'));
    const unsubscribe = onSnapshot(q, (snapshot) => {
      setEmails(snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }).email));
      setLoading(false)
    });
    return () => unsubscribe();
  }, []);
  // console.log(emails)

  // console.log(notices);

  // EMAIL_USER="ng1529452@gmail.com"
  // EMAIL_PASS="xyvfxgxgomcgilgi"

  return (
    <>
      {token ? (
        <>
          <div className="container noticeForm mt-5">
            <form action="">
              <div class="form-group  col-12 col-sm-12 col-lg-12">
                <h3>Add a new notice</h3>
                <label htmlFor="exampleInputEmail1">Name</label>
                <input
                  className="form-control mb-2"
                  placeholder="Enter your name"
                  type="text"
                  label="name"
                  name="name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                />

                <textarea
                  placeholder="Type Your Notice"
                  value={content}
                  className="form-control"
                  onChange={(e) => setContent(e.target.value)}
                  required
                />
              </div>
              <div class="form-group  col-12 col-sm-12 col-lg-12">
                <button className="btn buttonStyle" onClick={handleNotice}>
                  Post Notice
                </button>
              </div>
            </form>
          </div>
          <div className="container noticeForm mt-5">
            <div class="row">
              {loading ? (
                <h3 className="text-center">Loading...</h3>):
                (

               <>
              {notices.map((data) => (
                <div class="col-sm-12 col-md-6 col-lg-4 mb-4" key={data.id}>
                  <div
                    className="card"

                    style={{ width: "18rem" }}
                  >
                    <div className="card-body">
                      <h5 className="card-title text-primary">{data.name}</h5>
                      <p className="card-text">{data.content}</p>
                      <p className="badge rounded-pill text-white bg-danger">
                        {new Date(
                          data.createdAt.seconds * 1000
                        ).toLocaleString()}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
              </>
            )}
            </div>
          </div>
        </>
      ) : (
        <>

          <div className="container noticeForm mt-5">
            <div class="row">
              {notices.map((data) => (
                <div class="col-sm-12 col-md-6 col-lg-4 mb-4">
                  <div
                    className="card d-flex"
                    key={data.id}
                    style={{ width: "18rem" }}
                  >
                    <div className="card-body">
                      <h5 className="card-title text-primary">{data.name}</h5>
                      <p className="card-text">{data.content}</p>
                      <p className="badge rounded-pill text-white bg-danger">
                        {new Date(
                          data.createdAt.seconds * 1000
                        ).toLocaleString()}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </>
      )}
    </>
  );
};

export default Notice;
