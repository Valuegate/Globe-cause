import styles from "./styles.module.css";
// import organizations from "../../../Demo/Api/Organizations";

import { useState, useEffect } from "react";

import { collection, getDocs } from "firebase/firestore";
import { db } from "../../../firebase";

import {Link} from 'react-router-dom'

import OrganizationCard from "../../elements/OrganizationCard/OrganizationCard";

const OrganizationContainer = () => {
  const [organizations, setOrganization] = useState([]);
  const [orgFilter, setOrgFilter]=useState('Portugal');


  const fetchPost = async () =>{
    await getDocs(collection(db, `locations_${orgFilter.toLowerCase()}`)).then(
      (query)=>{
        const newData = query.docs.map((doc) =>({
          ...doc.data(),
          id: doc.id,
        }));
        setOrganization(newData);
      }
    )
  }

   useEffect(() => {
    fetchPost();
  }, []);

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
          name={organization.city}
          image={organization.main_image_link}
          key={organization.id}
          country={organization.city}
        />
        </Link>
      ))}
    </div>
  );
};

export default OrganizationContainer;
