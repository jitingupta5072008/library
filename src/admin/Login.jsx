import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../services/firebase";

const Login = () => {
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const login = async (e) => {
    e.preventDefault()
    //  alert('login')
    if (!email || !password) {
      return alert("Fill all required fields");
    }
    try {
      const result = await signInWithEmailAndPassword(auth, email, password);
      alert("Login Success");
      localStorage.setItem("admin", JSON.stringify(result));
      navigate("/admin/dashboard");
    } catch (error) {
      alert("Sorry! Only Admin can Login");
      console.log(error);
    }
  };
  return (
    <div  className="container form mt-5">
      <form className="loginForm">
      <h3 className="text-center">Admin Login</h3>
        <div className="form-group  col-12 col-sm-12 col-lg-12">
          <label for="exampleInputEmail1">Email address</label>
          <input 
            className="form-control"
            type="email"
            label="Email"
            name="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div class="form-group col-12 col-sm-12  col-lg-12">
          <label for="exampleInputPassword1">Password</label>
          <input 
            className="form-control"
             type="password"
             label="Password"
             value={password}
             name="password"
             onChange={(e)=>setPassword(e.target.value)}
          />
        </div>
        <div className=" col-12 col-sm-12 col-md-6 col-lg-6 col-xl-6">
        <button type="submit" onClick={login} class="btn btn-primary buttonStyle">
          Login
        </button>
        </div>
      </form>
    </div>
  );
};

export default Login;
