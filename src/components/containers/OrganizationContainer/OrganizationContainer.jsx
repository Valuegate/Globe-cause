import styles from "./styles.module.css";
import organizations from "../../../Demo/Api/Organizations";

import OrganizationCard from "../../elements/OrganizationCard/OrganizationCard";

const OrganizationContainer = () => {
  return (
    <div className={styles.Organizations}>
      {organizations.map((organization) => (
        <OrganizationCard
          name={organization.name}
          image={organization.image}
          key={organization.id}
          country={organization.country}
        />
      ))}
    </div>
  );
};

export default OrganizationContainer;
