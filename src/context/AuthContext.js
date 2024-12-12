
import React, { createContext, useEffect, useState } from "react";

export const AuthContext = createContext();

const AuthProvider = ({ children }) => {
  const [authData, setAuthData] = useState({
    user: null,
    teachers: [],
    students: [],
  });

  const [courses, setCourses] = useState([]);
  const [grades, setGrades] = useState({}); // New state to store grades

  // Load data from localStorage with fallback
  const loadFromLocalStorage = (key, fallback) => {
    try {
      const data = localStorage.getItem(key);
      return data ? JSON.parse(data) : fallback;
    } catch (error) {
      console.error(`Error loading ${key} from localStorage`, error);
      return fallback;
    }
  };

  // Save data to localStorage
  const saveToLocalStorage = (key, data) => {
    try {
      localStorage.setItem(key, JSON.stringify(data));
    } catch (error) {
      console.error(`Error saving ${key} to localStorage`, error);
    }
  };

  useEffect(() => {
    // Load user data and courses from localStorage
    const storedUserData = loadFromLocalStorage("user_data", {
      user: null,
      teachers: [],
      students: [],
    });
    const storedCourses = loadFromLocalStorage("courses", []);
    const storedGrades = loadFromLocalStorage("grades", {}); // Load grades

    if (storedUserData && storedUserData.user) {
      setAuthData({
        user: storedUserData.user,
        teachers: storedUserData.teachers,
        students: storedUserData.students,
      });
    } else {
      setAuthData({
        user: null,
        teachers: storedUserData.teachers,
        students: storedUserData.students,
      });
    }

    // Load courses and grades from localStorage
    setCourses(storedCourses);
    setGrades(storedGrades); // Set grades
  }, []);

  // Save courses and grades to localStorage whenever they change
  useEffect(() => {
    if (authData.user) {
      saveToLocalStorage("courses", courses);
      saveToLocalStorage("grades", grades); // Save grades
    }
  }, [courses, grades, authData.user]);

  // Save user data to localStorage whenever authData changes
  useEffect(() => {
    if (authData.user) {
      const { user, teachers, students } = authData;
      saveToLocalStorage("user_data", { user, teachers, students });
    } else {
      // If user is null, clear user data from localStorage
      saveToLocalStorage("user_data", { user: null, teachers: authData.teachers, students: authData.students });
    }
  }, [authData]);

  // Login function
  const login = (userData) => {
    setAuthData((prev) => ({
      ...prev,
      user: userData,
    }));
    // Ensure the user data is stored in localStorage after login
    saveToLocalStorage("user_data", {
      user: userData,
      teachers: authData.teachers,
      students: authData.students,
    });
  };

  // Logout function
  const logout = () => {
    setAuthData((prev) => ({
      ...prev,
      user: null, // User logged out
    }));

    // Clear user data from localStorage
    saveToLocalStorage("user_data", {
      user: null,
      teachers: authData.teachers,
      students: authData.students,
    });
  };

  // Update state by key
  const updateState = (key, value) => {
    if (key in authData) {
      setAuthData((prev) => ({
        ...prev,
        [key]: value,
      }));
    } else {
      console.warn(`Invalid key: ${key}`);
    }
  };

  // Enroll a student in a course
  const enrollStudent = (studentId, courseId) => {
    setAuthData((prev) => ({
      ...prev,
      students: prev.students.map((student) =>
        student.id === studentId
          ? {
              ...student,
              enrollments: [...new Set([...(student.enrollments || []), courseId])],
            }
          : student
      ),
    }));
  };

  // Unenroll a student from a course
  const unenrollStudent = (studentId, courseId) => {
    setAuthData((prev) => ({
      ...prev,
      students: prev.students.map((student) =>
        student.id === studentId
          ? {
              ...student,
              enrollments: (student.enrollments || []).filter((id) => id !== courseId),
            }
          : student
      ),
    }));
  };

  // Handle grade changes
  const handleGradeChange = (studentId, courseId, grade) => {
    setGrades((prevGrades) => ({
      ...prevGrades,
      [courseId]: {
        ...prevGrades[courseId],
        [studentId]: grade,
      },
    }));
  };

  return (
    <AuthContext.Provider
      value={{
        ...authData,
        courses,
        grades, // Add grades to the context value
        login,
        logout,
        updateState,
        enrollStudent,
        unenrollStudent,
        handleGradeChange, // Provide grade change handler
        setCourses,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;
