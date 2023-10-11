import React from "react";
import { GoogleMap, MarkerF, useLoadScript } from "@react-google-maps/api";
import { useEffect, useMemo, useState } from "react";
import styles from "./styles.module.css";
import { db } from "../../../firebase";
import {
  query,
  collection,
  orderBy,
  onSnapshot,
  limit,
} from "firebase/firestore";

import SecondaryTabNavigation from "../SecondaryTabNavigation/SecondaryTabNavigation";
import HorizontalLine from "../../elements/HorizontalLine/HorizontalLine";
import Label from "../../elements/Label/Label";
import RatingContainer from "../RatingContainer/RatingContainer";
import CityOrganizationsContainer from "../CityOrganizationsContainer/CityOrganizationsContainer";

import { FiArrowRight, FiArrowLeft } from "react-icons/fi";

const AboutCity = ({
  ratings,
  description,
  photos,
  filter,
  ids,
  conditions,
  city,
  livingCost,
  socialLife,
  connectivity,
  coordinates,
}) => {
  const [tab, setTab] = useState("About");
  const [visibleButton, setVisibleButton] = useState(false);

  const [, setMessages] = useState([]);

  const { isLoaded } = useLoadScript({
    googleMapsApiKey: "AIzaSyCICYAwY25HzDVW5daQPkxOSOKxuudJ_GE",
  });
  const lat = coordinates?.latitude;
  const lng = coordinates?.longitude;
  const center = useMemo(
    () => ({
      lat: lat || 0,
      lng: lng || 0,
    }),
    [lat, lng]
  );

  useEffect(() => {
    const q = query(
      collection(db, `locations_${filter?.toLowerCase()}`, ids, "comments"),
      orderBy("createdAt"),
      limit(50)
    );
    const unsubscribe = onSnapshot(q, (QuerySnapshot) => {
      let message = [];
      QuerySnapshot.forEach((doc) => {
        message.push({ ...doc.data(), id: doc.id });
      });
      setMessages(message);
    });
    return () => unsubscribe;
  }, [filter, ids]);

  const handleTabChange = (tab) => {
    setTab(tab);
  };

  const pictureEnlarger = (e) => {
    console.log(e.target.src);
    const img = document.createElement("img");
    const overflow = document.createElement("div");
    img.classList.add("enlarged");
    overflow.style.width = "100%";
    overflow.style.height = "100%";
    overflow.style.position = "fixed";
    overflow.style.top = "0";
    overflow.style.left = "0";
    overflow.style.zIndex = "999";
    overflow.style.backgroundColor = "rgba(0,0,0,0.5)";
    img.src = e.target.src;
    img.style.width = "90%";
    img.style.height = "90%";
    img.style.objectFit = "cover";
    img.style.position = "fixed";
    img.style.top = "5%";
    img.style.left = "5%";
    img.style.zIndex = "1000";
    // img.style.backgroundColor = "rgba(0,0,0,0.5)";
    img.style.cursor = "pointer";
    setVisibleButton(true);
    overflow.onclick = () => {
      img.remove();
      overflow.remove();
      setVisibleButton(false);
    };
    // img.onclick = () => {
    //   img.remove();
    //   overflow.remove();
    // };
    document.body.appendChild(img);
    document.body.appendChild(overflow);
  };

  const NextPicture = () => {
    const img = document.querySelector(".enlarged");
    const src = img.src;
    const index = photos.indexOf(src);
    if (index === photos.length - 1) {
      img.src = photos[0];
    } else {
      img.src = photos[index + 1];
    }
  };

  const PreviousPicture = () => {
    const img = document.querySelector(".enlarged");
    const src = img.src;
    const index = photos.indexOf(src);
    if (index === 0) {
      img.src = photos[photos.length - 1];
    } else {
      img.src = photos[index - 1];
    }
  };

  const Content = () => {
    if (tab === "About") {
      return (
        <>
          <div className={styles.Map}>
            {isLoaded ? (
              <GoogleMap
                mapContainerStyle={{ width: "100%", height: "300px" }}
                zoom={10}
                center={center}
              >
                <MarkerF position={center} />
              </GoogleMap>
            ) : (
              <></>
            )}
          </div>
          <div className={styles.Heading}>
            <Label text="Description" />
          </div>
          <div className={styles.Description}>{description}</div>
          <div className={styles.Heading}>
            <Label text="Photos" />
          </div>
          <div className={styles.ImageContainer}>
            {photos?.map((photo, i) => (
              <img
                src={photo}
                className={styles.Image}
                key={i}
                alt=""
                onClick={pictureEnlarger}
              />
            ))}
            {visibleButton && (
              <div
                className={styles.ArrowContainer}
                style={{
                  zIndex: "5000",
                  position: "relative",
                  display: "flex",
                  justifyContent: "space-between",
                  width: "100%",
                  height: "100%",
                }}
              >
                <button
                  onClick={PreviousPicture}
                  style={{
                    zIndex: "5000",
                    position: "absolute",
                    left: "0",
                    top: "50%",
                  }}
                >
                  <FiArrowLeft className={styles.Arrow} size={"25px"} />
                </button>
                <button
                  onClick={NextPicture}
                  style={{
                    zIndex: "5000",
                    position: "absolute",
                    right: "0",
                    top: "50%",
                  }}
                >
                  <FiArrowRight className={styles.Arrow} size={"25px"} />
                </button>
              </div>
            )}
          </div>
          <div className={styles.Heading}>
            <Label text="Rating" fontSize={"1.4rem"} />
          </div>
          <div className={styles.Heading}>
            <Label text="Conditions" fontSize={"1.2rem"} />
          </div>
          {conditions &&
            Object.keys(conditions)?.map((rating, index) => {
              return (
                <RatingContainer
                  rating={conditions[rating]}
                  title={rating}
                  key={index}
                />
              );
            })}
          <div className={styles.Heading}>
            <Label text="Connectivity" fontSize={"1.2rem"} />
          </div>
          {connectivity &&
            Object.keys(connectivity)?.map((rating, index) => {
              return (
                <RatingContainer
                  rating={connectivity[rating]}
                  title={rating}
                  key={index}
                />
              );
            })}
          <div className={styles.Heading}>
            <Label text="Living Cost" fontSize={"1.2rem"} />
          </div>
          {livingCost &&
            Object.keys(livingCost)?.map((rating, index) => {
              return (
                <RatingContainer
                  rating={livingCost[rating]}
                  title={rating}
                  key={index}
                />
              );
            })}
          <div className={styles.Heading}>
            <Label text="Social Life" fontSize={"1.2rem"} />
          </div>
          {socialLife &&
            Object.keys(socialLife)?.map((rating, index) => {
              return (
                <RatingContainer
                  rating={socialLife[rating]}
                  title={rating}
                  key={index}
                />
              );
            })}
        </>
      );
    } else if (tab === "Organizations") {
      return (
        <div className={styles.Reviews}>
          {/* <OrganizationContainer /> */}
          <CityOrganizationsContainer filter={filter} city={city} />
        </div>
      );
    }
    // else if (tab === "Chat") {
    //   return (
    //     <div className={styles.Photos}>
    //       <span ref={scroll}></span>
    //       {messages?.map((message) => (
    //         <ChatContainer key={message.id} message={message} />
    //       ))}

    //       <div style={{ width: "100%" }}>
    //         <InputContainer filter={filter} ids={ids} scroll={scroll} />
    //       </div>
    //     </div>
    //   );
    // }
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
