import React from 'react'
import MenuItemsList from './MenuItems/MenuItemsList'
import  PhotoCard  from './MenuItems/PhotoCard'
import s from "./MenuList.module.css"
import Menu1 from './MenuItems/Menu1'
const MenuList = () => {
  return (
    <div className={s.MenuList}>
        <PhotoCard className={s.PhotoCard}/>
        <Menu1/>
    </div>
  )
}

export default MenuList