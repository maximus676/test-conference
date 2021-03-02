import React from "react";
import s from "./Contest.module.css";
import Logo from "../common/Logo/Logo";

const Contest = (props) => {
    return (
        <div className={s.container}>
            <Logo/>
            <div className={s.block__content}>
                <h1 className={s.h}>Фотоконкурс</h1>
                <div className={s.text}>
                    <p>В этот раз мы встречаемся в новом формате. Мы находимся в
                        разных городах и странах и даже в разных часовых поясах. Но мы не
                        воспринимаем обстоятельства как преграду, мы воспринимаем их
                        как новые возможности!</p>
                </div>
            </div>
        </div>
    );
}


export default Contest;