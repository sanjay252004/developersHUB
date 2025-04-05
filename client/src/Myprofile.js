
// import React, { useState, useEffect } from 'react';
// import { Link, Navigate } from 'react-router-dom';
// import axios from 'axios';

// const Myprofile = () => {
//   const [data, setData] = useState([]);
//   const [loading, setLoading] = useState(true);
//   const[review,setReview] = useState([]);

//   useEffect(() => {
//     axios.get("http://localhost:5001/myprofile", {
//         headers: {
//           "x-token": localStorage.getItem("token"),
//         },
//       })
//       .then((res) => {
//         console.log('success:')
//         console.log(res.data);
//         setData(res.data);
//         setLoading(false);
//       })
//       .catch((err) => {
//         console.error("Error fetching profiles:", err);
//         setLoading(false);
//       });
//       axios.get("http://localhost:5001/myreview", {
//         headers: {
//           "x-token": localStorage.getItem("token"),
//         },
//       })
//       .then((res) => {
//         console.log(res.data);
//         setReview(res.data);
//         setLoading(false);
//       })
//       .catch((err) => {
//         console.error("Error fetching profiles:", err);
//         setLoading(false);
//       });

//   }, []);

//   if (!localStorage.getItem("token")) {
//     return <Navigate to="/login" />;
//   }

//   return (
//     <div>
//       <nav className="navbar bg-dark">
//         <h1>
//           <Link to="/"><i className="fas fa-code"></i> Developers Hub</Link>
//         </h1>
//         <ul>
//           <li><Link to="/myprofile">My Profile</Link></li>
//           <li><Link to="/login">Logout</Link></li>
//         </ul>
//       </nav>

//       {data ? (
//         <div className="container">
//           <Link to="/myprofile" className="btn btn-light">Back To Profiles</Link>

//           <div className="profile-grid my-1">
//             <div className="profile-top bg-primary p-2">
//               <img
//                 className="round-img my-1"
//                 src="https://www.gravatar.com/avatar/00000000000000000000000000000000?d=mp&f=y&s=200"
//                 alt=""
//               />
//               <h1 className="large">{data.fullname}</h1>
//               <p className="lead">{data.email}</p>
//               <p>India</p>
//             </div>
//           </div>

//           <div className="profile-github">
//             <h2 className="text-primary my-1">
//               <i className="fab fa-github"></i> Reviews and Ratings
//             </h2>
//             <div className="repo bg-white p-1 my-1">
//                 {review && 
//                 review.map(review =>
//                     <div>
//                 <h4><Link to="#">{review.taskprovider}</Link></h4>
//                 <p>
//                     {review.rating}/5
//                     </p>
//               </div>)
//               :<p>No Review added yet</p>
//                 }
              
//             </div>

//             <div className="repo bg-white p-1 my-1">
//               <div>
//                 <h4>Enter your reviews</h4>
//                 <form className="form" autoComplete="off">
//                   <div className="form-group">
//                     <input
//                       type="text"
//                       placeholder="Enter your rating out of 5"
//                       name="rating"
//                       required
//                     />
//                   </div>
//                   <input type="submit" className="btn btn-primary" value="Add Rating" />
//                 </form>
//               </div>
//             </div>
//           </div>
//         </div>
//       )}
//     </div>
//   );
// };

// export default Myprofile;



import React, { useState, useEffect } from 'react';
import { Link, Navigate } from 'react-router-dom';
import axios from 'axios';

const Myprofile = () => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [review, setReview] = useState([]);
    // const url='http://localhost:5001/myprofile'
  const url='https://developershub-3svr.onrender.com'
  useEffect(() => {
    const fetchData = async () => {
      try {
        const profileRes = await axios.get(`${url}/myprofile`, {
          headers: { "x-token": localStorage.getItem("token") },
        });
        setData(profileRes.data);

        const reviewRes = await axios.get(`${url}/myreview`, {
          headers: { "x-token": localStorage.getItem("token") },
        });
        setReview(reviewRes.data);
      } catch (error) {
        console.error("Error fetching data:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
    console.log(review)
  }, []);

  if (!localStorage.getItem("token")) {
    return <Navigate to="/login" />;
  }

  return (
    <div>
      <nav className="navbar bg-dark">
        <h1>
          <Link to="/"><i className="fas fa-code"></i> Developers Hub</Link>
        </h1>
        <ul>
          <li><Link to="/myprofile">My Profile</Link></li>
          <li><Link to="/login">Logout</Link></li>
        </ul>
      </nav>

      {loading ? (
        <p>Loading...</p>
      ) : (
        <div className="container">
          <Link to="/dashboard" className="btn btn-light">Back To Profiles</Link>

          <div className="profile-grid my-1">
            <div className="profile-top bg-primary p-2">
              <img
                className="round-img my-1"
                src="https://www.gravatar.com/avatar/00000000000000000000000000000000?d=mp&f=y&s=200"
                alt="Profile"
              />
              <h1 className="large">{data?.fullname || "N/A"}</h1>
              <p className="lead">{data?.email || "N/A"}</p>
              
            </div>
          </div>
          <div className="profile-github">
            <h2 className="text-primary my-1">
              <i className="fab fa-github"></i> Reviews and Ratings
            </h2>
            <div className="repo bg-white p-1 my-1">
              {review.length > 0 ? (
                review.map((review) => (
                  <div key={review.id}>
                    <h4><Link to="#">{review.taskprovider}</Link></h4>
                    <p>{review.rating}/5</p>
                  </div>
                ))
              ) : (
                <p>No reviews added yet</p>
              )}
            </div>

            <div className="repo bg-white p-1 my-1">
              <div>
                <h4>Enter your reviews</h4>
                <form className="form" autoComplete="off">
                  <div className="form-group">
                    <input
                      type="text"
                      placeholder="Enter your rating out of 5"
                      name="rating"
                      required
                    />
                  </div>
                  <input type="submit" className="btn btn-primary" value="Add Rating" />
                </form>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Myprofile;
