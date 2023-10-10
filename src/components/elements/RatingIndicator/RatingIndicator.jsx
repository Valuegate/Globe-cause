import styles from "./styles.module.css";
import React, { useEffect, useState } from "react";

const RatingIndicator = ({ rating }) => {
  const [ratingValue, setRatingValue] = useState("");
  const [bg, setBg] = useState("");

  useEffect(() => {
    const ratingPercentage = (rating / 5) * 100;
    setRatingValue(ratingPercentage);

    if (ratingPercentage >= 80) {
      setBg("#00B87C");
    } else if (ratingPercentage >= 60) {
      setBg("#FFC107");
    } else {
      setBg("#FF0000");
    }
  }, [rating]);

  return (
    <div className={styles.RatingIndicator}>
      <div
        className={styles.Rating}
        style={{ width: `${ratingValue}%`, backgroundColor: bg }}
      >
        <p>{rating}/5</p>
      </div>
    </div>
  );
};

export default RatingIndicator;
