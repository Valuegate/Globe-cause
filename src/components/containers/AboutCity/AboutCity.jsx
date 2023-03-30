import { GoogleMap, Marker, useLoadScript } from "@react-google-maps/api";
import { useEffect, useMemo, useState } from "react";
import styles from "./styles.module.css";

import SecondaryTabNavigation from "../SecondaryTabNavigation/SecondaryTabNavigation";
import HorizontalLine from "../../elements/HorizontalLine/HorizontalLine";
import Label from "../../elements/Label/Label";
import RatingContainer from "../RatingContainer/RatingContainer";
import OrganizationContainer from "../OrganizationContainer/OrganizationContainer";
import ChatContainer from "../ChatContainer/ChatContainer";
import img from "../../../assets/myPhoto.JPG";
import InputContainer from "../InputContainer/InputContainer";
// import photos from "../../../Demo/Api/Photos";

const AboutCity = ({ ratings, description, photos, conditions }) => {
  ratings.conditions && console.log(Object.keys(ratings.conditions));
 

  const [tab, setTab] = useState("About");

  const [message, setMessage] = useState("");
  const [chatList, setChatList] = useState([]);

  const { isLoaded } = useLoadScript({
    googleMapsApiKey: "AIzaSyCICYAwY25HzDVW5daQPkxOSOKxuudJ_GE",
  });
  const center = useMemo(() => ({ lat: 38.736946, lng: -9.142685 }), []);

  useEffect(() => {
   
  }, []);

  const handleTabChange = (tab) => {
    setTab(tab);
  };

  const Content = () => {
    if (tab === "About") {
      return (
        <>
          <div className={styles.Map}>
            {isLoaded ? (
              <GoogleMap
                mapContainerStyle={{ width: "100%", height: "100%" }}
                zoom={10}
                center={center}
              >
                <Marker position={center} />
              </GoogleMap>
            ) : (
              <></>
            )}
          </div>
          <div className={styles.Heading}>
            <Label text="Rating" />
          </div>

          {ratings.conditions &&
            Object.keys(ratings?.conditions)?.map((rating, index) => {
              return (
                <RatingContainer
                  rating={ratings?.conditions[rating]}
                  title={rating}
                  key={index}
                />
              );
            })}
          {/* {ratings.connectivity &&
            Object.keys(ratings?.connectivity)?.map((rating, index) => {
              return (
                <RatingContainer
                  rating={ratings?.connectivity[rating]}
                  title={rating}
                  key={index}
                />
              );
            })} */}
          {ratings.living_cost &&
            Object.keys(ratings?.living_cost)?.map((rating, index) => {
              return (
                <RatingContainer
                  rating={ratings.living_cost[rating]}
                  title={rating}
                  key={index}
                />
              );
            })}
          {ratings.social_life &&
            Object.keys(ratings?.social_life)?.map((rating, index) => {
              return (
                <RatingContainer
                  rating={ratings?.social_life[rating]}
                  title={rating}
                  key={index}
                />
              );
            })}
          <div className={styles.Heading}>
            <Label text="Description" />
          </div>
          <div className={styles.Description}>{description}</div>
          <div className={styles.Heading}>
            <Label text="Photos" />
          </div>
          <div className={styles.ImageContainer}>
            {photos?.map((photo, i) => (
              <img src={photo} className={styles.Image} key={i} alt="" />
            ))}
          </div>
        </>
      );
    } else if (tab === "Organizations") {
      return (
        <div className={styles.Reviews}>
          <OrganizationContainer />
        </div>
      );
    } else if (tab === "Chat") {
      return (
        <div className={styles.Photos}>
          {chatList.map((message, i) => (
            <ChatContainer
              image={img}
              key={i + 1}
              username="Captain Michael"
              message={message}
            />
          ))}
          <div style={{ width: "100%" }}>
            <InputContainer
              setMessage={setMessage}
              setChatList={setChatList}
              chatList={chatList}
              message={message}
            />
          </div>
        </div>
      );
    }
  };

  return (
    <div className={styles.AboutCity}>
      <SecondaryTabNavigation onClick={handleTabChange} tab={tab} />
      <HorizontalLine />
      <Content />
    </div>
  );
};

export default AboutCity;
