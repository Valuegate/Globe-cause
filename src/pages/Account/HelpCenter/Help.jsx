import React, { useState } from "react";
import styles from "./styles.module.css";
import BackButton from "../../../components/elements/BackButton/BackButton";
import InputLabel from "../../../components/elements/InputLabel/InputLabel";
import axios from "axios"; // Import axios for HTTP requests

const Help = () => {
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");
  const [email, setEmail] = useState(""); // State for email
  const [firstName, setFirstName] = useState(""); // State for first name
  const [lastName, setLastName] = useState(""); // State for last name
  const [phone, setPhone] = useState(""); // State for phone number
  const [feedbackMessage, setFeedbackMessage] = useState(""); // State for feedback messages

  const handleSendFeedback = async () => {
    const messageDto = {
      email,
      firstName,
      lastName,
      message,
      phone,
    };

    try {
      const response = await axios.post(
        "https://scoutflair.top:8081/globeCause/v1/signup/sendSupportMail",
        messageDto,
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );

      if (response.status === 202) {
        // Show alert and navigate back to home
        window.alert("Feedback sent successfully!");
        window.location.href = "/home";
      }
    } catch (error) {
      console.error("Error sending feedback:", error);
      setFeedbackMessage("Failed to send feedback. Please try again.");
    }
  };

  return (
    <div className={styles.Container}>
      <div className={styles.HeaderContainer}>
        <BackButton color="#000" to="/home" />
        <p style={{ fontWeight: "700", textAlign: "center", fontSize: "20px", color: "#1F1246" }}>
          Help Center
        </p>
      </div>
      <p style={{ color: "#1F1246" }}>Contact us</p>
      <InputLabel label="Subject" placeholder={"Subject"} value={subject} onChange={(e) => setSubject(e.target.value)} />
      <InputLabel label="Email" placeholder={"Your Email"} value={email} onChange={(e) => setEmail(e.target.value)} />
      <InputLabel label="First Name" placeholder={"Your First Name"} value={firstName} onChange={(e) => setFirstName(e.target.value)} />
      <InputLabel label="Last Name" placeholder={"Your Last Name"} value={lastName} onChange={(e) => setLastName(e.target.value)} />
      <InputLabel label="Phone" placeholder={"Your Phone Number"} value={phone} onChange={(e) => setPhone(e.target.value)} />
      <InputLabel label="Message" placeholder={"Message"} value={message} onChange={(e) => setMessage(e.target.value)} />
      
      <div className={styles.ButtonDiv}>
        <button className={styles.Button} onClick={handleSendFeedback}>Send Feedback</button>
      </div>
      
      {feedbackMessage && <p className={styles.FeedbackMessage}>{feedbackMessage}</p>}
    </div>
  );
};

export default Help;
