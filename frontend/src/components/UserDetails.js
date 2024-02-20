import React, { useState, useEffect } from "react";
import "react-toastify/dist/ReactToastify.css";
import "./indexing.module.css";

const UserDetails = () => {
  const [credentials, setCredentials] = useState({
    name: "",
    email: "",
    password: "",
    gender: "",
  });
  useEffect(() => {
    if (localStorage.getItem("token")) {
      fetchData();
    }
    // eslint-disable-next-line
  }, []);

 
  const fetchData = async () => {
    try {
      const response = await fetch("http://localhost:5000/api/auth/getuser", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email: localStorage.getItem("email") }),
      });
      const data = await response.json();
      setCredentials(data);
      
      
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="col-md my-4">
      <div className="card mx-2">
      <img className="pfimg"  alt=""/>
        <div className="card-body my-2">
          <p>
            <b className="boldy">Name: </b>
            {credentials.name}
          </p>

          <p>
            <b className="boldy">E-mail:</b>
            {credentials.email}
          </p>
          <p>
            <b className="boldy">Password: </b>
            127.0.0.1
          </p>
          <p>
            <b className="boldy">Gender:</b>
            {credentials.gender}
          </p>
        </div>
      </div>
    </div>
  );
};
export default UserDetails;