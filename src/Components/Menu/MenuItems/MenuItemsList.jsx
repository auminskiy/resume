import React from 'react'
import {NavLink} from "react-router-dom";
import s from "./MenuItemsList.module.css"

const MenuItemsList = () => {
  return (
    <nav className={s.nav}>
    <div className={`${s.item} ${s.active}`}>
      <NavLink className={ navData => navData.isActive ? s.active : s.a} to='/'>Профиль</NavLink>
    </div>
    <div className={s.item}>
      <NavLink className={ navData => navData.isActive ? s.active : s.a} to='/exp'>Опыт</NavLink>
    </div>
    <div className={s.item}>
      <NavLink className={ navData => navData.isActive ? s.active : s.a} to='/edu'>Образование</NavLink>
    </div>
    <div className={s.item}>
      <NavLink className={ navData => navData.isActive ? s.active : s.a} to='/skills'>Скилы</NavLink>
    </div>
  </nav>
  
  )
}

export default MenuItemsList