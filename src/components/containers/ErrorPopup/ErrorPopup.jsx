import React from 'react'
import styles from "./styles.module.css";


const ErrorPopup = ({message='Error',color='tomato'}) => {
    const [show, setShow] = React.useState(false)
  return (
    <div className={styles.Container} style={{background:color,display: show?'none':'flex'}} >
        <div className={styles.Important} >
            <p style={{color:'tomato',fontWeight:'600',fontSize:'1.5rem'}} >!</p>
        </div>
        <p >{message}</p>
        <div>
            <p onClick={()=>setShow(true)} style={{fontWeight:'300',fontFamily:'monospace',}} >X</p>
        </div>
    </div>
  )
}

export default ErrorPopup