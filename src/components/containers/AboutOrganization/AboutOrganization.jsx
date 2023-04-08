import { GoogleMap, Marker, useLoadScript } from "@react-google-maps/api";
import {  useMemo, useState } from "react";
import styles from "./styles.module.css";

import SecondaryTabNavigation from "../SecondaryTabNavigation/OrganizationSecondaryTabNavigation";
import HorizontalLine from "../../elements/HorizontalLine/HorizontalLine";
import ChatContainer from "../ChatContainer/ChatContainer";
import img from '../../../assets/myPhoto.JPG'
import imgmap from '../../../assets/IMAGE.png'
import msg from '../../../assets/msg.png'
import wb from '../../../assets/wb.png'
import twit from '../../../assets/twit.png'
import ph from '../../../assets/ph.png'
import fb from '../../../assets/f.png'
import link from '../../../assets/link.png'
import loc from '../../../assets/loc.png'
import photos from "../../../Demo/Api/Photos";
import InputContainer from "../InputContainer/InputContainer";

const AboutOrganization = ({ image,name,country,description, email, facebook, web, twitter, phone, linkedin }) => {
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

  const Content = ({email, facebook, web, twitter, phone, linkedin}) => {
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
              <div className={styles.Link} >
                <a href={email} target='_blank' > <img src={msg} alt="" /> </a>
                {/* <a href={facebook} target='_blank' > <img src={fb} alt="" /> </a> */}
                <a href={web} target='_blank'> <img src={wb} alt="" /> </a>
                <a href={twitter} target='_blank'> <img src={twit} alt="" /> </a>
                <a tel={phone} target='_blank'> <img src={ph} alt="" /> </a>
                <a href={linkedin} target='_blank'> <img src={link} alt="" /> </a>
                {/* <a> <img src={loc} alt="" /> </a> */}

              </div>
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
            photos.map((message,i)=>(
            <img src={message.image} className={styles.Image} key={i+1} alt=''/>
            ))
          }
          
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
      <Content email={email} facebook={facebook} web={web} twitter={twitter} phone={phone} linkedin={linkedin} />
    </div>
  );
};

export default AboutOrganization;
