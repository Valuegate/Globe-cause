import { Navigate } from "react-router-dom";
import { useUserAuth } from "../../hooks/auth/UserAuthContext";
import { doc, getDoc } from "firebase/firestore";
import { db } from "../../firebase";
import { useEffect, useState } from "react";

import { useContext } from "react";
import { UserAthorizationContext } from "../../hooks/authorization/UserAuthorizationContext";

const ProtectedRoute = ({ children }) => {
  const { user } = useUserAuth();

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

  if (!user) {
    console.log("No user");
    return <Navigate to="/login" />;
  } else if (user && !user.emailVerified) {
    console.log("Email not verified");
    return <Navigate to="/verify-email" />;
  }

  return children;
};

export default ProtectedRoute;
