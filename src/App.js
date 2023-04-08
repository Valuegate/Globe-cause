import {Suspense} from 'react'

import { UserAuthContextProvider } from "./hooks/auth/UserAuthContext";

import ProtectedRoute from "./pages/Authentication/ProtectedRoutes";

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

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import OrganizationDetail from "./pages/Home/OrganizationDetail/OrganizationDetail";
// import Notification from "./pages/Account/Notifications/Notifications";
import About from "./pages/Account/About/About";
import PrivacyPolicy from "./pages/Account/PrivacyPolicy/PrivacyPolicy";
import Help from "./pages/Account/HelpCenter/Help";
import ProfileSetup from "./components/containers/ProfileSetup/ProfileSetup";
import Language from './pages/Account/Language/Language';
import Community from './pages/MyCommunity/Community';

function App() {
  return (
    <div className="App">
       <Suspense fallback="loading">
      <UserAuthContextProvider>
        <Router>
          <Routes>
            <Route path="/" element={<Splash />} />
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
            <Route path="/signup" element={<SignUp />} />
            <Route
              path="/city/:cityId"
              element={
                <ProtectedRoute>
                  <CityDetail />
                </ProtectedRoute>
              }
            />
            <Route
              path="/community"
              element={
                <ProtectedRoute>
                  <Community/>
                </ProtectedRoute>
              }
            />
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
            <Route path="/account/language"
             element={<ProtectedRoute>
              <Language/>
            </ProtectedRoute>} />
            <Route path="/organization/:organizationId" 
            element={
            <ProtectedRoute>
              <OrganizationDetail />
              </ProtectedRoute>} />
          
            <Route path="/profile" element={<ProfileSetup/>} />
            <Route path='/notifications' element={<Notifications/>}/>
            
          </Routes>
        </Router>
      </UserAuthContextProvider>
      </Suspense>
      {/* <Router>
        <Routes>
          <Route path="/" element={<Splash />} />
          <Route path="/home" element={<Home />} />
          <Route path="/organizations" element={<Organizations />} />
          <Route path="/account" element={<Account />} />
          <Route path="/login" element={<Login />} />
          <Route path='/notifications' element={<Notifications/>}/>
          
          <Route path="/account/notifications" element={<Notification/>} />
          <Route path="/account/about" element={<About/>} />
          <Route path="/account/privacy" element={<PrivacyPolicy/>} />
          
          
          
          <Route path="/city/:cityId" element={<CityDetail />} />
          <Route path="/account/edit-profile" element={<EditProfile />} />
          <Route path="/account/change-password" element={<ChangePassword />} />
        </Routes>
      </Router> */}
    </div>
  );
}

export default App;
