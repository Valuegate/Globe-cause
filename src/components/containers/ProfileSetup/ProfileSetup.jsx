import React, {useState} from 'react'

import styles from "./styles.module.css";

 import ProfileSetup1 from './ProfileSetup1'; 
 import ProfileSetup2 from './ProfileSetup2'; 
 import ProfileSetup3 from './ProfileSetup3'; 
 import ProfileSetup4 from './ProfileSetup4';
import AuthenticationButton from "../../../components/elements/AuthenticationButton/AuthenticationButton";


const ProfileSetup = () => {
    const [page, setPage] = useState(0);

    const conditionalComponent = () => {
    switch (page) {
      case 0:
        return <ProfileSetup1/>;
      case 1:
        return <ProfileSetup2 />;
       case 2:
         return <ProfileSetup3/>;
       case 3:
         return <ProfileSetup4/>;
       default:
         return <ProfileSetup1/>;
    }
  }; 

  const handleSubmit =(e)=>{
    e.preventDefault();
    console.log(page)
    
    setPage(page + 1);
  }
  return (
    <div className={styles.ProfileContainer} >
         <p className={styles.Text} style={{fontSize:'1.2rem',textAlign:'left'}} >Profile Setup</p>
         <div style={{display:'block',marginBottom:'1rem',height:'5rem',margin:'auto'}} >
            <div className={styles.Line} ></div>
            <div className={styles.Timeline} >
                <p className={styles.Phase}  style={{background:page===1||page===2||page===3 ?'#1F4490':'#fff',color:page===1||page===2||page===3 ?'#fff':'rgba(14, 14, 15, 0.5)'}} >{page===1||page===2||page===3 ? <>&#x2713;</> :'1'}</p>
                <p className={styles.Phase} style={{background:page===2||page===3 ?'#1F4490':'#fff',color:page===2||page===3 ?'#fff':'rgba(14, 14, 15, 0.5)'}} >{page===2||page===3 ? <>&#x2713;</>:'2'}</p>
                <p className={styles.Phase}  style={{background:page===3 ?'#1F4490':'#fff',color:page===3 ?'#fff':'rgba(14, 14, 15, 0.5)'}} >{page===3 ? <>&#x2713;</>:'3'}</p>
            </div>
         </div>
         {conditionalComponent()}
         <AuthenticationButton onclick={(e)=>handleSubmit(e)} text={ page === 0 || page === 1 ||page === 2  ? "Next" : "Finish" } />

         

         


    </div>
  )
}

export default ProfileSetup