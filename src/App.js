import { Suspense } from "react";
import React, { useState, useEffect } from "react";

// import { UserAthorizationContext } from "./hooks/authorization/UserAuthorizationContext";
import { UserAuthContextProvider } from "./hooks/auth/UserAuthContext";
import { NameProvider } from "./hooks/name/NameContext";
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
// import CityDetail from "./pages/Home/CityDetail/CityDetail";
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
// import OrganizationDetail from "./pages/Home/OrganizationDetail/OrganizationDetail";
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
import ForgotPassword from "./pages/Authentication/ForgotPassword/ForgotPassword";
import NgoDetails from "./components/ngo/NgoDetails/NgoDetails";
import NgoList from "./components/ngo/NgoList/NgoList";
import ResetPassword from "./pages/Authentication/ResetPassword/ResetPassword";
import LandingPage from "./pages/Landing/Landing";

const ScrollToTop = () => {
  const { pathname } = useLocation();
  const history = useNavigate();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname, history]);

  return null;
};

function App() {
  const [role] = useState("");
  const [theme, setTheme] = useState("default");

  // Replace useAuthState with your custom authentication logic
  const [user, loading] = [null, false]; // Adjust this line according to your new auth logic

  useEffect(() => {
    // Get theme from local storage
    const theme = localStorage.getItem("theme");
    // If theme exists in local storage, set theme
    if (theme) {
      setTheme(theme);
    }
  }, []);

  return (
    <div className="App">
      <Suspense fallback="loading">
        <UserAuthContextProvider>
          {/* <UserAthorizationContext.Provider value={{ role, setRole }}> */}
            <NameProvider>
              <WebsiteThemeContext.Provider value={{ theme, setTheme }}>
                <Router>
                  <ScrollToTop />
                  <Routes>
                    <Route path="/" element={<Splash />} />
                    <Route path="/signup" element={<SignUp />} />
                    <Route path="/landing" element={<LandingPage />} />
                    <Route
                      path="/home"
                      element={
                        <Home />
                      }
                    />
                    <Route path="/ngos/:state/:id" element={<NgoDetails />} />
                    <Route path="/ngos" element={<NgoList />} />
                    <Route
                      path="/organizations"
                      element={
                        // <ProtectedRoute>
                          <Organizations />
                        // {/* </ProtectedRoute> */}
                      }
                    />
                    <Route
                      path="/account"
                      element={<Account />}
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
                    {/* <Route
                      path="/city/:cityId"
                      element={
                        <ProtectedRoute>
                          <CityDetail />
                        </ProtectedRoute>
                      }
                    /> */}
                    {role !== "volunteer" || role !== "" ? (
                      <Route
                        path="/community"
                        element={
                          // <ProtectedRoute>
                            <Community />
                          // </ProtectedRoute>
                        }
                      />
                    ) : null}
                    <Route
                      path="/account/edit-profile"
                      element={<EditProfile />}
                    />
                    <Route
                      path="/account/about"
                      element={
                        // <ProtectedRoute>
                          <About />
                        // </ProtectedRoute>
                      }
                    />
                    <Route
                      path="/forgot-password"
                      element={<ForgotPassword />}
                    />
                    <Route
                      path="/reset-password"
                      element={<ResetPassword />}
                    />
                    <Route
                      path="/account/privacy"
                      element={
                        // <ProtectedRoute>
                          <PrivacyPolicy />
                        // {/* </ProtectedRoute> */}
                      }
                    />
                    <Route
                      path="/account/change-password"
                      element={<ChangePassword />}
                    />
                    <Route
                      path="/account/notification-settings"
                      element={
                        // <ProtectedRoute>
                          <Notification />
                        // </ProtectedRoute>
                      }
                    />
                    <Route
                      path="/account/dark-mode"
                      element={
                        // <ProtectedRoute>
                          <DarkMode />
                        // </ProtectedRoute>
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
                    {/* <Route
                      path="/organization/:organizationId"
                      element={
                        <ProtectedRoute>
                          <OrganizationDetail />
                        </ProtectedRoute>
                      }
                    /> */}
                    <Route
                      path="/account/help-center"
                      element={
                        // <ProtectedRoute>
                          <Help />
                        // </ProtectedRoute>
                      }
                    />

                    <Route path="/profile" element={<ProfileSetup />} />
                    <Route path="/notifications" element={<Notifications />} />
                  </Routes>
                  {user && !loading ? <Footer /> : null}
                </Router>
              </WebsiteThemeContext.Provider>
            </NameProvider>
          {/* </UserAthorizationContext.Provider> */}
        </UserAuthContextProvider>
      </Suspense>
    </div>
  );
}

export default App;
