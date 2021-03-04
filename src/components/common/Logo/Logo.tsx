import React from "react";
import s from "./Logo.module.css";
import White_logo from "../../Icons/White_logo.png";


const Logo = () => {
    return (
        <div className={s.block__logo}>
            <img src={White_logo} className={s.logo}/>
            <p>Цикловая конференция 2021</p>
        </div>
    );
}


export default Logo;