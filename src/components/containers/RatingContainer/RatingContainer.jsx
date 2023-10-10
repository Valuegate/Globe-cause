import React from "react";
import styles from "./styles.module.css";

import RatingIndicator from "../../elements/RatingIndicator/RatingIndicator";

const RatingContainer = ({ rating, title }) => {
  const ignoreUnderScore = () => title.replace(/_/g, " ");
  const makeFirstLetterUpperCase = () => {
    const firstLetter = ignoreUnderScore().charAt(0).toUpperCase();
    const restOfTheString = ignoreUnderScore().slice(1);
    return firstLetter + restOfTheString;
  };
  return (
    <div className={styles.RatingContainer}>
      <p>{makeFirstLetterUpperCase(ignoreUnderScore(title))}</p>
      <RatingIndicator rating={rating} />
    </div>
  );
};

export default RatingContainer;
