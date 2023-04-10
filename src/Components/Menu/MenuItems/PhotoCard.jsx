import React from 'react'
import joshdonaldson from '../../img/joshdonaldson.png'

const PhotoCard = () => {
  return (
    <div>
      <img style={{width: '10em', height: '10em', borderRadius: '5em'}} src={joshdonaldson}></img>
      <div>Имя Фамилия</div>
    </div>
  )
}

export default PhotoCard