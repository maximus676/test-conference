import React from "react";
import s from "./Photo.module.css";
import qwe from "../../Icons/128.png";
import Like__off from "../../Icons/Like__off.svg";
import Like from "../../Icons/Like.svg";

const Photo = (props) => {
    return (
        <div className={s.block__imgs__img}>
            <img className={s.img} src={props.src ? props.src : qwe}/>
            <div className={s.block__likes}>
                <span className={s.count__like}>300</span>
                <img className={s.like__off} src={Like__off}/>
                {/*<img className={s.like} src={Like}/>*/}
            </div>
        </div>
    );
}


export default Photo;