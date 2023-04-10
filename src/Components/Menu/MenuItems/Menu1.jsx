import React from 'react'
import {NavLink} from "react-router-dom";
import s from "./Menu1.module.css"

const Menu1 = () => {
  return (
    <nav className={s.nav}>
    <div className={s.item}>
      <NavLink style={{'--clr':'#ff6493'}} className={ navData => navData.isActive ? s.active : s.a} to='/' data-text='&nbsp;Профиль'>&nbsp;Профиль&nbsp;</NavLink>
    </div>
    <div className={s.item} >
      <NavLink style={{'--clr':'#ffdd1c'}} className={ navData => navData.isActive ? s.active : s.a} to='/exp' data-text='&nbsp;Опыт'>&nbsp;Опыт&nbsp;</NavLink>
    </div>
    <div className={s.item}>
      <NavLink style={{'--clr':'#00dc82'}} className={ navData => navData.isActive ? s.active : s.a} to='/edu' data-text='&nbsp;Образование'>&nbsp;Образование&nbsp;</NavLink>
    </div>
    <div className={s.item}>
      <NavLink style={{'--clr':'#dc00d4'}} className={ navData => navData.isActive ? s.active : s.a} to='/skills' data-text='&nbsp;Скилы'>&nbsp;Скилы&nbsp;</NavLink>
    </div>
  </nav>
   
  
  )
}

export default Menu1