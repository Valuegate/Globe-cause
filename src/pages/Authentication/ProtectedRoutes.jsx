import { Navigate, useNavigate } from "react-router-dom";
import { useUserAuth } from "../../hooks/auth/UserAuthContext";
import { doc, getDoc, setDoc } from "firebase/firestore";
import { db } from "../../firebase";
import { useEffect, useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from "../../firebase";

import { useContext } from "react";
import { UserAthorizationContext } from "../../hooks/authorization/UserAuthorizationContext";
import { use } from "i18next";

import Splash from "../Home/Splash";

const ProtectedRoute = ({ children }) => {
  // const { user } = useUserAuth();
  const [user, loading, error] = useAuthState(auth);

  const history = useNavigate();

  const { logOut } = useUserAuth();

  const lists = ["portugal", "spain", "romania"];

  //authorization context
  const { role, setRole } = useContext(UserAthorizationContext);

  const fetchIndividualAccountType = async (uid) => {
    const docRef = doc(db, "volunteers", uid);
    const docSnap = await getDoc(docRef);

    if (docSnap.exists()) {
      console.log("Document data exist:", docSnap.data());
      setRole("volunteer");
          
      return true;
    } else {
      console.log("No such document!");
    }
  };

  const fetchOrganizationAccountType = async (uid) => {
    for (let i = 0; i < lists.length; i++) {
      const docRef = doc(db, `organisations_${lists[i]}`, uid);
      const docSnap = await getDoc(docRef);

      if (docSnap.exists()) {
        console.log("Document data exist:", docSnap.data());
        setRole(lists[i]);
        return;
      } else {
        console.log("No such document! in ", lists[i]);
      }
    }
  };

  

  useEffect(() => {
    if (user) {
      fetchIndividualAccountType(user.uid);
      if (role === "volunteer") {
        return;
      } else {
        fetchOrganizationAccountType(user.uid);
      }
    }
    
  }, [user]);


  console.log("Check user in Private: ", user);
  console.log("Check role in Private: ", role);

  if (user && user.emailVerified && role !== "") {
    return children;
  } else if (user && !user.emailVerified) {
    history("/verify-email");
  } else {
    history("/login");
  }

  if (loading) {
    return <Splash />;
  }

  if (error) {
    return <h1>Error: {error}</h1>;
  }

  // return children;
};

export default ProtectedRoute;
