import React from 'react'
import styles from './styles.module.css'
import pat1 from '../../../assets/Dese.png'
import pat2 from '../../../assets/faju.png'
import pat3 from '../../../assets/Log.png'
import pat4 from '../../../assets/T4E Transpt.png'
import { useTranslation } from 'react-i18next';

const images = [pat1,pat2,pat3,pat4];


const Patners = () => {
       const {t} = useTranslation();
  return (
    <div>
        <p className={styles.Heading} >{t('Example.1')}</p>
        <div className={styles.FlexContainer} >
            {
                images.map((img,i)=>{
                    return(
                        <img src={img} key={i} alt="" />
                    )
                })
            }
        </div>
    </div>
  )
}

export default Patners