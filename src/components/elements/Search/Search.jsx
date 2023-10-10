import styles from "./styles.module.css";
import React, { useState, useEffect } from "react";

const Search = ({ setFilter }) => {
  const [search, setSearch] = useState("");

  useEffect(() => {
    setFilter(search);
  }, [search, setFilter]);


  return (
    <div className={styles.Search}>
      <input
        type="text"
        placeholder="Search"
        onChange={(e) => setSearch(e.target.value)}
        value = {search}
      />
    </div>
  );
};

export default Search;
