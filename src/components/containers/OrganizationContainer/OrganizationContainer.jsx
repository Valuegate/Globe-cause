// import styles from "./styles.module.css";

// import React, { useCallback, useEffect, useState } from "react";

// import { Link } from "react-router-dom";

// import { collection, getDocs } from "firebase/firestore";
// import { db } from "../../../firebase";

// import OrganizationCard from "../../elements/OrganizationCard/OrganizationCard";
// import TabNavigation from "../TabNavigation/TabNavigation";

// const OrganizationContainer = ({ filter }) => {
//   const [organizationFilter, setOrganizationFilter] = useState("Portugal");
//   const [organizations, setOrganizations] = useState([]);

//   const truncate = (str, n) => {
//     return str?.length > n ? str.substr(0, n - 1) + "..." : str;
//   };

//   const searchOrganizations = (organization) => {
//     if (organization === "") {
//       return organizations.sort((a, b) => a - b);
//     }
//     return organizations.filter((organizationItem) => {
//       const cityName = organizationItem.name?.toLowerCase();
//       return cityName?.includes(organization.toLowerCase())
//         ? organizationItem
//         : null;
//     });
//   };

//   const fetchPost = useCallback(async (country) => {
//     const querySnapshot = await getDocs(
//       collection(db, `organizations_${country.toLowerCase()}`)
//     );
//     const newData = querySnapshot.docs.map((doc) => ({
//       ...doc.data(),
//       id: doc.id,
//     }));
//     setOrganizations(newData);
//     console.log(organizations);
//   }, [organizations]);

//   useEffect(() => {
//     fetchPost(organizationFilter);
//   }, [fetchPost, organizationFilter]);

//   const NavigationActive = (country) => {
//     setOrganizationFilter(country);
//     fetchPost(country);
//   };

//   return (
//     <div className={styles.Organizations}>
//       <TabNavigation click={NavigationActive} cityFilter={organizationFilter} />
//       <div className={styles.OrganizationsContainer}>
//         {searchOrganizations(filter)
//           .sort()
//           .map((organization, key) => (
//             <Link
//               to={`/organization/${organization.id}`}
//               style={{ textDecoration: "none", display: "block" }}
//               key={key}
//               state={{ id: organization.id, filter: organizationFilter }}
//             >
//               <OrganizationCard
//                 name={truncate(organization.name, 20)}
//                 image={organization.logo_link}
//                 key={organization.id}
//                 country={organization.city}
//               />
//             </Link>
//           ))}
//       </div>
//     </div>
//   );
// };

// export default OrganizationContainer;
