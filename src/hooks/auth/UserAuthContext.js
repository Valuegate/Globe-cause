import { createContext, useContext, useEffect, useState } from "react";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  onAuthStateChanged,
  signOut,
  updateEmail,
  reauthenticateWithCredential,
  EmailAuthProvider,
  updatePassword,
  GoogleAuthProvider,
  signInWithPopup,
  sendEmailVerification,
} from "firebase/auth";
import { auth } from "../../firebase";

const userAuthContext = createContext();

export function UserAuthContextProvider({ children }) {
  const [user, setUser] = useState({});

  function logIn(email, password) {
    return signInWithEmailAndPassword(auth, email, password);
  }
  function signUp(email, password) {
    return createUserWithEmailAndPassword(auth, email, password);
  }

  function verificationEmail() {
    return sendEmailVerification(auth.currentUser);
  }

  function googleSignIn() {
    const provider = new GoogleAuthProvider();
    return signInWithPopup(auth, provider);
  }

  function logOut() {
    return signOut(auth);
  }

  const reauthenticate = (currentPassword) => {
    const user = auth.currentUser;
    const cred = EmailAuthProvider.credential(user.email, currentPassword);
    return reauthenticateWithCredential(user, cred);
  };

  // function updateEmailAddress(email) {
  //   return updateEmail(auth.currentUser, email);
  // }

  const updateEmailAddress = (email, currentPassword) => {
    reauthenticate(currentPassword)
      .then(() => {
        const user = auth.currentUser;
        updateEmail(user, email).then(() => {
          console.log("Email updated!");
        });
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const updatePassword = (currentPassword, newPassword) => {
    reauthenticate(currentPassword)
      .then(() => {
        const user = auth.currentUser;
        updatePassword(user, newPassword).then(() => {
          console.log("Password updated!");
        });
      })
      .catch((error) => {
        console.log(error);
      });
  };

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentuser) => {
      console.log("Auth", currentuser);
      setUser(currentuser);
    });

    return () => {
      unsubscribe();
    };
  }, []);

  return (
    <userAuthContext.Provider
      value={{
        user,
        logIn,
        signUp,
        logOut,
        updateEmailAddress,
        updatePassword,
        googleSignIn,
        verificationEmail,
      }}
    >
      {children}
    </userAuthContext.Provider>
  );
}

export function useUserAuth() {
  return useContext(userAuthContext);
}
