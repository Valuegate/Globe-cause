import React, { createContext, useContext, useState, useEffect } from "react";
import axios from "axios";

const userAuthContext = createContext();

export function UserAuthContextProvider({ children }) {
  const [user, setUser] = useState(null); // Store user data
  const [accessToken, setAccessToken] = useState(null); // Store access token

  // Function to log in user
  const logIn = async (email, password) => {
    try {
      const response = await axios.post("https://scoutflair.top:8081/globeCause/v1/signin", {
        email,
        password,
      });
      const { token, user } = response.data;
      setUser(user); // Store user data
      setAccessToken(token); // Store JWT token

      // Optionally, store the token in local storage or session storage
      localStorage.setItem("token", token);
    } catch (error) {
      console.error("Login error:", error);
    }
  };

  // Function to sign up a new user
  const signUp = async (email, password) => {
    try {
      const response = await axios.post("https://scoutflair.top:8081/globeCause/v1/signup", {
        email,
        password,
      });
      const { token, user } = response.data;
      setUser(user);
      setAccessToken(token);

      localStorage.setItem("token", token);
    } catch (error) {
      console.error("Signup error:", error);
    }
  };

  // Function to log out user
  const logOut = () => {
    setUser(null);
    setAccessToken(null);
    localStorage.removeItem("token"); // Remove token from local storage
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
        user,
        accessToken,
        logIn,
        signUp,
        logOut,
      }}
    >
      {children}
    </userAuthContext.Provider>
  );
}

export function useUserAuth() {
  return useContext(userAuthContext);
}
