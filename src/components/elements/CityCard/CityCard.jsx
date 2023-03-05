import styles from "./styles.module.css";

const CityCard = ({ city }) => {
  return <div className={styles.CityCard}>
        <div className={styles.CityCardImage}>
            <img src={city.image} alt={city.name} />
            <div className={styles.CityCardImageOverlay}>
                <h3>{city.name}</h3>
            </div>
        </div>
  </div>;
};

export default CityCard;
