import React from "react";
import s from "./ShowPhoto.module.css";
import qwe from "../../Icons/128.png";
import qwerty from "../../Icons/Снимок20.PNG";


const ShowPhoto = (props) => {

    const ExitPhoto = () => {
        props.activePhoto(false, 0)
    }

    return (
        <div className={ props.isShowPhoto ?  s.block__imgs__img : s.block__imgs__img__none}  onClick={ExitPhoto}>
            <img className={s.photo} src={props.bigPhoto ? props.bigPhoto : qwerty}/>
            <div className={s.background}></div>
        </div>
    );
}


export default ShowPhoto;