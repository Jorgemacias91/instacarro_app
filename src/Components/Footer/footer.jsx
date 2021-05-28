import React from 'react';
import style from './footer.module.css'
import logo from '../../Images/logo.png'


export default function Footer(){

    return (
                <div className={style.logo}>
                    <img src={logo}/>
                </div>
    )
}