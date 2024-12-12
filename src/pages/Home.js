
// import React, { useContext, useEffect } from "react";
// import { Navigate } from "react-router-dom";
// import { AuthContext } from "../context/AuthContext";


// const Home = () => {
//   const { user } = useContext(AuthContext);

  
//   useEffect(() => {
//     if (user) {
//       if (user.role === "admin") {
//         return <Navigate to="/admin" />;
//       } else if (user.role === "teacher") {
//         return <Navigate to="/teacher" />;
//       } else if (user.role === "student") {
//         return <Navigate to="/student" />;
//       }
//     }
//   }, [user]);

//   return (
//     <div className="flex items-center justify-center min-h-screen bg-blue-100">
//       <div className="text-center p-6 bg-white shadow-lg rounded-lg max-w-lg w-full">
//         <h1 className="text-3xl font-bold text-blue-600 mb-4">Welcome to the Education Management System</h1>
//         <p className="text-lg text-gray-700 mb-6">
//           To access your dashboard, please log in or sign up.
//         </p>
//         <div className="flex justify-center space-x-4">
//           <button
//             onClick={() => window.location.href = '/login'}
//             className="px-6 py-2 bg-blue-600 text-white font-semibold rounded-md shadow-md hover:bg-blue-700 focus:outline-none"
//           >
//             Login
//           </button>
//           <button
//             onClick={() => window.location.href = '/signup'}
//             className="px-6 py-2 bg-gray-600 text-white font-semibold rounded-md shadow-md hover:bg-gray-700 focus:outline-none"
//           >
//             Sign Up
//           </button>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Home;






import React, { useContext, useEffect, useState } from "react";
import { Navigate } from "react-router-dom";
import { AuthContext } from "../context/AuthContext";

const Home = () => {
  const { user } = useContext(AuthContext);
  const [redirectTo, setRedirectTo] = useState(null);

  useEffect(() => {
    if (user) {
      if (user.role === "admin") {
        setRedirectTo("/admin");
      } else if (user.role === "teacher") {
        setRedirectTo("/teacher");
      } else if (user.role === "student") {
        setRedirectTo("/student");
      }
    }
  }, [user]);

  // If a redirect is set, navigate to the respective page
  if (redirectTo) {
    return <Navigate to={redirectTo} />;
  }

  return (
    <div className="flex items-center justify-center min-h-screen bg-blue-100">
      <div className="text-center p-6 bg-white shadow-lg rounded-lg max-w-lg w-full">
        <h1 className="text-3xl font-bold text-blue-600 mb-4">
          Welcome to the Education Management System
        </h1>
        <p className="text-lg text-gray-700 mb-6">
          To access your dashboard, please log in or sign up.
        </p>
        <div className="flex justify-center space-x-4">
          <button
            onClick={() => window.location.href = '/login'}
            className="px-6 py-2 bg-blue-600 text-white font-semibold rounded-md shadow-md hover:bg-blue-700 focus:outline-none"
          >
            Login
          </button>
          <button
            onClick={() => window.location.href = '/signup'}
            className="px-6 py-2 bg-gray-600 text-white font-semibold rounded-md shadow-md hover:bg-gray-700 focus:outline-none"
          >
            Sign Up
          </button>
        </div>
      </div>
    </div>
  );
};

export default Home;
