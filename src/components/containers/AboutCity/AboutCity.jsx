import { GoogleMap, Marker, useLoadScript } from "@react-google-maps/api";
import { useEffect, useMemo, useState } from "react";
import styles from "./styles.module.css";

import SecondaryTabNavigation from "../SecondaryTabNavigation/SecondaryTabNavigation";
import HorizontalLine from "../../elements/HorizontalLine/HorizontalLine";
import Label from "../../elements/Label/Label";
import RatingContainer from "../RatingContainer/RatingContainer";
import OrganizationContainer from "../OrganizationContainer/OrganizationContainer";
import ChatContainer from "../ChatContainer/ChatContainer";
import img from '../../../assets/myPhoto.JPG'
import InputContainer from "../InputContainer/InputContainer";
import photos from "../../../Demo/Api/Photos";

const AboutCity = ({ ratings,description }) => {
  const [ratingsValue, setRatingValue] = useState([]);
  const [tab, setTab] = useState("About");

  const [message, setMessage] = useState('');
    const [chatList, setChatList] = useState([]);

  const { isLoaded } = useLoadScript({
    googleMapsApiKey: "AIzaSyCICYAwY25HzDVW5daQPkxOSOKxuudJ_GE",
  });
  const center = useMemo(() => ({ lat: 18.52043, lng: 73.856743 }), []);

  useEffect(() => {
    for (let rating in ratings) {
      setRatingValue((prev) => [
        ...prev,
        { rating: ratings[rating], title: rating },
      ]);
    }
  }, [ratings]);

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
          <div className={styles.Rating}>
            <Label text="Rating" />
          </div>
          {ratingsValue.map((rating, index) => {
            return (
              <RatingContainer
                rating={rating.rating}
                title={rating.title}
                key={index}
              />
            );
          })}
           <div style={{padding:'1rem'}}>
            <p style={{fontWeight:'700'}} >Description</p>
            <p style={{fontWeight:'400',fontSize:'14px'}}>{description}</p>
          </div>
          <div className={styles.ImageContainer} >
            <p style={{fontWeight:'700'}} >Photos</p>
              {
            photos.map((message,i)=>(
            <img src={message.image} className={styles.Image} key={i+1} alt=''/>
            ))
          }
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
          {
            chatList.map((message,i)=>(
<ChatContainer image={img} key={i+1} username='Captain Michael' message={message}/>
            ))
          }
          
          <InputContainer setMessage={setMessage} setChatList={setChatList} chatList={chatList} message={message} />
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
