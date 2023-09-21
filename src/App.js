import { Suspense } from "react";
import { useState, useEffect } from "react";

import { UserAthorizationContext } from "./hooks/authorization/UserAuthorizationContext";

import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from "./firebase";

import { UserAuthContextProvider } from "./hooks/auth/UserAuthContext";
import { NameContext } from "./hooks/name/NameContext";
import { WebsiteThemeContext } from "./hooks/theme/WebsiteThemeContext";

import ProtectedRoute from "./pages/Authentication/ProtectedRoutes";
import EmailProtectedRoute from "./pages/Authentication/EmailProtectedRoute";

import "./App.css";

import Home from "./pages/Home/Home";
import Splash from "./pages/Home/Splash";
import Organizations from "./pages/Organizations/Organizations";
import Account from "./pages/Account/Account";
import Notifications from "./pages/Notifications/Notifications";
import Login from "./pages/Authentication/Login";
import SignUp from "./pages/Authentication/SignUp/SignUp";
import CityDetail from "./pages/Home/CityDetail/CityDetail";
import EditProfile from "./pages/Account/EditProfile/EditProfile";
import ChangePassword from "./pages/Account/ChangePassword/ChangePassword";
import Notification from "./pages/Account/Notification/Notification";

import {
  BrowserRouter as Router,
  Routes,
  Route,
  useLocation,
  useNavigate,
} from "react-router-dom";
import OrganizationDetail from "./pages/Home/OrganizationDetail/OrganizationDetail";
// import Notification from "./pages/Account/Notifications/Notifications";
import About from "./pages/Account/About/About";
import PrivacyPolicy from "./pages/Account/PrivacyPolicy/PrivacyPolicy";
import Help from "./pages/Account/HelpCenter/Help";
import ProfileSetup from "./components/containers/ProfileSetup/ProfileSetup";
import Language from "./pages/Account/Language/Language";
import Community from "./pages/MyCommunity/Community";
import EmailVerification from "./pages/Authentication/EmailVerification/EmailVerification";
import EmailVerified from "./pages/Authentication/EmailVerified/EmailVerified";
import DarkMode from "./pages/Account/DarkMode/DarkMode";
import Footer from "./components/containers/Footer/Footer";

import bg from "./assets/bg-image.jpg";
import ForgotPassword from "./pages/Authentication/ForgotPassword/ForgotPassword";

const ScrollToTop = () => {
  const { pathname } = useLocation();
  const history = useNavigate();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname, history]);

  return null;
};

function App() {
  const [role, setRole] = useState("");
  const [name, setName] = useState("");
  const [theme, setTheme] = useState("default");

  const [user, loading] = useAuthState(auth);

  useEffect(() => {
    // get theme from local storage
    const theme = localStorage.getItem("theme");
    // if theme exists in local storage, set theme
    if (theme) {
      setTheme(theme);
    }
  }, []);

  return (
    <div
      className="App"
      style={
        theme === "default"
          ? { backgroundImage: `url(${bg})`, backgroundRepeat: "repeat" }
          : theme === "dark"
          ? { backgroundImage: "none" }
          : { backgroundImage: "none", backgroundColor: "#fff" }
      }
    >
      <Suspense fallback="loading">
        <UserAuthContextProvider>
          <UserAthorizationContext.Provider value={{ role, setRole }}>
            <NameContext.Provider value={{ name, setName }}>
              <WebsiteThemeContext.Provider value={{ theme, setTheme }}>
                <Router>
                  <ScrollToTop />
                  <Routes>
                    <Route path="/" element={<Splash />} />
                    <Route path="/signup" element={<SignUp />} />
                    <Route
                      path="/home"
                      element={
                        <ProtectedRoute>
                          <Home />
                        </ProtectedRoute>
                      }
                    />
                    <Route
                      path="/organizations"
                      element={
                        <ProtectedRoute>
                          <Organizations />
                        </ProtectedRoute>
                      }
                    />
                    <Route
                      path="/account"
                      element={
                        <ProtectedRoute>
                          <Account />
                        </ProtectedRoute>
                      }
                    />
                    <Route path="/login" element={<Login />} />

                    <Route
                      path="/verify-email"
                      element={
                        <EmailProtectedRoute>
                          <EmailVerification />
                        </EmailProtectedRoute>
                      }
                    />
                    <Route path="/email-verified" element={<EmailVerified />} />
                    <Route
                      path="/city/:cityId"
                      element={
                        <ProtectedRoute>
                          <CityDetail />
                        </ProtectedRoute>
                      }
                    />
                    {role !== "volunteer" || role !== "" ? (
                      <Route
                        path="/community"
                        element={
                          <ProtectedRoute>
                            <Community />
                          </ProtectedRoute>
                        }
                      />
                    ) : null}
                    <Route
                      path="/account/edit-profile"
                      element={
                        <ProtectedRoute>
                          <EditProfile />
                        </ProtectedRoute>
                      }
                    />
                    <Route
                      path="/account/about"
                      element={
                        <ProtectedRoute>
                          <About />
                        </ProtectedRoute>
                      }
                    />
                    <Route
                      path="/forgot-password"
                      element={<ForgotPassword />}
                    />
                    <Route
                      path="/account/privacy"
                      element={
                        <ProtectedRoute>
                          <PrivacyPolicy />
                        </ProtectedRoute>
                      }
                    />
                    <Route
                      path="/account/change-password"
                      element={
                        <ProtectedRoute>
                          <ChangePassword />
                        </ProtectedRoute>
                      }
                    />
                    <Route
                      path="/account/notification-settings"
                      element={
                        <ProtectedRoute>
                          <Notification />
                        </ProtectedRoute>
                      }
                    />
                    <Route
                      path="/account/dark-mode"
                      element={
                        <ProtectedRoute>
                          <DarkMode />
                        </ProtectedRoute>
                      }
                    />
                    <Route
                      path="/account/language"
                      element={
                        <ProtectedRoute>
                          <Language />
                        </ProtectedRoute>
                      }
                    />
                    <Route
                      path="/organization/:organizationId"
                      element={
                        <ProtectedRoute>
                          <OrganizationDetail />
                        </ProtectedRoute>
                      }
                    />
                    <Route
                      path="/account/help-center"
                      element={
                        <ProtectedRoute>
                          <Help />
                        </ProtectedRoute>
                      }
                    />

                    <Route path="/profile" element={<ProfileSetup />} />
                    <Route path="/notifications" element={<Notifications />} />
                  </Routes>
                  {user && !loading ? <Footer /> : null}
                </Router>
              </WebsiteThemeContext.Provider>
            </NameContext.Provider>
          </UserAthorizationContext.Provider>
        </UserAuthContextProvider>
      </Suspense>
    </div>
  );
}

export default App;
