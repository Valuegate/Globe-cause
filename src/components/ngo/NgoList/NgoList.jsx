import React, { useState, useEffect } from "react";
import { useSearchParams, Link } from "react-router-dom";
import styles from "./styles.module.css";
import ngoData from "../../../data/ngoData";
import TabNavigation from "../../containers/TabNavigation/TabNavigation";

const NgoList = ({ filter }) => {
  const [stateFilter, setStateFilter] = useState("Lagos");
  const [ngos, setNgos] = useState([]);
  const [loading, setLoading] = useState(false);
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

  const fetchNgos = async (state) => {
    try {
      const filteredNgos = ngoData[state] || [];
      setNgos(filteredNgos);
    } catch (error) {
      console.error("Error fetching NGOs:", error);
      setNgos([]);
    } finally {
      setLoading(true);
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
          searchNgos(filter).sort().map((ngo, key) => (
            <Link
              to={`/ngos/${stateFilter}/${ngo.id}`} // Adjusted the path here
              style={{ textDecoration: "none" }}
              key={key}
            >
              <div className={styles.NGOCard}>
                <h3>{ngo.name}</h3>
              </div>
            </Link>
          ))
        ) : (
          <p>Loading NGOs...</p>
        )}
      </div>
    </div>
  );
};

export default NgoList;
