// import React from "react";
// import {  useNavigate } from "react-router-dom";
// import { doc, getDoc } from "firebase/firestore";
// import { db } from "../../firebase";
// import { useCallback, useEffect } from "react";
// import { useAuthState } from "react-firebase-hooks/auth";
// import { auth } from "../../firebase";

// import { useContext } from "react";
// import { UserAthorizationContext } from "../../hooks/authorization/UserAuthorizationContext";
// import { NameContext } from "../../hooks/name/NameContext";

// import Splash from "../Home/Splash";

// const ProtectedRoute = ({ children }) => {
//   const [user, loading, error] = useAuthState(auth);

//   const history = useNavigate();


//   const lists = ["portugal", "spain", "romania"];

//   //authorization context
//   const { role, setRole } = useContext(UserAthorizationContext);

//   //name context
//   const { setName } = useContext(NameContext);

//   const fetchIndividualAccountType = useCallback(async (uid) => {
//     const docRef = doc(db, "volunteers", uid);
//     const docSnap = await getDoc(docRef);
  
//     if (docSnap.exists()) {
//       setName(docSnap.data().name);
//       setRole("volunteer");
//       return true;
//     } else {
//       console.log("No such document!");
//     }
//   }, [setName, setRole]);
  
//   const fetchOrganizationAccountType = useCallback(async (uid) => {
//     for (let i = 0; i < lists.length; i++) {
//       const docRef = doc(db, `organisations_${lists[i]}`, uid);
//       const docSnap = await getDoc(docRef);
  
//       if (docSnap.exists()) {
//         setName(docSnap.data().name);
//         setRole(lists[i]);
//         return;
//       } else {
//         console.log("User not found");
//       }
//     }
//   }, [lists, setName, setRole]);
  
//   useEffect(() => {
//     if (user) {
//       fetchIndividualAccountType(user.uid);
//       if (role !== "volunteer") {
//         fetchOrganizationAccountType(user.uid);
//       }
//     }
//   }, [user, role, fetchIndividualAccountType, fetchOrganizationAccountType]);



//   if (user && user.emailVerified) {
//     return children;
//   } else if (user && !user.emailVerified) {
//     history("/verify-email");
//   } else {
//     history("/login");
//   }

//   if (loading) {
//     return <Splash />;
//   }

//   if (error) {
//     return <h1>Error: {error}</h1>;
//   }

// };

// export default ProtectedRoute;


import React, { useCallback, useEffect, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { UserAthorizationContext } from "../../hooks/authorization/UserAuthorizationContext";
import { NameContext } from "../../hooks/name/NameContext";
import Splash from "../Home/Splash";

const ProtectedRoute = ({ children }) => {
  const history = useNavigate();

  // Example user object (you might be getting it from your context or state)
  const { user, loading, error } = useContext(UserAthorizationContext); // Assuming you have a way to get the user state


  // authorization context
  const { setRole } = useContext(UserAthorizationContext);
  
  // name context
  const { setName } = useContext(NameContext);

  const fetchUserData = useCallback(async (uid) => {
    // Implement your logic to fetch user data here (e.g., from an API)
    try {
      const response = await fetch(`/api/users/${uid}`); // Example endpoint
      const data = await response.json();

      if (data) {
        setName(data.name);
        setRole(data.role); // Assuming `role` is part of the user data
      } else {
        console.log("No user data found");
      }
    } catch (error) {
      console.log("Error fetching user data:", error);
    }
  }, [setName, setRole]);

  useEffect(() => {
    if (user) {
      fetchUserData(user.id); // Adjust according to how you retrieve the user's ID
    }
  }, [user, fetchUserData]);

  if (loading) {
    return <Splash />;
  }

  if (error) {
    return <h1>Error: {error}</h1>;
  }

  if (user) {
    if (user.emailVerified) {
      return children;
    } else {
      history("/verify-email");
    }
  } else {
    history("/login");
  }

  return null; // Or a loading state
};

export default ProtectedRoute;
