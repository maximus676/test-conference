import React from "react";
import s from "./Contest.module.css";
import Logo from "../common/Logo/Logo";
import left from "../Icons/left.png";
import right from "../Icons/right.png";

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


                <div className={s.container__carousel}>
                    <div className={s.block__button}>
                        <img className={s.block__button__scrolling} src={left}/>
                    </div>


                    <div className={s.block__carousel}>
                        карусель
                    </div>



                    <div className={s.block__button}>
                        <img className={s.block__button__scrolling} src={right}/>
                    </div>
                </div>


                <div className={s.block__loading}>
                    <button className={s.loading}>Загрузить фото</button>
                </div>
            </div>
        </div>
    );
}


export default Contest;