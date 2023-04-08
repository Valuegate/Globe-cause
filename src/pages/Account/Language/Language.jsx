import React from 'react'
import styles from './styles.module.css'
import {Link} from 'react-router-dom'
import arrow from '../../../assets/Vectuor.png'
import { useTranslation } from 'react-i18next';

const Language = () => {
    const {t, i18n} = useTranslation();

    const language = [
        {
            langu:'English (US)',
            abb:'en'
        },
        {
            langu:'English (UK)',
            abb:'en (uk)'
        },
        {
            langu:'Mandarin',
            abb:'mn'
        },
        {
            langu:'Hindi',
            abb:'hindi'
        },
        {
            langu:'Spanish',
            abb:'sp'
        },
        {
            langu:'Arabic',
            abb:'ab'
        },
        {
            langu:'Indonesia',
            abb:'id'
        },
        {
            langu:'Germany',
            abb:'gm'
        },
        {
            langu:'Portugese',
            abb:'pg'
        },
        {
            langu:'Korean',
            abb:'kr'
        },
    ];
    
    const handleChange = (e) => {
    const value = e.target.value
    i18n.changeLanguage(value);
    console.log(value)
  }
  
  return (
    <div className={styles.Container}>
        <div className={styles.HeaderContainer} >
            <Link to='/account'>
            <img src={arrow} alt="" />
            </Link>
            <p style={{fontWeight:'700',textAlign:'center',fontSize:'20px'}} >{t('Example.3')} </p>
        </div>
        <div styles={{padding:'2rem'}} >
            <p style={{fontSize:'18px',fontWeight:'600'}} >Suggested</p>
            <form className={styles.Form} action="">
                {
                    language.map((val, i)=>{
                        return(
                        <div className={styles.Label} key={i} >
                            <label for="html">{val.langu}</label>
                            <input onChange={handleChange} value={val.abb} type="radio" id="html" name="fav_language"/>
                        </div>
                        )
                    })
                }
               
               {/* <div className={styles.Label} >
                    <label for="css">English (UK)</label>
                   <input type="radio" id="css" name="fav_language" />
                </div>
                <div className={styles.Label} >
                    <label for="mandarin">Mandarin</label>
                   <input type="radio" onChange={handleChange} value='mn' id="mandarin" name="fav_language" />
                </div> */}
                {/* <hr/>
                <p style={{fontSize:'18px',fontWeight:'600'}} >Languages</p>
                <div className={styles.Label} >
                    <label for="html">Hindi</label>
                    <input type="radio"onChange={handleChange} value='hindi' id="html" name="fav_language"/>
                </div>
                <div className={styles.Label} >
                     <label for="css">Spanish</label>
                   <input type="radio" id="css" name="fav_language" />
                </div>
                <div className={styles.Label} >
                    <label for="javascript">Arabic</label>
                   <input type="radio" id="javascript" name="fav_language" />
                </div>
                <div className={styles.Label} >
                    < label for="html">Indonesia</label>
                 <  input type="radio" id="html" name="fav_language"/>
                </div>
                 <div className={styles.Label} >
                    <label for="css">Germany</label>
                   <input type="radio" id="css" name="fav_language" />
                </div>
                <div className={styles.Label} >
                    <label for="javascript">Portugese</label>
                   <input type="radio" id="javascript" name="fav_language" />
                </div>
                 <div className={styles.Label} >
                    <label for="css">Korean</label>
                   <input type="radio" id="css" name="fav_language" />
                </div> */}
            </form>
        </div>
    </div>
  )
}

export default Language