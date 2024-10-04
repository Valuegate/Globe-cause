// import React, { useState, useEffect } from "react";
// import { useSearchParams, Link } from "react-router-dom";
// import styles from "./styles.module.css";
// import ngoData from "../../../data/ngoData";
// import TabNavigation from "../../containers/TabNavigation/TabNavigation";

// const NgoList = ({ filter }) => {
//   const [stateFilter, setStateFilter] = useState("Lagos");
//   const [ngos, setNgos] = useState([]);
//   const [loading, setLoading] = useState(false);
//   const [searchParams, setSearchParams] = useSearchParams();
//   let getfilter = searchParams.get("filter");

//   useEffect(() => {
//     setStateFilter(getfilter || "Lagos");
//     fetchNgos(getfilter || "Lagos");
//   }, [getfilter]);

//   const searchNgos = (ngo) => {
//     if (!ngo) return ngos;
//     return ngos.filter((ngoItem) =>
//       ngoItem.name?.toLowerCase().includes(ngo.toLowerCase())
//     );
//   };

//   const fetchNgos = async (state) => {
//     try {
//       const filteredNgos = ngoData[state] || [];
//       setNgos(filteredNgos);
//     } catch (error) {
//       console.error("Error fetching NGOs:", error);
//       setNgos([]);
//     } finally {
//       setLoading(true);
//     }
//   };

//   const NavigationActive = (state) => {
//     setStateFilter(state);
//     fetchNgos(state);
//     setSearchParams({ filter: state });
//   };

//   return (
//     <div className={styles.NgoList}>
//       <TabNavigation click={NavigationActive} ngoFilter={stateFilter} />
//       <div className={styles.NgoListContainer}>
//         {loading ? (
//           searchNgos(filter).sort().map((ngo, key) => (
//             <Link
//               to={`/ngos/${stateFilter}/${ngo.id}`} // Adjusted the path here
//               style={{ textDecoration: "none" }}
//               key={key}
//             >
//               <div className={styles.NGOCard}>
//                 <h3>{ngo.name}</h3>
//               </div>
//             </Link>
//           ))
//         ) : (
//           <p>Loading NGOs...</p>
//         )}
//       </div>
//     </div>
//   );
// };

// export default NgoList;

// import React, { useState, useEffect } from "react";
// import { useSearchParams, Link } from "react-router-dom";
// import axios from "axios"; // Import axios
// import styles from "./styles.module.css";
// import TabNavigation from "../../containers/TabNavigation/TabNavigation";

// const NgoList = ({ filter }) => {
//   const [stateFilter, setStateFilter] = useState("Lagos");
//   const [ngos, setNgos] = useState([]);
//   const [loading, setLoading] = useState(false);
//   const [error, setError] = useState(null); // State to handle errors
//   const [searchParams, setSearchParams] = useSearchParams();
//   let getfilter = searchParams.get("filter");

//   useEffect(() => {
//     setStateFilter(getfilter || "Lagos");
//     fetchNgos(getfilter || "Lagos");
//   }, [getfilter]);

//   const searchNgos = (ngo) => {
//     if (!ngo) return ngos;
//     return ngos.filter((ngoItem) =>
//       ngoItem.name?.toLowerCase().includes(ngo.toLowerCase())
//     );
//   };

//   // Fetch NGOs from the API
//   const fetchNgos = async (state) => {
//     setLoading(true);
//     setError(null);

//     try {
//       const token = localStorage.getItem("token"); // Assuming token is stored in localStorage

//       if (!token) {
//         throw new Error("User is not authenticated");
//       }

//       // Fetch data from the API using axios
//       const response = await axios.get("https://scoutflair.top:8081/api/v1/profile/organizations", {
//         params: {
//           city: state, // Assuming you want to filter by city
//           limit: 10,   // You can adjust the limit as needed
//           offset: 0,   // Set offset for pagination
//         },
//         headers: {
//           Authorization: `Bearer ${token}`, // Pass the token in the Authorization header
//         },
//       });

//       const ngoData = response.data.content || []; // Assuming content holds the array of NGOs
//       setNgos(ngoData);
//     } catch (error) {
//       console.error("Error fetching NGOs:", error);
//       setError("Failed to fetch NGOs. Please try again later.");
//       setNgos([]);
//     } finally {
//       setLoading(false);
//     }
//   };

//   const NavigationActive = (state) => {
//     setStateFilter(state);
//     fetchNgos(state);
//     setSearchParams({ filter: state });
//   };

//   return (
//     <div className={styles.NgoList}>
//       <TabNavigation click={NavigationActive} ngoFilter={stateFilter} />
//       <div className={styles.NgoListContainer}>
//         {loading ? (
//           <p>Loading NGOs...</p>
//         ) : error ? (
//           <p>{error}</p>
//         ) : ngos.length > 0 ? (
//           searchNgos(filter).sort().map((ngo, key) => (
//             <Link
//               to={`/ngos/${stateFilter}/${ngo.id}`} // Adjusted the path here
//               style={{ textDecoration: "none" }}
//               key={key}
//             >
//               <div className={styles.NGOCard}>
//                 <h3>{ngo.name}</h3>
//               </div>
//             </Link>
//           ))
//         ) : (
//           <p className={styles.Paragraph}>No NGOs found for {stateFilter}</p>
//         )}
//       </div>
//     </div>
//   );
// };

// export default NgoList;

import React, { useState, useEffect } from "react";
import { useSearchParams, Link } from "react-router-dom";
import axios from "axios";
import styles from "./styles.module.css";
import TabNavigation from "../../containers/TabNavigation/TabNavigation";

const NgoList = ({ filter }) => {
  const [stateFilter, setStateFilter] = useState("Lagos");
  const [ngos, setNgos] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [searchParams, setSearchParams] = useSearchParams();
  let getfilter = searchParams.get("filter");

  useEffect(() => {
    setStateFilter(getfilter || "Lagos");
    fetchNgos(getfilter || "Lagos");
  }, [getfilter]);

  const searchNgos = (ngo) => {
    if (!ngo) return ngos;
    return ngos.filter((ngoItem) =>
      ngoItem.name?.toLowerCase().includes(ngo.toLowerCase())
    );
  };

  // Fetch NGOs from the API
  const fetchNgos = async (state) => {
    setLoading(true);
    setError(null);

    try {
      const token = localStorage.getItem("token");

      if (!token) {
        throw new Error("User is not authenticated");
      }

      const response = await axios.get(
        "https://scoutflair.top:8081/api/v1/profile/organizations",
        {
          params: {
            city: state,
            limit: 10,
            offset: 0,
          },
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      const ngoData = response.data.content || [];
      setNgos(ngoData);
    } catch (error) {
      console.error("Error fetching NGOs:", error);
      setError("Failed to fetch NGOs. Please try again later.");
      setNgos([]);
    } finally {
      setLoading(false);
    }
  };

  const NavigationActive = (state) => {
    setStateFilter(state);
    fetchNgos(state);
    setSearchParams({ filter: state });
  };

  return (
    <div className={styles.NgoList}>
      <TabNavigation click={NavigationActive} ngoFilter={stateFilter} />
      <div className={styles.NgoListContainer}>
        {loading ? (
          <p>Loading NGOs...</p>
        ) : error ? (
          <p>{error}</p>
        ) : ngos.length > 0 ? (
          searchNgos(filter)
            .sort()
            .map((ngo, key) => (
              <Link
                to={`/ngos/${stateFilter}/${ngo.id}`}
                style={{ textDecoration: "none" }}
                key={key}
              >
                <div
                  className={styles.NGOCard}
                  style={{
                    backgroundImage: ngo.imageUrl
                      ? `url(${ngo.imageUrl})`
                      : "none",
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                  }}
                >
                  <h3 className={styles.ngoName}>{ngo.name}</h3>
                </div>
              </Link>
            ))
        ) : (
          <p className={styles.Paragraph}>No NGOs found for {stateFilter}</p>
        )}
      </div>
    </div>
  );
};

export default NgoList;
