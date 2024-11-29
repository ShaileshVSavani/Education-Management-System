

// import { createContext, useState, useEffect } from "react";

// // Create AuthContext
// const AuthContext = createContext();

// export const AuthProvider = ({ children }) => {
//   const [user, setUser] = useState(null);

//   // Load user and courses from localStorage on app start
//   useEffect(() => {
//     const storedUserData = JSON.parse(localStorage.getItem("user_data"));
//     if (storedUserData) {
//       setUser(storedUserData.user);
//     }
//   }, []);

//   // Login function to set user and courses in localStorage
//   const login = (userData) => {
//     const storedUserData = {
//       user: userData,
//       courses: JSON.parse(localStorage.getItem(getCoursesStorageKey(userData.email))) || [],
//     };

//     setUser(storedUserData.user);
//     localStorage.setItem("user_data", JSON.stringify(storedUserData)); // Store both user and courses in one object
//   };

//   // Logout function to clear user data but keep courses intact
//   const logout = () => {
//     const storedUserData = JSON.parse(localStorage.getItem("user_data"));
//     const updatedUserData = {
//       user: null,
//       courses: storedUserData ? storedUserData.courses : [],
//     };
    
//     setUser(null);
//     localStorage.setItem("user_data", JSON.stringify(updatedUserData)); // Keep courses intact
//   };

//   // Helper function to get the storage key for courses based on user email
//   const getCoursesStorageKey = (email) => `data_${email}_courses`;

//   return (
//     <AuthContext.Provider value={{ user, login, logout }}>
//       {children}
//     </AuthContext.Provider>
//   );
// };

// export default AuthContext;




import React, { createContext, useState, useEffect } from 'react';

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [courses, setCourses] = useState([]); // Make sure this is initialized

  // Load user and courses from localStorage when the app starts
  useEffect(() => {
    const storedData = JSON.parse(localStorage.getItem('user_data'));
    if (storedData && storedData.user) {
      setUser(storedData.user);
      setCourses(storedData.courses || []); // Ensure courses are loaded if present
    }
  }, []);

  const login = (userData) => {
    const storedData = JSON.parse(localStorage.getItem('user_data')) || { user: null, courses: [] };

    const newUserData = {
      user: userData,
      courses: storedData.courses || [],
    };

    setUser(newUserData.user);
    setCourses(newUserData.courses); // Ensure courses are updated

    localStorage.setItem('user_data', JSON.stringify(newUserData));
  };

  const logout = () => {
    const storedData = JSON.parse(localStorage.getItem('user_data')) || { user: null, courses: [] };

    const updatedData = {
      user: null,
      courses: storedData.courses || [],
    };

    setUser(null); // Clear the user state
    setCourses(updatedData.courses); // Set courses to previous data

    localStorage.setItem('user_data', JSON.stringify(updatedData));
  };

  return (
    <AuthContext.Provider value={{ user, setUser, courses, setCourses, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthContext;
