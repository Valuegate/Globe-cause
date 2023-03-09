import "./App.css";
import Home from "./pages/Home/Home";
import Splash from "./pages/Home/Splash";
import Organizations from "./pages/Organizations/Organizations";
import Account from "./pages/Account/Account";
import Login from "./pages/Authentication/Login";
import CityDetail from "./pages/Home/CityDetail/CityDetail";
import EditProfile from "./pages/Account/EditProfile/EditProfile";
import ChangePassword from "./pages/Account/ChangePassword/ChangePassword";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import OrganizationDetail from "./pages/Home/OrganizationDetail/OrganizationDetail";

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<Splash />} />
          <Route path="/home" element={<Home />} />
          <Route path="/organizations" element={<Organizations />} />
          <Route path="/organization/:organizationId" element={<OrganizationDetail />} />
          <Route path="/account" element={<Account />} />
          <Route path="/login" element={<Login />} />
          <Route path="/city/:cityId" element={<CityDetail />} />
          <Route path="/account/edit-profile" element={<EditProfile />} />
          <Route path="/account/change-password" element={<ChangePassword />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
