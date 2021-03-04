import React from "react";
import s from "./Schedule.module.css";
import {NavLink} from "react-router-dom";
import Logo from "../common/Logo/Logo";


const Schedule = () => {
    return (
        <div className={s.container}>
            <Logo/>
            <div className={s.block}>
                <div className={s.block__buttons}>
                    <NavLink to="/schedule/first" className={s.block__nav}>
                        <div className={s.nav__item}>
                            <p className={s.nav__item__p}>10 марта</p>
                        </div>
                    </NavLink>
                    <NavLink to="/schedule/first" className={s.block__nav}>
                        <div className={s.nav__item}>
                            <p className={s.nav__item__p}>11 марта</p>
                        </div>
                    </NavLink>
                    <NavLink to="/schedule/first" className={s.block__nav}>
                        <div className={s.nav__item}>
                            <p className={s.nav__item__p}>12 марта</p>
                        </div>
                    </NavLink>
                </div>
            </div>
        </div>
    );
}


export default Schedule;