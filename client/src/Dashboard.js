import React, { useState, useEffect } from "react";
import { Link, Navigate } from "react-router-dom";
import axios from "axios";

const Dashboard = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  // const url='http://localhost:5001/myprofile'
  const url = "https://developershub-3svr.onrender.com";

  useEffect(() => {
    axios
      .get(`${url}/allprofiles`, {
        headers: {
          "x-token": localStorage.getItem("token"),
        },
      })
      .then((res) => {
        setData(res.data);
        setLoading(false);
      })
      .catch((err) => {
        console.error("Error fetching profiles:", err);
        setLoading(false);
      });
  }, []);

  if (!localStorage.getItem("token")) {
    return <Navigate to="/login" />;
  }


  return (
    <div>
      {/* Navbar */}
      <nav className="navbar bg-dark">
        <h1>
          <Link to="/">
            <i className="fas fa-code"></i> Developers Hub
          </Link>
        </h1>
        <ul>
          <li>
            <Link to="/myprofile">My Profile</Link>
          </li>
          <li>
            <Link to="/login" onClick={() => localStorage.removeItem("token")}>
              Logout
            </Link>
          </li>
        </ul>
      </nav>

      {/* Main Section */}
      <section className="container">
        <h1 className="large text-primary">Developers</h1>
        <p className="lead">
          <i className="fab fa-connectdevelop"></i> Browse and connect with
          developers
        </p>

        {/* Show loading spinner while fetching data */}
        {loading ? <p>Loading...</p> : null}

        {/* API Fetched Developer Profiles */}
        {!loading && data.length > 0
          ? data.map((profile) => (
              <div
                key={profile._id}
                className="support-box bg-light"
                style={{
                  marginTop: "10px",
                  padding: "20px",
                  borderRadius: "8px",
                  border: "1px solid #ccc",
                  backgroundColor: "#f8f9fa",
                  textAlign: "center",
                }}
              >
                <img
                  className="round-img"
                  src={
                    profile.avatar || "https://www.gravatar.com/avatar/?d=mp"
                  }
                  alt={profile.name}
                  style={{ width: "100px", borderRadius: "50%" }}
                />
                <h2>{profile.fullname}</h2>
                <p>{profile.email}</p>

                <Link
                  to={`/indprofile/${profile.fullname}/${profile.email}/${profile.skill}/${profile._id}`}
                  className="btn"
                  style={{
                    backgroundColor: "#007bff",
                    color: "white",
                    padding: "8px 12px",
                    textDecoration: "none",
                    borderRadius: "4px",
                    display: "inline-block",
                    marginTop: "10px",
                  }}
                >
                  View Profile
                </Link>
                <ul>
                  {profile.skill.split(",").map((skill,index) => (
                    <li key={index} className="text-primary">
                      <i className="fas fa-check">
                        <i>{skill}</i>
                      </i>
                    </li>
                  ))}
                </ul>
              </div>
            ))
          : !loading && <p>No developers found</p>}
      </section>
    </div>
  );
};

export default Dashboard;
