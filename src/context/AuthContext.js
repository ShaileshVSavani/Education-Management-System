
import React, { createContext, useState, useEffect } from 'react';

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [courses, setCourses] = useState([]); 

  
  useEffect(() => {
    const storedData = JSON.parse(localStorage.getItem('user_data'));
    if (storedData && storedData.user) {
      setUser(storedData.user);
      setCourses(storedData.courses || []); 
    }
  }, []);

  const login = (userData) => {
    const storedData = JSON.parse(localStorage.getItem('user_data')) || { user: null, courses: [] };

    const newUserData = {
      user: userData,
      courses: storedData.courses || [],
    };

    setUser(newUserData.user);
    setCourses(newUserData.courses); 

    localStorage.setItem('user_data', JSON.stringify(newUserData));
  };

  const logout = () => {
    const storedData = JSON.parse(localStorage.getItem('user_data')) || { user: null, courses: [] };

    const updatedData = {
      user: null,
      courses: storedData.courses || [],
    };

    setUser(null); 
    setCourses(updatedData.courses); 

    localStorage.setItem('user_data', JSON.stringify(updatedData));
  };

  return (
    <AuthContext.Provider value={{ user, setUser, courses, setCourses, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthContext;
