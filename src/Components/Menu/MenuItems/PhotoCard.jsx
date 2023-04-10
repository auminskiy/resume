import React from 'react'
import joshdonaldson from '../../img/joshdonaldson.png'
import s from "./PhotoCard.module.css"
const PhotoCard = () => {
  return (
    <div className={s.PhotoCard}>
      <div className={s.divBox}>
      <img className={s.img} src={joshdonaldson}></img>
      </div>
      <div className={s.divBox}>
       <h2>Имя Фамилия</h2> 
        </div>
    </div>
    
  )
}

export default PhotoCard