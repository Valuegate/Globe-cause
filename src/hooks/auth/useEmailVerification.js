import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { auth } from "../../firebase";

const useEmailVerification = () => {
  const [isVerified, setIsVerified] = useState(false);
  const history = useNavigate();

  useEffect(() => {
    const checkEmailVerification = async () => {
      const user = auth.currentUser;
      if (user) {
        await user.reload(); // Refresh user data
        setIsVerified(user.emailVerified);
        if (!user.emailVerified) {
          history.push("/verify-email"); // Redirect to a verification page
        }
      }
    };

    checkEmailVerification();
  }, []);

  return isVerified;
};

export default useEmailVerification;
