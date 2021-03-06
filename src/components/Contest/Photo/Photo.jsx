import React from "react";
import s from "./Photo.module.css";
import qwe from "../../Icons/128.png";
import Like__off from "../../Icons/Like__off.svg";
import Like from "../../Icons/Like.svg";




const Photo = (props) => {

    const PressLike = () => {
        props.activeLink(true, props.id, props.LikeCount)
    }
    const ShowPhoto= () => {
        props.activePhoto(true, props.id )
    }

    return (
        <div className={s.block__imgs__img} >
            <img className={s.img} src={props.src ? props.src : qwe} onClick={ShowPhoto} />
            <div className={s.block__likes} onClick={PressLike}>
                <span className={s.count__like}>{props.LikeCount}</span>
                {props.isToggleLike ? <img className={s.like} src={Like}/> : <img className={s.like__off} src={Like__off}/>}
            </div>
        </div>
    );
}

export default Photo;