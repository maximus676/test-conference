import React from "react";
import s from "./ShowPhoto.module.css";
import qwe from "../../Icons/128.png";
import qwerty from "../../Icons/Снимок20.PNG";


const ShowPhoto = (props) => {
    return (
        <div className={s   /*.block__imgs__img */ .block__imgs__img__none} >
            <img className={s.photo} src={qwerty}/>
            <div className={s.background}></div>
        </div>
    );
}


export default ShowPhoto;