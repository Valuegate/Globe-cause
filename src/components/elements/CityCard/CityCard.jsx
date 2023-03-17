import styles from "./styles.module.css";

const CityCard = ({ city }) => {
  return (
    <div className={styles.CityCard}>
      <div className={styles.CityCardImage}>
        <img src={city.main_image_link} alt={city.city} />
        <div className={styles.CityCardImageOverlay}>
          <h3>{city.city}</h3>
        </div>
      </div>
    </div>
  );
};

export default CityCard;
