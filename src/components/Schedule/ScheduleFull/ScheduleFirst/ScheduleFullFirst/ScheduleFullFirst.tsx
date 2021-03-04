import React from "react";
import s from "./ScheduleFullFirst.module.css";
import {NavLink} from "react-router-dom";
import Logo from "../../../../common/Logo/Logo";
import Teams from "../auxiliary components/Teams";

type PropsType = {
    name: string
}

const ScheduleFullFirst: React.FC<PropsType> = (props) => {
    return (
        <div className={s.container}>
            <Logo />
            <div className={s.block}>
                <h1 className={s.h}>{props.name}, сегодня вы можете принять участие в любой инересующей вас сессии</h1>
                <div className={s.block__stage}>
                    <div className={s.block__time__2}>
                        <span className={s.block__time__value}>9.00-9.40</span>
                    </div>
                    <div className={s.block__events}>
                        <NavLink to={'/schedule/broadcast' + "/mlyr884BsHw"} className={s.event}>
                            <p className={s.event__inf__1}>АГ ВИЗИТ (ТРИПЛИКСАМ / ПРЕСТАНС / ЛИПЕРТАНС / ПРЕСТАРИУМ)</p>
                            <p className={s.event__speaker__1}>Спикеры: Умарова С., Картабаева А.</p>
                        </NavLink>
                        <NavLink to={'/schedule/broadcast' + "/7LMl42rM3Nw"} className={s.event}>
                            <p className={s.event__inf__2}>АГ ВИЗИТ (ТРИПЛИКСАМ / ПРЕСТАНС / ЛИПЕРТАНС / ПРЕСТАРИУМ)</p>
                        </NavLink>
                        <NavLink to={'/schedule/broadcast' + "/7LMl42rM3Nw"} className={s.event}>
                            <p className={s.event__inf__2}>АГ ВИЗИТ (НОЛИПРЕЛ / ПРЕСТАНС / ПРЕСТАРИУМ)</p>
                        </NavLink>
                        <NavLink to={'/schedule/broadcast' + "/mlyr884BsHw"} className={s.event}>
                            <p className={s.event__inf__1}>АГ ВИЗИТ (ПРЕСТИЛОЛ / НОЛИПРЕЛ / АРИФАМ)</p>
                            <p className={s.event__speaker__1}>Спикеры: Бисекен А., Хамзина З.</p>
                        </NavLink>
                        <NavLink to={'/schedule/broadcast' + "/7LMl42rM3Nw"} className={s.event}>
                            <p className={s.event__inf__2}>Престилол, Липертанс, Предуктал ОД</p>
                            <p className={s.event__speaker__2}>Спикеры: Сейдалиев Е., Межинская Ю</p>
                        </NavLink>
                    </div>
                </div>


                <div className={s.block__stage}>
                    <div className={s.block__time}>
                        <span className={s.block__time__value}>9.40-10.40</span>
                    </div>
                    <div className={s.block__events__teams}>
                       <Teams />
                    </div>
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
                    <NavLink to={'/schedule/broadcast' + "/Bv245eKS15o"}   className={s.block__break}>
                        <span className={s.block__break__text}>Зумба</span>
                    </NavLink>
                </div>

                <div className={s.block__stage}>
                    <div className={s.block__time}>
                        <span className={s.block__time__value}>11.10-12.10</span>
                    </div>
                    <div className={s.block__events__teams}>
                        <Teams />
                    </div>
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
                        <NavLink to={'/schedule/broadcast' + "/mlyr884BsHw"} className={s.block__event__1}>
                            <div className={s.event__h__p}>
                                <h3 className={s.event__h3__text}>ДЕТРАЛЕКС</h3>
                                <p className={s.event__p__text}><b>Спикеры:</b> Дёмичева Н., Кайыпова И., Сейдалиев Е.</p>
                            </div>
                        </NavLink>

                        <NavLink to={'/schedule/broadcast' + "/7LMl42rM3Nw"} className={s.block__event__2}>
                            <div className={s.event__h__p}>
                                <h3 className={s.event__h3__text}>ДЕТРАЛЕКС</h3>
                                <p className={s.event__p__text}><b>Спикеры:</b> Филиппова Е., Максудова Г.</p>
                            </div>
                        </NavLink>

                        <NavLink to={'/schedule/broadcast' + "/mlyr884BsHw"} className={s.block__event__1}>
                            <div className={s.event__h__p}>
                                <h3 className={s.event__h3__text}>ДИАБЕТОН</h3>
                                <p className={s.event__p__text}><b>Спикеры:</b> Межинская Ю., Сатарханов У.</p>
                            </div>
                        </NavLink>
                    </div>
                </div>

                <div className={s.block__stage}>
                    <div className={s.block__time}>
                        <span className={s.block__time__value}>13.50-15.10</span>
                    </div>
                    <div className={s.block__events__teams}>
                        <Teams />
                    </div>
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
                    <NavLink to={'/schedule/broadcast' + "/Bv245eKS15o"}  className={s.block__break}>
                        <span className={s.block__break__text}>Зумба</span>
                    </NavLink>
                </div>

                <div className={s.block__stage__break}>
                    <div className={s.block__time__2}>
                        <span className={s.block__time__value}>15.50-17.50</span>
                    </div>
                    <NavLink to={'/schedule/broadcast' + "/mlyr884BsHw"}  className={s.block__break}>
                        <span className={s.block__break__text}>Тимбилдинг</span>
                    </NavLink>
                </div>
            </div>
        </div>
    );
}


export default ScheduleFullFirst;
