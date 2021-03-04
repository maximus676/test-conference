import React from "react";
import {NavLink} from "react-router-dom";
import s from "./ScheduleIndFirst.module.css";
import Logo from "../../../../common/Logo/Logo";

type PropsType = {
    name: string
}

const ScheduleIndFirst: React.FC<PropsType> = (props) => {
    return (
        <div className={s.container}>
            <Logo />
            <div className={s.block}>
                <h1 className={s.h}>{props.name}, ваша программа на сегодня:</h1>

                <div className={s.block__stage__break}>
                    <div className={s.block__time}>
                        <span className={s.block__time__value}>10.40-11.00</span>
                    </div>
                    <NavLink to={'/schedule/broadcast' + "/cPLYI8DCrLI?start=42"}  className={s.block__break}>
                        <span className={s.block__break__text}>Церемония Открытия 134 человек</span>
                    </NavLink>
                </div>

                <div className={s.block__stage__break}>
                    <div className={s.block__time}>
                        <span className={s.block__time__value}>11.00-11.10</span>
                    </div>
                    <NavLink to={'/schedule/broadcast' + "/6V-z511_Lyw"}  className={s.block__break}>
                        <span className={s.block__break__text}> Приветствие - Владислав, Рауан, Саида</span>
                    </NavLink>
                </div>

                <div className={s.block__stage__break}>
                    <div className={s.block__time}>
                        <span className={s.block__time__value}>10.40-11.00</span>
                    </div>
                    <NavLink to={'/schedule/broadcast' + "/qXAzE3p0t5o"}  className={s.block__break}>
                        <span className={s.block__break__text}> TBC ГОСТЬ Жером Гавэ - тема презентации</span>
                        <span className={s.block__break__text__mini}>(выступление из России с переводчиком)</span>
                    </NavLink>
                </div>

                <div className={s.block__stage__break}>
                    <div className={s.block__time}>
                        <span className={s.block__time__value}>12.10-13.10</span>
                    </div>
                    <NavLink to={'/schedule/broadcast' + "/qXAzE3p0t5o"}  className={s.block__break}>
                        <span className={s.block__break__text}> TBC ГОСТЬ Антуан Мари - тема презентации</span>
                        <span className={s.block__break__text__mini}>(выступление из Парижа с переводчиком)</span>
                    </NavLink>
                </div>

                <div className={s.block__stage__break}>
                    <div className={s.block__time}>
                        <span className={s.block__time__value}>10.40-11.00</span>
                    </div>
                    <NavLink to={'/schedule/broadcast' + "/qXAzE3p0t5o"}  className={s.block__break}>
                        <span className={s.block__break__text}>Олег Негуляев - тема презентации (с переводчиком)</span>
                    </NavLink>
                </div>

                <div className={s.block__stage__break}>
                    <div className={s.block__time}>
                        <span className={s.block__time__value}>15.10-15.40</span>
                    </div>
                    <NavLink to={'/schedule/broadcast' + "/qXAzE3p0t5o"}  className={s.block__break}>
                        <span className={s.block__break__text}>Владислав Барчук, Рауан Хасенов,
                            Саида Аскарова - тема презентации</span>
                    </NavLink>
                </div>

                <div className={s.block__stage__break}>
                    <div className={s.block__time}>
                        <span className={s.block__time__value}>15.40-15.50</span>
                    </div>
                    <NavLink to={'/schedule/broadcast' + "/5p_qj-9LzzU"}  className={s.block__break}>
                        <span className={s.block__break__text}>Кофе-брейк (интерактив)</span>
                    </NavLink>
                </div>

                <div className={s.block__stage__break}>
                    <div className={s.block__time}>
                        <span className={s.block__time__value}>15.50-17.50</span>
                    </div>
                    <NavLink to={'/schedule/broadcast' + "/DZ0sG2WoQ0o"}  className={s.block__break}>
                        <span className={s.block__break__text}>Общее фото</span>
                    </NavLink>
                </div>

                <div className={s.block__stage__break}>
                    <div className={s.block__time}>
                        <span className={s.block__time__value}>10.40-11.00</span>
                    </div>
                    <NavLink to={'/schedule/broadcast' + "/oszpcF0UMw0"}  className={s.block__break}>
                        <span className={s.block__break__text}>Интерактив</span>
                    </NavLink>
                </div>

                <div className={s.block__stage__break}>
                    <div className={s.block__time}>
                        <span className={s.block__time__value}>10.40-11.00</span>
                    </div>
                    <NavLink to={'/schedule/broadcast' + "/qXAzE3p0t5o"}  className={s.block__break}>
                        <span className={s.block__break__text}>Дебриф для рабочей группы и агентства</span>
                    </NavLink>
                </div>
            </div>
        </div>
    );
}


export default ScheduleIndFirst;
