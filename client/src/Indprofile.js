
// import { Link, useParams } from 'react-router-dom';

// const Indprofile = () => {
//   const[rating,setRating]=useState(null);
//   const[taskprovider,setTaskprovider]=useState(null);
//   // Get parameters from the URL
//   const submitHandler = e =>{
//     axios.get('http://localhost:5000/myprofile',{
//       header : {
//         'x-token' : localStorage.getItem('token')
//       }
//     }).then(res => setTaskprovider(res.data.fullname))
//   })
//     let review = {
//       taskprovider,
//       taskworker : matchMedia.params.id,
//       rating,
//     }
//     axios.get('http://localhost:5000/addreview',data,{
//       header : {
//         'x-token' : localStorage.getItem('token')
//       },
    
//     }).then(res => alert(res.data))
//   }
//   const { fullname, email } = useParams();

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

//       <section className="container">
//         <Link to="/myprofile" className="btn btn-light">Back To Profiles</Link>

//         <div className="profile-grid my-1">
//           <div className="profile-top bg-primary p-2">
//             <img
//               className="round-img my-1"
//               src="https://www.gravatar.com/avatar/00000000000000000000000000000000?d=mp&f=y&s=200"
//               alt=""
//             />
//             <h1 className="large">{fullname}</h1>  {/* Use fullname from URL params */}
//             <p className="lead">{email}</p>  {/* Use email from URL params */}
//             <p>India</p>
//           </div>

//           <div className="profile-github">
//           <h1>hello..</h1>
//             <h2 className="text-primary my-1">
//               <i className="fab fa-github"></i> Reviews and Ratings
//             </h2>
//             <div className="repo bg-white p-1 my-1">
//               <div>
//                 <h4>Enter your reviews</h4>
//                 <form className="form" autoComplete="off">
//                   <div className="form-group">
//                     <input
//                       type="text"
//                       placeholder="Enter your rating out of 5"
//                       name="rating"
//                       onChange={e => setRating(e.target)}
//                       required
//                     />
//                   </div>
//                   <input type="submit" className="btn btn-primary" value="Add Rating" />
//                 </form>
//               </div>
//             </div>
//           </div>
//         </div>
//       </section>
//     </div>
//   );
// };

// export default Indprofile;
import React, { useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import axios from 'axios';

const Indprofile = () => {
  const [rating, setRating] = useState(null);
  const [taskprovider, setTaskprovider] = useState(null);
  const { fullname, email, id } = useParams(); // Get parameters from the URL
  // const url='http://localhost:5001/myprofile'
  const url='https://developershub-3svr.onrender.com'
  const submitHandler = (e) => {
    e.preventDefault(); // Prevent default form submission behavior

    axios
      .get(`${url}/myprofile`, {
        headers: {
          'x-token': localStorage.getItem('token'),
        },
      })
      .then((res) => setTaskprovider(res.data.fullname))
      .catch((err) => console.error(err));

    let review = {
      taskprovider,
      taskworker: id, // Fixed incorrect reference
      rating,
    };

    axios.post(`${url}/addreview`, review, {
        headers: {
          'x-token': localStorage.getItem('token'),
        },
      })
      .then((res) => alert(res.data))
      .catch((err) => console.error(err));
  };

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

      <section className="container">
        <Link to="/myprofile" className="btn btn-light">Back To Profiles</Link>

        <div className="profile-grid my-1">
          <div className="profile-top bg-primary p-2">
            <img
              className="round-img my-1"
              src="https://www.gravatar.com/avatar/00000000000000000000000000000000?d=mp&f=y&s=200"
              alt=""
            />
            <h1 className="large">{fullname}</h1>  
            <p className="lead">{email}</p>  
            <p>India</p>
          </div>

          <div className="profile-github">
            <h2 className="text-primary my-1">
              <i className="fab fa-github"></i> Reviews and Ratings
            </h2>
            <div className="repo bg-white p-1 my-1">
              <div>
                <h4>Enter your reviews</h4>
                <form className="form" onSubmit={submitHandler} autoComplete="off">
                  <div className="form-group">
                    <input
                      type="text"
                      placeholder="Enter your rating out of 5"
                      name="rating"
                      onChange={(e) => setRating(e.target.value)}
                      required
                    />
                  </div>
                  <input type="submit" className="btn btn-primary" value="Add Rating" />
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Indprofile;
