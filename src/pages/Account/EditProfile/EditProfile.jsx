import React, { useState, useEffect, useContext } from "react";
import InputLabel from "../../../components/elements/InputLabel/InputLabel";
import BackButton from "../../../components/elements/BackButton/BackButton";
import styles from "./styles.module.css";
import AuthenticationButton from "../../../components/elements/AuthenticationButton/AuthenticationButton";
import Label from "../../../components/elements/Label/Label";
import { useNavigate } from "react-router-dom";
import axios from "axios";

import { WebsiteThemeContext } from "../../../hooks/theme/WebsiteThemeContext";
import { UserAthorizationContext } from "../../../hooks/authorization/UserAuthorizationContext";

const EditProfile = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [address, setAddress] = useState("");
  const [city, setCity] = useState("");
  const [tagline, setTagline] = useState("");
  const [website, setWebsite] = useState("");
  const [facebookUrl, setFacebookUrl] = useState("");
  const [igUrl, setIgUrl] = useState("");
  const [ticTokUrl, setTicTokUrl] = useState("");
  const [xurl, setXurl] = useState("");

  const { theme } = useContext(WebsiteThemeContext);
  const { role } = useContext(UserAthorizationContext);
  const navigate = useNavigate();

  useEffect(() => {
    // Fetch the current profile data (assuming you have a "GET" endpoint to fetch profile details)
    const fetchProfile = async () => {
      try {
        // Retrieve the token from local storage
        const token = localStorage.getItem('token');
        if (!token) {
          console.error("No token found. User may not be authenticated.");
          return;
        }

        const response = await axios.get("https://scoutflair.top:8081/api/v1/profile/getProfile", {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });
        const profile = response.data?.data?.obj;
        if (profile) {
          setName(profile.name || "");
          setEmail(profile.email || "");
          setPhone(profile.phone || "");
          setAddress(profile.address || "");
          setCity(profile.city || "");
          setTagline(profile.tagline || "");
          setWebsite(profile.website || "");
          setFacebookUrl(profile.facebookUrl || "");
          setIgUrl(profile.igUrl || "");
          setTicTokUrl(profile.ticTokUrl || "");
          setXurl(profile.xurl || "");
        }
      } catch (error) {
        console.error("Error fetching profile:", error);
      }
    };

    fetchProfile();
  }, [role]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const token = localStorage.getItem('token');
      if (!token) {
        console.error("No token found. User may not be authenticated.");
        return;
      }

      const payload = {
        name,
        email,
        phone,
        address,
        city,
        tagline,
        website,
        facebookUrl,
        igUrl,
        ticTokUrl,
        xurl,
      };

      // Call the profile update API
      await axios.post("https://scoutflair.top:8081/api/v1/profile/editProfile", payload, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      alert("Profile updated successfully");
      navigate("/account");
    } catch (err) {
      console.error("Error updating profile:", err);
    }
  };

  return (
    <div className={styles.EditProfile}>
      <h3
        className={styles.PageHeader}
        style={
          theme === "default" || theme === "dark"
            ? { color: "#BF2B47" }
            : { color: "rgb(25, 32, 43)" }
        }
      >
        Edit Profile
      </h3>

      <form
        className={styles.InputContainer}
        style={
          theme === "default" || (theme === "dark" && window.matchMedia("(min-width: 768px)").matches)
            ? {}
            : {
                boxShadow: "0 0 3px 0 rgba(0,0,0,0.5)",
              }
        }
        onSubmit={handleSubmit}
      >
        <InputLabel label="Name" type="text" value={name} placeholder="Edit name" onChange={(e) => setName(e.target.value)} />
        <InputLabel label="Email" type="email" value={email} placeholder="Change email" onChange={(e) => setEmail(e.target.value)} />
        <InputLabel label="Phone Number" type="text" value={phone} placeholder="Edit phone" onChange={(e) => setPhone(e.target.value)} />
        <InputLabel label="Address" type="text" value={address} placeholder="Edit address" onChange={(e) => setAddress(e.target.value)} />
        <InputLabel label="City" type="text" value={city} placeholder="Edit city" onChange={(e) => setCity(e.target.value)} />
        <InputLabel label="Tagline" type="text" value={tagline} placeholder="Edit tagline" onChange={(e) => setTagline(e.target.value)} />
        <InputLabel label="Website" type="text" value={website} placeholder="Edit website" onChange={(e) => setWebsite(e.target.value)} />
        <InputLabel label="Facebook URL" type="text" value={facebookUrl} placeholder="Edit Facebook URL" onChange={(e) => setFacebookUrl(e.target.value)} />
        <InputLabel label="Instagram URL" type="text" value={igUrl} placeholder="Edit Instagram URL" onChange={(e) => setIgUrl(e.target.value)} />
        <InputLabel label="TikTok URL" type="text" value={ticTokUrl} placeholder="Edit TikTok URL" onChange={(e) => setTicTokUrl(e.target.value)} />
        <InputLabel label="X (Twitter) URL" type="text" value={xurl} placeholder="Edit X URL" onChange={(e) => setXurl(e.target.value)} />
        <AuthenticationButton text="Update" onclick={handleSubmit} />
      </form>

      {/* <Label text="Change Password" color="#1F4490" /> */}
      <BackButton color="#0E0E0F" to="/account" />
    </div>
  );
};

export default EditProfile;
