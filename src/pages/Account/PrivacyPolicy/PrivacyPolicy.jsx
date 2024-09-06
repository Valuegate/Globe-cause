// import React from "react";

// import styles from "./styles.module.css";
// import BackButton from "../../../components/elements/BackButton/BackButton";

// import { useContext } from "react";
// import { WebsiteThemeContext } from "../../../hooks/theme/WebsiteThemeContext";

// const Policy = ({ title, content }) => {
//   const { theme } = useContext(WebsiteThemeContext);
//   return (
//     <div style={{ marginTop: "1rem" }}>
//       <p
//         style={
//           theme === "dark" || theme === "default"
//             ? { color: "#fff", fontWeight: "700", fontSize: "20px" }
//             : { color: "rgb(25, 32, 43)", fontWeight: "700", fontSize: "20px" }
//         }
//       >
//         {title}
//       </p>
//       <p
//         style={
//           theme === "dark" || theme === "default"
//             ? {
//                 color: "#fff",
//                 fontWeight: "400",
//                 marginTop: "1rem",
//                 lineHeight: "2rem",
//                 fontSize: "14px",
//               }
//             : {
//                 color: "rgb(25, 32, 43)",
//                 fontWeight: "400",
//                 marginTop: "1rem",
//                 lineHeight: "2rem",
//                 fontSize: "14px",
//               }
//         }
//       >
//         {content}
//       </p>
//     </div>
//   );
// };

// const PrivacyPolicy = () => {
//   const { theme } = useContext(WebsiteThemeContext);
//   return (
//     <div className={styles.Container}>
//       <div className={styles.HeaderContainer}>
//         <BackButton />
//         <p
//           style={
//             theme === "dark" || theme === "default"
//               ? {
//                   color: "#fff",
//                   fontWeight: "700",
//                   fontSize: "20px",
//                   textAlign: "center",
//                 }
//               : {
//                   color: "rgb(25, 32, 43)",
//                   fontWeight: "700",
//                   fontSize: "20px",
//                   textAlign: "center",
//                 }
//           }
//         >
//           Privacy policy
//         </p>
//       </div>
//       <Policy
//         title="1. Introduction"
//         content={`Welcome to SIVolunteering ("we," "us," or "our"). This Privacy Policy is designed to help you understand how we collect, use, and safeguard your personal information when you use our mobile application and related services (collectively, the "App"). By accessing or using the App, you consent to the practices described in this Privacy Policy.`}
//       />
//       <Policy title="2. Information We Collect" />
//       <Policy
//         title="2.1. Information You Provide"
//         content="When you use our App, we may collect information that you voluntarily provide, including but not limited to:Contact information (e.g., name, email address).User-generated content (e.g., comments, reviews, or messages).Payment information (e.g., credit card details) if applicable."
//       />

//       <Policy
//         title="2.2. Automatically Collected Information"
//         content="We may automatically collect certain information about your device and usage of the App, including:

// Device information (e.g., device type, operating system, and hardware information).
// Usage data (e.g., app usage patterns, interactions, and preferences).
// Location data, if you grant us permission to access your location."
//       />

//       <Policy
//         title="3. How We Use Your Information"
//         content="We may use your personal information for various purposes, including:
// To provide and improve our services.
// To personalize your experience within the App.
// To process transactions and provide customer support.
// To send you updates, promotions, and marketing communications (with your consent where required by law).
// To comply with legal obligations."
//       />

//       <Policy
//         title="4. Data Sharing"
//         content="We may share your personal information with third parties under the following circumstances:

// With service providers and partners who assist us in delivering our services.
// When required by law, legal process, or government request.
// In connection with a merger, acquisition, or sale of all or a portion of our assets (your information will be subject to the privacy policy of the acquiring entity)."
//       />

//       <Policy
//         title="5. Your Choices"
//         content="You may have various rights regarding your personal information, including:

// Access: You can request access to the personal information we hold about you.
// Correction: You can request corrections to inaccurate or incomplete personal information.
// Deletion: You can request the deletion of your personal information under certain circumstances.
// Opt-Out: You can opt out of marketing communications by following the instructions provided in those communications."
//       />

//       <Policy
//         title="6. Security"
//         content="We take reasonable measures to protect your personal information from unauthorized access, disclosure, alteration, or destruction. However, please be aware that no method of transmission over the internet or electronic storage is completely secure."
//       />
//       <Policy
//         title="7. Changes to this Privacy Policy"
//         content="We may update this Privacy Policy from time to time. We will notify you of any material changes by posting the updated Privacy Policy within the App. Your continued use of the App after such changes will constitute your consent to the updated Privacy Policy."
//       />

//       <Policy
//         title="8. Contact Us"
//         content="If you have any questions, concerns, or requests related to this Privacy Policy or your personal information, please contact us at info@sivolunteering.com"
//       />
//     </div>
//   );
// };

// export default PrivacyPolicy;
