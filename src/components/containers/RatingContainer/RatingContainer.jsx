import styles from "./styles.module.css";

import RatingIndicator from "../../elements/RatingIndicator/RatingIndicator";

const RatingContainer = ({ rating, title }) => {
  return (
    <div className={styles.RatingContainer}>
      <p>{title}</p>
      <RatingIndicator rating={rating} />
    </div>
  );
};

export default RatingContainer;
