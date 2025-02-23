import React, { useState } from 'react'
import Navbar from '../components/Navbar';
import { Link, useNavigate } from 'react-router-dom'


export const Loginpage = () => {
  const [credentials, setcredentials] = useState({ email: "", password: "" })
  const fooddataurl = import.meta.env.VITE_BACKEND_URL;
  let navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch(`${fooddataurl}/api/loginuser`, {
        method: "POST",
        headers: {
          'Content-Type': "application/json"
        },
        body: JSON.stringify(credentials)
      });
      const json = await response.json();
      console.log(json);

      if (!json.success) {
        alert("Enter valid credentials");
      } else {
        alert("Login successful!");
        localStorage.setItem("authToken",json.authToken);
        localStorage.setItem("userEmail",credentials.email);
        console.log(localStorage.getItem("authToken"));
        navigate("/"); 
      }
    } catch (error) {
      console.error("Error logging in:", error);
      alert("Something went wrong! Please try again.");
    }
  };

  const onChange = (e) => {
    setcredentials({ ...credentials, [e.target.name]: e.target.value })
  }
  return (
    <>
    <Navbar/>
      <div className="container">
        <form onSubmit={handleSubmit}>
          <div className="mb-3">
            <label htmlFor="exampleInputEmail1" className="form-label">Email address</label>
            <input type="email" className="form-control" id="exampleInputEmail1" name="email" value={credentials.email} onChange={onChange} required />
            <div id="emailHelp" className="form-text"></div>
          </div>
          <div className="mb-3">
            <label htmlFor="exampleInputPassword1" className="form-label">Password</label>
            <input type="password" className="form-control" id="exampleInputPassword1" name="password" value={credentials.password} onChange={onChange} required />
          </div>
          <button type="submit" className="m-3 btn btn-success">LogIn</button>
          <Link to="/Signuppage" className="m-3 btn btn-danger">New User</Link>
        </form>
      </div>
    </>
  )
}
