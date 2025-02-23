import React, { useState } from 'react'
import Navbar from '../components/Navbar';
import { Link, useNavigate } from 'react-router-dom'

export const Signuppage = () => {
    const [credentials, setcredentials] = useState({ name: "", email: "", password: "", location: "" })
    const fooddataurl = import.meta.env.VITE_BACKEND_URL;
    const navigate = useNavigate();
    const handleSubmit = async (e) => {
        e.preventDefault();
        try
        {
        const response = await fetch(`${fooddataurl}/api/createuser`, {
            method: "POST",
            headers: {
                'Content-Type': "application/json"
            },
            body: JSON.stringify(credentials)
        });
        const json = await response.json();
        console.log(json);

        if (!json.success) {
            alert("enter valid credentials")
        } else {
            alert("Signup successful!");
            navigate("/Loginpage")
            setcredentials({ name: "", email: "", password: "", location: "" });
        }
    } catch (error) {
        console.error("Error:", error);
        alert("Something went wrong. Please try again later.");
    }
    }

    const onChange = (e) => {
        setcredentials({ ...credentials, [e.target.name]: e.target.value })
    }

    return (
        <>
        <Navbar/>
            <div className="container">
                <form onSubmit={handleSubmit}>
                    <div className="mb-3">
                        <label htmlFor="exampleInputname" className="form-label">Name</label>
                        <input type="text" className="form-control" name="name" value={credentials.name} onChange={onChange} id="exampleInputname" required />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="exampleInputEmail1" className="form-label">Email address</label>
                        <input type="email" className="form-control" id="exampleInputEmail1" name="email" value={credentials.email} onChange={onChange} required />
                        <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
                    </div>
                    <div className="mb-3">
                        <label htmlFor="exampleInputPassword1" className="form-label">Password</label>
                        <input type="password" className="form-control" id="exampleInputPassword1" name="password" value={credentials.password} onChange={onChange} required />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="exampleInputAddress" className="form-label">Address</label>
                        <input type="text" className="form-control" id="exampleInputAddress" name="location" value={credentials.location} onChange={onChange} />
                    </div>
                    <button type="submit" className="m-3 btn btn-success">Submit</button>
                    <Link to="/Loginpage" className="m-3 btn btn-danger">Already a user</Link>
                </form>
            </div>
        </>
    )
}
