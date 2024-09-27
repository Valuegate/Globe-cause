import styles from "./styles.module.css";
import React, { useState, useContext, useEffect, useCallback } from "react";
import imge from "../../../assets/Group 11966.png";
import { useUserAuth } from "../../../hooks/auth/UserAuthContext";
import { UserAthorizationContext } from "../../../hooks/authorization/UserAuthorizationContext";
import axios from "axios"; // Import axios for HTTP requests

const ProfilePicture = ({ alt, placeholder }) => {
  const [disabled, setDisabled] = useState(true);
  const [image, setImage] = useState(); // Holds the preview image
  const [imageAsFile, setImageAsFile] = useState(""); // Holds the uploaded file
  const [imageAsUrl, setImageAsUrl] = useState(""); // Holds the uploaded image URL from the server
  const [uploadError, setUploadError] = useState(""); // Error state for upload errors

  const { user } = useUserAuth();
  const { token } = useContext(UserAthorizationContext); // Ensure the token is fetched from the context

  // Function to fetch the profile data (e.g., profile picture)
  const fetchUserProfile = useCallback(async () => {
    try {
      const response = await axios.get("https://scoutflair.top:8081/api/v1/profile/getProfile", {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      const profileImageUrl = response.data.data.obj.profile_image_url; // Adjust based on the API response structure
      if (profileImageUrl) {
        setImageAsUrl(profileImageUrl); // Set the existing profile image
      }
    } catch (error) {
      console.error("Error fetching profile data:", error);
    }
  }, [token]); // Add 'token' as a dependency to ensure fetchUserProfile updates when the token changes

  // Fetch the profile image when the component mounts
  useEffect(() => {
    if (user && token) {
      fetchUserProfile();
    }
  }, [user, token, fetchUserProfile]);

  // Function to handle file input changes
  const handleImageAsFile = (e) => {
    if (e.target.files && e.target.files[0]) {
      setImage(URL.createObjectURL(e.target.files[0]));
    }
    const image = e.target.files[0];
    setImageAsFile(image);
    setDisabled(false);
  };

  // Function to handle image upload
  const handleUpload = async (e) => {
    e.preventDefault();

    if (!imageAsFile) {
      alert(`Please select an image file.`);
      return;
    }

    const formData = new FormData();
    formData.append("file", imageAsFile); // Append the file to FormData
    formData.append("uid", user.uid); // Append the user ID or any additional data needed

    try {
      const response = await axios.post(
        "https://scoutflair.top:8081/globeCause/v1/globeCause/v1/file/picture/upload",
        formData,
        {
          headers: {
            "Content-Type": "multipart/form-data",
            Authorization: `Bearer ${token}`,
          },
        }
      );

      // Assuming your API returns the URL of the uploaded image
      const uploadedImageUrl = response.data.url;

      setImageAsUrl(uploadedImageUrl);
      await createProfile(user.uid, uploadedImageUrl); // Call the profile update function
      alert("Image uploaded successfully");
    } catch (error) {
      console.error("Error uploading image:", error);
      setUploadError("Failed to upload image. Please try again.");
    }
  };

  // Function to update the profile with the new profile image URL
  const createProfile = async (id, image) => {
    try {
      await axios.put(`https://api-endpoint/profile/${id}`, {
        profile_image_url: image,
      });
      console.log("Successfully updated profile image");
    } catch (error) {
      console.error("Error updating profile image:", error);
    }
  };

  return (
    <form>
      <label htmlFor="inputTag" style={{ cursor: "pointer" }}>
        <div className={styles.ProfilePicture}>
          <img
            src={image || imageAsUrl || imge} // Prioritize the preview image, then the uploaded image URL, and finally the default image
            alt={alt}
          />
          <div className={styles.SelectImage}>
            <p>Select Image</p>
          </div>
        </div>
        <input
          id="inputTag"
          accept="image/*"
          style={{ display: "none" }}
          type="file"
          placeholder={placeholder}
          onChange={handleImageAsFile}
        />
      </label>
      <button
        className={styles.UploadButton}
        onClick={handleUpload}
        disabled={disabled}
      >
        Upload
      </button>
      {uploadError && <p className={styles.Error}>{uploadError}</p>}
    </form>
  );
};

export default ProfilePicture;
