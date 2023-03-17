import React from 'react'
import styles from './styles.module.css'


const ToggleButton = () => {
    const [active, setActive] = React.useState(false);

    const handleClick =()=>{
        setActive(!active)
    }

  return (
    <div onClick={handleClick} className={active? styles.ContainerActive : styles.Container} >
        <div className={active ? styles.ButtonActive : styles.Button } ></div>
    </div>
  )
}

export default ToggleButton