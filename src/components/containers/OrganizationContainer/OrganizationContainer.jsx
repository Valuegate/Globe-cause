import styles from "./styles.module.css";
import organizations from "../../../Demo/Api/Organizations";

import {Link} from 'react-router-dom'

import OrganizationCard from "../../elements/OrganizationCard/OrganizationCard";

const OrganizationContainer = () => {
  return (
    <div className={styles.Organizations}>
      {organizations.map((organization,key) => (
          <Link
                to={`/organization/${organization.id}`}
                style={{ textDecoration: "none",display:'block' }}
                key={key}
                state={{ id: organization.id }}
              >
        <OrganizationCard
          name={organization.name}
          image={organization.image}
          key={organization.id}
          country={organization.country}
        />
        </Link>
      ))}
    </div>
  );
};

export default OrganizationContainer;
