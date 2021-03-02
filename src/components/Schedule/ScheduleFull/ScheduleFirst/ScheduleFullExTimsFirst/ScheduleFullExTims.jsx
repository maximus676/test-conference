import React from "react";
import s from "./ScheduleFullExTimsFirst.module.css";
import {NavLink} from "react-router-dom";
import Logo from "../../../../common/Logo/Logo";
import Teams from "../auxiliary components/Teams";


const ScheduleFullExTimsFirst = (props) => {
    return (
        <div className={s.container}>
            <Logo />
            <div className={s.block}>
                <h1 className={s.h}>Андрей, сегодня вы можете принять участие в любой инересующей вас сессии</h1>
                <div className={s.block__stage}>
                    <div className={s.block__time__2}>
                        <span className={s.block__time__value}>9.00-9.40</span>
                    </div>
                    <div className={s.block__events}>
                        <div className={s.event}>
                            <p className={s.event__inf__1}>АГ ВИЗИТ (ТРИПЛИКСАМ / ПРЕСТАНС / ЛИПЕРТАНС / ПРЕСТАРИУМ)</p>
                        </div>
                        <div className={s.event}>
                            <p className={s.event__inf__1}>АГ ВИЗИТ (ПРЕСТИЛОЛ / НОЛИПРЕЛ / АРИФАМ)</p>
                        </div>
                    </div>
                </div>

                <div className={s.block__stage}>
                    <div className={s.block__time}>
                        <span className={s.block__time__value}>9.40-10.40</span>
                    </div>
                    <NavLink to="/schedule/first" className={s.block__teams}>
                        <span className={s.block__teams__text}>Рабочие сессии в MS Teams</span>
                    </NavLink>
                </div>

                <div className={s.block__stage__break}>
                    <div className={s.block__time__2}>
                        <span className={s.block__time__value}>10.40-11.00</span>
                    </div>
                    <div className={s.block__break}>
                        <span className={s.block__break__text}>Кофе Брейк</span>
                    </div>
                </div>

                <div className={s.block__stage__break}>
                    <div className={s.block__time__2}>
                        <span className={s.block__time__value}>11.00-11.10</span>
                    </div>
                    <div className={s.block__break}>
                        <span className={s.block__break__text}>Зумба</span>
                    </div>
                </div>

                <div className={s.block__stage}>
                    <div className={s.block__time}>
                        <span className={s.block__time__value}>11.10-12.10</span>
                    </div>
                    <NavLink to="/schedule/first" className={s.block__teams}>
                        <span className={s.block__teams__text}>Рабочие сессии в MS Teams</span>
                    </NavLink>
                </div>

                <div className={s.block__stage__break}>
                    <div className={s.block__time__2}>
                        <span className={s.block__time__value}>12.10-13.10</span>
                    </div>
                    <div className={s.block__break}>
                        <span className={s.block__break__text}>Обед</span>
                    </div>
                </div>


                <div className={s.block__stage}>
                    <div className={s.block__time__2}>
                        <span className={s.block__time__value}>13.10-13.50</span>
                    </div>


                    <div className={s.block__events__2}>
                        <div className={s.block__event__1}>
                                <h3 className={s.event__h3__text}>ДЕТРАЛЕКС</h3>
                        </div>
                        <div className={s.block__event__1}>
                                <h3 className={s.event__h3__text}>ДИАБЕТОН</h3>
                        </div>
                    </div>
                </div>


                <div className={s.block__stage}>
                    <div className={s.block__time}>
                        <span className={s.block__time__value}>13.50-15.10</span>
                    </div>
                    <NavLink to="/schedule/first" className={s.block__teams}>
                        <span className={s.block__teams__text}>Рабочие сессии в MS Teams</span>
                    </NavLink>
                </div>

                <div className={s.block__stage__break}>
                    <div className={s.block__time__2}>
                        <span className={s.block__time__value}>15.10-15.40</span>
                    </div>
                    <div className={s.block__break}>
                        <span className={s.block__break__text}>Кофе Брейк</span>
                    </div>
                </div>

                <div className={s.block__stage__break}>
                    <div className={s.block__time__2}>
                        <span className={s.block__time__value}>15.40-15.50</span>
                    </div>
                    <div className={s.block__break}>
                        <span className={s.block__break__text}>Зумба</span>
                    </div>
                </div>

                <div className={s.block__stage__break}>
                    <div className={s.block__time__2}>
                        <span className={s.block__time__value}>15.50-17.50</span>
                    </div>
                    <div className={s.block__break}>
                        <span className={s.block__break__text}>Тимбилдинг</span>
                    </div>
                </div>

                <div className={s.block__stage}>
                    <div className={s.block__time}>
                        <span className={s.block__time__value}>17.50-18.05</span>
                    </div>
                    <NavLink to="/schedule/first" className={s.block__teams}>
                        <span className={s.block__teams__text}>Рабочие сессии в MS Teams</span>
                    </NavLink>
                </div>
            </div>
        </div>
    );
}


export default ScheduleFullExTimsFirst;
