// // // // import React from 'react'
// // // // import { Link } from 'react-router-dom';
// // // // const Dashboard = () => {
// // // //   return (
// // // //     <div>
// // // //       <nav className="navbar bg-dark">
// // // //   <h1>
// // // //     <Link to="/"><i className="fas fa-code"></i> Developers Hub</Link>
// // // //   </h1>
// // // //   <ul>
// // // //     <li><Link to="myprofile">Developers</Link></li>
// // // //     <li><Link to="/login">Logout</Link></li>
// // // //   </ul>
// // // // </nav>

// // // // <section className="container">
// // // //   <h1 className="large text-primary">Developers</h1>
// // // //   <p className="lead">
// // // //     <i className="fab fa-connectdevelop"></i> Browse and connect with developers
// // // //   </p>
// // // //   <div className="profiles">
// // // //     <div className="profile bg-light">
// // // //       <img
// // // //         className="round-img"
// // // //         src="https://www.gravatar.com/avatar/00000000000000000000000000000000?d=mp&f=y&s=200"
// // // //         alt=""
// // // //       />
// // // //     </div>
// // // //     <div>
// // // //       <h2>John Doe</h2>
// // // //       <p>Developer at Microsoft</p>
// // // //       <p>Seattle, WA</p>
// // // //       <Link to="profile.html" className="btn btn-primary">View Profile</Link>
// // // //     </div>
// // // //     <ul>
// // // //   <li className="text-primary">
// // // //     <i className="fas fa-check"></i> HTML
// // // //   </li>
// // // //   <li className="text-primary">
// // // //     <i className="fas fa-check"></i> CSS
// // // //   </li>
// // // //   <li className="text-primary">
// // // //     <i className="fas fa-check"></i> JavaScript
// // // //   </li>
// // // //   <li className="text-primary">
// // // //     <i className="fas fa-check"></i> Python
// // // //   </li>
// // // //   <li className="text-primary">
// // // //     <i className="fas fa-check"></i> C#
// // // //   </li>
// // // // </ul>
// // // // </div>
// // // // <div className="profile bg-light">
// // // //   <img
// // // //     className="round-img"
// // // //     src="https://www.gravatar.com/avatar/00000000000000000000000000000000?d=mp&f=y&s=200"
// // // //     alt=""
// // // //   />
// // // //   <div>
// // // //     <h2>John Doe</h2>
// // // //     <p>Developer at Microsoft</p>
// // // //     <p>Seattle, WA</p>
// // // //     <Link to="profile.html" className="btn btn-primary">View Profile</Link>
// // // //   </div>

// // // //   <ul>
// // // //     <li className="text-primary">
// // // //       <i className="fas fa-check"></i> HTML
// // // //     </li>
// // // //     <li className="text-primary">
// // // //       <i className="fas fa-check"></i> CSS
// // // //     </li>
// // // //     <li className="text-primary">
// // // //       <i className="fas fa-check"></i> JavaScript
// // // //     </li>
// // // //   </ul>
// // // // </div>
// // // // </section>

// // // //     </div>
// // // //   )
// // // // }

// // // // export default Dashboard
// // // import React,{useState,useEffect} from "react";
// // // import { Link,Redirect } from "react-router-dom";
// // // import axios from 'axios';
// // // const Dashboard = () => {
// // //     const [data, setData] = useState([]);
// // //     useEffect(() => {
// // //       axios.get('http://localhost:5000/allprofiles', {
// // //         headers: {
// // //           'x-token': localStorage.getItem('token')
// // //         }
// // //       }).then(res => setData(res.data))
// // //     }, [])
// // //     if(!localStorage.getItem('token')){
// // //       return <Redirect to ='/login'/>
// // //     }
// // //   }

// // //   // List of Developers
// // //   const developers = [
// // //     {
// // //       id: 1,
// // //       name: "John Doe",
// // //       position: "Developer at Microsoft",
// // //       location: "Seattle, WA",
// // //       avatar:
// // //         "https://www.gravatar.com/avatar/00000000000000000000000000000000?d=mp&f=y&s=200",
// // //     },
// // //     {
// // //       id: 2,
// // //       name: "Jane Smith",
// // //       position: "Software Engineer at Google",
// // //       location: "San Francisco, CA",
// // //       avatar:
// // //         "https://www.gravatar.com/avatar/00000000000000000000000000000000?d=mp&f=y&s=200",
// // //     },
// // //     {
// // //       id: 3,
// // //       name: "Alice Johnson",
// // //       position: "Frontend Developer at Facebook",
// // //       location: "New York, NY",
// // //       avatar:
// // //         "https://www.gravatar.com/avatar/00000000000000000000000000000000?d=mp&f=y&s=200",
// // //     },
// // //     {
// // //       id: 4,
// // //       name: "Michael Brown",
// // //       position: "Backend Developer at Amazon",
// // //       location: "Austin, TX",
// // //       avatar:
// // //         "https://www.gravatar.com/avatar/00000000000000000000000000000000?d=mp&f=y&s=200",
// // //     },
// // //   ];

// // //   return (
// // //     <div>
// // //       {/* Navbar */}
// // //       <nav className="navbar bg-dark">
// // //         <h1>
// // //           <Link to="/">
// // //             <i className="fas fa-code"></i> Developers Hub
// // //           </Link>
// // //         </h1>
// // //         <ul>
// // //           <li>
// // //             <Link to="myprofile">Myprofile</Link>
// // //           </li>
// // //           <li>
// // //             <Link to="/login" onClick={() => localStorage.removeItem('token')}>Logout</Link>
// // //           </li>
// // //         </ul>
// // //       </nav>

// // //       {/* Main Section */}
// // //       <section className="container">
// // //         <h1 className="large text-primary">Developers</h1>
// // //         <p className="lead">
// // //           <i className="fab fa-connectdevelop"></i> Browse and connect with developers
// // //         </p>

// // //         {/* All Developers in the Same Layout */}
// // //         {developers.map((dev) => (
// // //           <div
// // //             key={dev.id}
// // //             className="support-box bg-light"
// // //             style={{
// // //               marginTop: "10px",
// // //               padding: "20px",
// // //               borderRadius: "8px",
// // //               border: "1px solid #ccc",
// // //               backgroundColor: "#f8f9fa",
// // //               textAlign: "center",
// // //             }}
// // //           >
// // //             <img
// // //               className="round-img"
// // //               src={dev.avatar}
// // //               alt={dev.name}
// // //               style={{ width: "100px", borderRadius: "50%" }}
// // //             />
// // //             <h2>{dev.name}</h2>
// // //             <p>{dev.position}</p>
// // //             <p>{dev.location}</p>
// // //             <Link
// // //               to={`/profile/${dev.id}`}
// // //               className="btn"
// // //               style={{
// // //                 backgroundColor: "#007bff",
// // //                 color: "white",
// // //                 padding: "8px 12px",
// // //                 textDecoration: "none",
// // //                 borderRadius: "4px",
// // //                 display: "inline-block",
// // //                 marginTop: "10px",
// // //               }}
// // //             >
// // //               View Profile
// // //             </Link>
// // //           </div>
// // //         ))}
// // //       </section>
// // //     </div>
// // //   );
// // // };

// // // export default Dashboard;
// // import React, { useState, useEffect } from "react";
// // import { Link, Redirect } from "react-router-dom";
// // import axios from "axios";

// // const Dashboard = () => {
// //   const [data, setData] = useState([]);

// //   useEffect(() => {
// //     axios
// //       .get("http://localhost:5000/allprofiles", {
// //         headers: {
// //           "x-token": localStorage.getItem("token"),
// //         },
// //       })
// //       .then((res) => setData(res.data));
// //   }, []);

// //   if (!localStorage.getItem("token")) {
// //     return <Redirect to="/login" />;
// //   }

// //   // List of Developers
// //   const developers = [
// //     {
// //       id: 1,
// //       name: "John Doe",
// //       position: "Developer at Microsoft",
// //       location: "Seattle, WA",
// //       avatar:
// //         "https://www.gravatar.com/avatar/00000000000000000000000000000000?d=mp&f=y&s=200",
// //     },
// //     {
// //       id: 2,
// //       name: "Jane Smith",
// //       position: "Software Engineer at Google",
// //       location: "San Francisco, CA",
// //       avatar:
// //         "https://www.gravatar.com/avatar/00000000000000000000000000000000?d=mp&f=y&s=200",
// //     },
// //     {
// //       id: 3,
// //       name: "Alice Johnson",
// //       position: "Frontend Developer at Facebook",
// //       location: "New York, NY",
// //       avatar:
// //         "https://www.gravatar.com/avatar/00000000000000000000000000000000?d=mp&f=y&s=200",
// //     },
// //     {
// //       id: 4,
// //       name: "Michael Brown",
// //       position: "Backend Developer at Amazon",
// //       location: "Austin, TX",
// //       avatar:
// //         "https://www.gravatar.com/avatar/00000000000000000000000000000000?d=mp&f=y&s=200",
// //     },
// //   ];

// //   return (
// //     <div>
// //       {/* Navbar */}
// //       <nav className="navbar bg-dark">
// //         <h1>
// //           <Link to="/">
// //             <i className="fas fa-code"></i> Developers Hub
// //           </Link>
// //         </h1>
// //         <ul>
// //           <li>
// //             <Link to="myprofile">My Profile</Link>
// //           </li>
// //           <li>
// //             <Link to="/login" onClick={() => localStorage.removeItem("token")}>
// //               Logout
// //             </Link>
// //           </li>
// //         </ul>
// //       </nav>

// //       {/* Main Section */}
// //       <section className="container">
// //         <h1 className="large text-primary">Developers</h1>
// //         <p className="lead">
// //           <i className="fab fa-connectdevelop"></i> Browse and connect with developers
// //         </p>

// //         {/* All Developers in the Same Layout */}
// //         {developers.map((dev) => (
// //           <div
// //             key={dev.id}
// //             className="support-box bg-light"
// //             style={{
// //               marginTop: "10px",
// //               padding: "20px",
// //               borderRadius: "8px",
// //               border: "1px solid #ccc",
// //               backgroundColor: "#f8f9fa",
// //               textAlign: "center",
// //             }}
// //           >
// //             <img
// //               className="round-img"
// //               src={dev.avatar}
// //               alt={dev.name}
// //               style={{ width: "100px", borderRadius: "50%" }}
// //             />
// //             <h2>{dev.name}</h2>
// //             <p>{dev.position}</p>
// //             <p>{dev.location}</p>
// //             <Link
// //               to={`/profile/${dev.id}`}
// //               className="btn"
// //               style={{
// //                 backgroundColor: "#007bff",
// //                 color: "white",
// //                 padding: "8px 12px",
// //                 textDecoration: "none",
// //                 borderRadius: "4px",
// //                 display: "inline-block",
// //                 marginTop: "10px",
// //               }}
// //             >
// //               View Profile
// //             </Link>
// //           </div>
// //         ))}
// //       </section>
// //     </div>
// //   );
// // };

// // export default Dashboard;
// import React, { useState, useEffect } from "react";
// import { Link, Navigate } from "react-router-dom";
// import axios from "axios";

// const Dashboard = () => {
//   const [data, setData] = useState([]);

//   useEffect(() => {
//     axios
//       .get("http://localhost:5000/allprofiles", {
//         headers: {
//           "x-token": localStorage.getItem("token"),
//         },
//       })
//       .then((res) => setData(res.data))
//       .catch((err) => console.error("Error fetching profiles:", err));
//   }, []);

//   if (!localStorage.getItem("token")) {
//     return <Navigate to="/login" />;
//   }

//   // List of Developers
//   const developers = [
//     {
//       id: 1,
//       name: "John Doe",
//       position: "Developer at Microsoft",
//       location: "Seattle, WA",
//       avatar:
//         "https://www.gravatar.com/avatar/00000000000000000000000000000000?d=mp&f=y&s=200",
//     },
//     {
//       id: 2,
//       name: "Jane Smith",
//       position: "Software Engineer at Google",
//       location: "San Francisco, CA",
//       avatar:
//         "https://www.gravatar.com/avatar/00000000000000000000000000000000?d=mp&f=y&s=200",
//     },
//     {
//       id: 3,
//       name: "Alice Johnson",
//       position: "Frontend Developer at Facebook",
//       location: "New York, NY",
//       avatar:
//         "https://www.gravatar.com/avatar/00000000000000000000000000000000?d=mp&f=y&s=200",
//     },
//     {
//       id: 4,
//       name: "Michael Brown",
//       position: "Backend Developer at Amazon",
//       location: "Austin, TX",
//       avatar:
//         "https://www.gravatar.com/avatar/00000000000000000000000000000000?d=mp&f=y&s=200",
//     },
//   ];

//   return (
//     <div>
//       {/* Navbar */}
//       <nav className="navbar bg-dark">
//         <h1>
//           <Link to="/">
//             <i className="fas fa-code"></i> Developers Hub
//           </Link>
//         </h1>
//         <ul>
//           <li>
//             <Link to="myprofile">My Profile</Link>
//           </li>
//           <li>
//             <Link to="/login" onClick={() => localStorage.removeItem("token")}>
//               Logout
//             </Link>
//           </li>
//         </ul>
//       </nav>

//       {/* Main Section */}
//       <section className="container">
//         <h1 className="large text-primary">Developers</h1>
//         <p className="lead">
//           <i className="fab fa-connectdevelop"></i> Browse and connect with developers
//         </p>
// {data.length>=1 ?
//  data.map(profile =>)
// : null}
//         {/* All Developers in the Same Layout */}
//         {developers.map((dev) => (
//           <div
//             key={dev.id}
//             className="support-box bg-light"
//             style={{
//               marginTop: "10px",
//               padding: "20px",
//               borderRadius: "8px",
//               border: "1px solid #ccc",
//               backgroundColor: "#f8f9fa",
//               textAlign: "center",
//             }}
//           >
//             <img
//               className="round-img"
//               src={dev.avatar}
//               alt={dev.name}
//               style={{ width: "100px", borderRadius: "50%" }}
//             />
//             <h2>{dev.name}</h2>
//             <p>{dev.position}</p>
//             <p>{dev.location}</p>
//             <Link
//               to={`/profile/${dev.id}`}
//               className="btn"
//               style={{
//                 backgroundColor: "#007bff",
//                 color: "white",
//                 padding: "8px 12px",
//                 textDecoration: "none",
//                 borderRadius: "4px",
//                 display: "inline-block",
//                 marginTop: "10px",
//               }}
//             >
//               View Profile
//             </Link>
//           </div>
//         ))}
//       </section>
//     </div>
//   );
// };

// export default Dashboard;

// //{data.length>=1 ?
// // data.map(profile =>
// // ): null }

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

  // Dummy list of developers (Fallback data)
  const developers = [
    {
      id: 1,
      name: "Vinay",
      position: "Rvr & Jc",
      location: "India",
      avatar:
        "https://www.gravatar.com/avatar/00000000000000000000000000000000?d=mp&f=y&s=200",
    },
    {
      id: 2,
      name: "Jane Smith",
      position: "Software Engineer at Google",
      location: "San Francisco, CA",
      avatar:
        "https://www.gravatar.com/avatar/00000000000000000000000000000000?d=mp&f=y&s=200",
    },
    {
      id: 3,
      name: "Alice Johnson",
      position: "Frontend Developer at Facebook",
      location: "New York, NY",
      avatar:
        "https://www.gravatar.com/avatar/00000000000000000000000000000000?d=mp&f=y&s=200",
    },
    {
      id: 4,
      name: "Michael Brown",
      position: "Backend Developer at Amazon",
      location: "Austin, TX",
      avatar:
        "https://www.gravatar.com/avatar/00000000000000000000000000000000?d=mp&f=y&s=200",
    },
  ];

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
                  {profile.skill.split(",").map((skill) => (
                    <li className="text-primary">
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
