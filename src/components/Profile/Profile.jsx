import React from "react";
import s from "./Profile.module.css";
import Logo from "../common/Logo/Logo";

const Profile = (props) => {
    return (
        <div className={s.container}>
            <Logo/>
            <div className={s.block__text}>
                <h1 className={s.h}>Рады Вас видеть {props.name}!</h1>
                <div className={s.text}>
                    <p>С нашей последней встречи прошло немало времени.
                        Как много
                        было сделано! Как много нового мы успели внедрить в нашу
                        работу, несмотря на изменения вокруг! И, как здорово, что у нас есть возможность встретиться и
                        провести нашу конференцию
                        в онлайн формате 10-12 марта 2021!
                    </p>
                    <p> Все изменения
                        делают нас лучше, они учат нас новому, повышают наш уровень
                        знаний и профессионализм!
                        Все вместе мы будем продолжать двигаться к достижению нашей
                        общей цели и гордиться тем, что мы являемся частью большой семьи Servier.</p>
                </div>
            </div>
        </div>
    );
}


export default Profile;