import React, { createContext, useContext, useState, useEffect } from "react";
import axios from "axios";

const userAuthContext = createContext();

export function UserAuthContextProvider({ children }) {
  const [accessToken, setAccessToken] = useState(null); // Store access token
  const [success, setSuccess] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  // Function to log in user
  const logIn = async (username, password) => {
    if (loading) {
      return;
    } setLoading(true);

    try {
      const response = await axios.post("https://scoutflair.top:8081/globeCause/v1/signin", {
        username,
        password,
      });
      const { jwtToken } = response.data;
      setSuccess(true);
      setAccessToken(jwtToken); // Store JWT token
      setLoading(false);

      localStorage.setItem("token", jwtToken);
    } catch (error) {
      console.log(error)
      setError(`Login error: ${error.response.data}`);
      setSuccess(false);
      setLoading(false);
    }
  };

  // Function to sign up a new user
  const signUp = async (email, password) => {
    if (loading) {
      return;
    } setLoading(true);

    try {
      const response = await axios.post("https://scoutflair.top:8081/globeCause/v1/signup", {
        email,
        password,
      });
      const { jwtToken } = response.data;
      setSuccess(true);
      setAccessToken(jwtToken); // Store JWT token
      setLoading(false);

      localStorage.setItem("token", jwtToken);
    } catch (error) {
      setSuccess(false)
      console.error("Signup error:", error);
      setLoading(false);
    }
  };

  // Function to log out user
  const logOut = () => {
    setAccessToken(null);
    setSuccess(false);
    setLoading(false);
    localStorage.removeItem("token");
  };

  // Check for existing token on app load
  useEffect(() => {
    const token = localStorage.getItem("token");
    if (token) {
      setAccessToken(token);
      // Optionally, fetch the user data with the token
    }
    
  }, []);

  return (
    <userAuthContext.Provider
      value={{
        accessToken,
        logIn,
        signUp,
        logOut,
        success,
        loading,
        error,
      }}
    >
      {children}
    </userAuthContext.Provider>
  );
}

export function useUserAuth() {
  return useContext(userAuthContext);
}
