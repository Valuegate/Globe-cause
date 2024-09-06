import React from "react";
import {  useNavigate } from "react-router-dom";
import { doc, getDoc } from "firebase/firestore";
import { db } from "../../firebase";
import { useEffect } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from "../../firebase";

import { useContext } from "react";
import { UserAthorizationContext } from "../../hooks/authorization/UserAuthorizationContext";
import { NameContext } from "../../hooks/name/NameContext";

import Splash from "../Home/Splash";

const ProtectedRoute = ({ children }) => {
  const [user, loading, error] = useAuthState(auth);

  const history = useNavigate();


  const lists = ["portugal", "spain", "romania"];

  //authorization context
  const { role, setRole } = useContext(UserAthorizationContext);

  //name context
  const { setName } = useContext(NameContext);

  const fetchIndividualAccountType = async (uid) => {
    const docRef = doc(db, "volunteers", uid);
    const docSnap = await getDoc(docRef);

    if (docSnap.exists()) {
      setName(docSnap.data().name);
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
        setName(docSnap.data().name);
        setRole(lists[i]);
        return;
      } else {
        console.log("User not found");
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



  if (user && user.emailVerified) {
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

};

export default ProtectedRoute;
