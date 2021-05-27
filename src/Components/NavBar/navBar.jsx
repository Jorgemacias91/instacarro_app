import React from 'react';
import style from './navbar.module.css'
import logo from '../../Images/logo.png'
import phone from '../../Images/phone.png'
import user from '../../Images/user.png'
import caret from '../../Images/caret.png'

export default function NavBar(){

    return (
       
            <nav className={style.navbar}>
                <div className={style.logo}>
                    <img src={logo}/>
                </div>
                <div className={style.phone}>
                    <img className={style.image} src={phone}/>
                    <p>(11) 3569 - 3465</p>
                </div>
                <div className={style.user}>
                    <div className={style.userTest}>
                    <img className={style.image} src={user}/>
                    <p>User Test</p>
                    </div>
                    
                    <img className={style.imageCaret} src={caret}/>
                </div>
            </nav>

      
       
    )
}