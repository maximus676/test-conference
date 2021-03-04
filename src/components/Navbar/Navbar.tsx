import React from "react";
import s from "./Navbar.module.css";
import {NavLink} from "react-router-dom";


const Navbar: React.FC = () => {
    return (
        <nav className={s.nav}>
            <div className={s.nav__container}>
                <div className={s.nav__item}>
                    <NavLink to="/profile" activeClassName={s.active}>Главная</NavLink>
                </div>
                <div className={s.nav__item}>
                    <NavLink to="/schedule" activeClassName={s.active}>Расписание</NavLink>
                </div>
                <div className={s.nav__item}>
                    <NavLink to="/contest" activeClassName={s.active}>Фотоконкурс</NavLink>
                </div>
            </div>
        </nav>
    );
}


export default Navbar;
