import React, { useState } from "react";
import styles from "./styles.module.css";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";

import HeaderText from "../../../components/elements/HeaderText/HeaderText";
import Label from "../../../components/elements/Label/Label";
import AuthenticationButton from "../../../components/elements/AuthenticationButton/AuthenticationButton";
import VidBg from "../../../assets/video/bgvideo.mp4";

const SignUp = () => {
  const [formData, setFormData] = useState({
    address: "",
    city: "",
    email: "",
    facebookUrl: "",
    igUrl: "",
    imageUrl: "",
    name: "",
    nationality: "",
    noOfActiveUsers: "",
    oidNumber: "",
    phone: "",
    tagline: "",
    ticTokUrl: "",
    usertype: "volunteer",
    website: "",
    xurl: "",
    password: "",
    confirmPassword: "",
  });

  const [error, setError] = useState("");

  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    // Validate passwords
    if (formData.password !== formData.confirmPassword) {
      setError("Passwords do not match");
      return;
    }
    try {
      const response = await axios.post(
        "https://scoutflair.top:8081/globeCause/v1/signup",
        formData
      );
      console.log("Sign-up successful:", response.data);
      // Redirect or show success message
      navigate("/account");
    } catch (err) {
      setError(
        err.response?.data?.message || "Sign-up failed. Please try again."
      );
      console.error("Error during sign-up:", err);
    }
  };

  return (
    <div className={styles.VideoContainer}>
      <video autoPlay loop muted className={styles.VideoBackground}>
        <source src={VidBg} type="video/mp4" />
      </video>
      <div className={styles.SignUp}>
        <HeaderText text="Sign Up" />
        <div className={styles.AccountSelection}>
          <div className={styles.volunteer}>
            <input
              type="radio"
              id="volunteer"
              name="usertype"
              value="volunteer"
              checked={formData.usertype === "volunteer"}
              onChange={handleChange}
            />
            <label htmlFor="volunteer">Volunteer</label>
          </div>

          <div className={styles.organization}>
            <input
              type="radio"
              id="organization"
              name="usertype"
              value="organization"
              checked={formData.usertype === "organization"}
              onChange={handleChange}
            />
            <label htmlFor="organization">Organization</label>
          </div>
        </div>

        <form className={styles.SignUpForm} onSubmit={handleSubmit}>
          <div className={styles.Inputs}>
            {/* Common fields */}
            <input
              type="text"
              name="name"
              placeholder="Enter your name"
              value={formData.name}
              onChange={handleChange}
              required
              className={styles.inputField}
            />
            <input
              type="email"
              name="email"
              placeholder="Enter your email"
              value={formData.email}
              onChange={handleChange}
              required
              className={styles.inputField}
            />
            <input
              type="text"
              name="phone"
              placeholder="Enter your phone number"
              value={formData.phone}
              onChange={handleChange}
              required
              className={styles.inputField}
            />
            {/* Conditionally render fields based on usertype */}
            {formData.usertype === "volunteer" ? (
              <>
                {/* Volunteer-specific fields */}
                <input
                  type="text"
                  name="nationality"
                  placeholder="Nationality"
                  value={formData.nationality}
                  onChange={handleChange}
                  className={styles.inputField}
                />
              </>
            ) : (
              <>
                {/* Organization-specific fields */}
                <input
                  type="text"
                  name="oidNumber"
                  placeholder="Organization ID Number"
                  value={formData.oidNumber}
                  onChange={handleChange}
                  className={styles.inputField}
                />
                <input
                  type="text"
                  name="website"
                  placeholder="Website"
                  value={formData.website}
                  onChange={handleChange}
                  className={styles.inputField}
                />
                <input
                  type="number"
                  name="noOfActiveUsers"
                  placeholder="Number of Active Users"
                  value={formData.noOfActiveUsers}
                  onChange={handleChange}
                  className={styles.inputField}
                />
                <input
              type="text"
              name="tagline"
              placeholder="Tagline"
              value={formData.tagline}
              onChange={handleChange}
              className={styles.inputField}
            />
                {/* Add other organization-specific fields */}
              </>
            )}
            {/* Common fields */}
            <input
              type="text"
              name="address"
              placeholder="Address"
              value={formData.address}
              onChange={handleChange}
              className={styles.inputField}
            />
            <input
              type="text"
              name="city"
              placeholder="City"
              value={formData.city}
              onChange={handleChange}
              className={styles.inputField}
            />
            {/* Social media fields */}
            <input
              type="text"
              name="facebookUrl"
              placeholder="Facebook URL"
              value={formData.facebookUrl}
              onChange={handleChange}
              className={styles.inputField}
            />
            <input
              type="text"
              name="igUrl"
              placeholder="Instagram URL"
              value={formData.igUrl}
              onChange={handleChange}
              className={styles.inputField}
            />
            <input
              type="text"
              name="xurl"
              placeholder="X (Twitter) URL"
              value={formData.xurl}
              onChange={handleChange}
              className={styles.inputField}
            />
            <input
              type="text"
              name="ticTokUrl"
              placeholder="TikTok URL"
              value={formData.ticTokUrl}
              onChange={handleChange}
              className={styles.inputField}
            />
            
            {/* Password and Confirm Password Fields */}
          <input
              type="password"
              name="password"
              placeholder="Enter your password"
              value={formData.password}
              onChange={handleChange}
              required
              className={styles.inputField}
            />
            <input
              type="password"
              name="confirmPassword"
              placeholder="Confirm your password"
              value={formData.confirmPassword}
              onChange={handleChange}
              required
              className={styles.inputField}
            />
          </div>
          <AuthenticationButton text="Sign up" />
        </form>

        {error && <p className={styles.Error}>{error}</p>}

        <div className={styles.SignupLabel}>
          <Label color="#fff" text="Already have an account?" /> &nbsp;
          <Link to="/login" style={{ textDecoration: "none" }}>
            <Label text="Login" color="#541A46" />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
