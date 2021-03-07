import React from "react";
import s from "./ShowPhoto.module.css";

type PropsType = {
    isShowPhoto: boolean
    bigPhoto: string

    activePhoto: (isShowPhoto: boolean, id: number) => void
}

const ShowPhoto: React.FC<PropsType>  = (props) => {

    const ExitPhoto = () => {
        props.activePhoto(false, 0)
    }

    return (
        <div className={ props.isShowPhoto ?  s.block__imgs__img : s.block__imgs__img__none}  onClick={ExitPhoto}>
            <img className={s.photo} src={props.bigPhoto}/>
            <div className={s.background}></div>
        </div>
    );
}


export default ShowPhoto;