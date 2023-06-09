import { useUserAuth } from "../../hooks/auth/UserAuthContext";
import { useNavigate } from "react-router-dom";

const EmailProtectedRoute = ({ children }) => {
  const navigate = useNavigate();
  const { user } = useUserAuth();

  if (user && user.emailVerified) {
    navigate("/home");
  }

  return children;
};

export default EmailProtectedRoute;
