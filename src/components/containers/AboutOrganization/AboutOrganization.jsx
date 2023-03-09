import { GoogleMap, Marker, useLoadScript } from "@react-google-maps/api";
import {  useMemo, useState } from "react";
import styles from "./styles.module.css";

import SecondaryTabNavigation from "../SecondaryTabNavigation/SecondaryTabNavigation";
import HorizontalLine from "../../elements/HorizontalLine/HorizontalLine";
import ChatContainer from "../ChatContainer/ChatContainer";
import img from '../../../assets/myPhoto.JPG'
import imgmap from '../../../assets/IMAGE.png'
import InputContainer from "../InputContainer/InputContainer";

const AboutOrganization = ({ image,name,country,description }) => {
  const [tab, setTab] = useState("About");

  const [message, setMessage] = useState('');
    const [chatList, setChatList] = useState(['Lorem Iposem Lorem IposemLorem IposemLorem IposemLorem IposemLorem IposemLorem Iposem',]);

  const { isLoaded } = useLoadScript({
    googleMapsApiKey: "AIzaSyCICYAwY25HzDVW5daQPkxOSOKxuudJ_GE",
  });
  const center = useMemo(() => ({ lat: 18.52043, lng: 73.856743 }), []);


  const handleTabChange = (tab) => {
    setTab(tab);
  };

  const Content = () => {
    if (tab === "About") {
      return (
        <div className={styles.AboutContentContainer}>
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
              <>
              <img style={{width:'100%',height:'100%'}} src={imgmap} alt=''/>
              </>
            )}
          </div>
          <div>
            <p style={{fontWeight:'700'}} >Short description</p>
            <p style={{fontWeight:'400',fontSize:'14px'}}>{description}</p>
          </div>
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
    } else if (tab === "Photos") {
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
        <div className={styles.Container}>
            <img src={image} alt=''/>
            <div className={styles.Stack} >
                <p>{name}</p>
                <p>{country} &nbsp; {country}</p>
            </div>
            
        </div>
      <SecondaryTabNavigation onClick={handleTabChange} tab={tab} />
      <HorizontalLine />
      <Content />
    </div>
  );
};

export default AboutOrganization;
