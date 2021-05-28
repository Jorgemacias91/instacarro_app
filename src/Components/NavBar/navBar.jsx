import React from "react";
import style from "./navbar.module.css";
import logo from "../../Images/logo.png";
import phone from "../../Images/phone.png";
import user from "../../Images/user.png";
import caret from "../../Images/caret.png";

export default function NavBar() {
    return (
        //estrutura para nabvar
        <nav className={style.navbar}>
            <div className={style.logo}>
                <img className={style.imageLogo} src={logo} alt="instacarro_Logo" />
            </div>
            <div className={style.phone}>
               <img className={style.image} src={phone} alt="icono_telefono" /> 
                <p>(11) 3569 - 3465</p>
            </div>
            <div className={style.user}>
                <div className={style.userTest}>
                    <img
                        className={style.image}
                        src={user}
                        alt="imagen_usuario"
                    />
                    <p>User Test</p>
                </div>

                <img className={style.imageCaret} src={caret} alt="caret" />
            </div>
        </nav>
    );
}