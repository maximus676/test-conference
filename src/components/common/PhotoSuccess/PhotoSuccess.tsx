import React, {useEffect, useState} from "react";
import s from "./PhotoSuccess.module.css";
import qwe from "../../Icons/128.png";


type PropsType = {
    isPreview: boolean
    photos: any

    openPreview: ( isPreview: boolean) => void
}

const PhotoSuccess: React.FC<PropsType>  = (props) => {
    const [preview, setPreview] = useState(qwe)
    useEffect(() => {
        setPreview(props.photos[0])
    }, [props.photos])

    const onExit = () => {
        props.openPreview(false)
    }

    return (

        <div className={props.isPreview ? s.container__open : s.container }>
            <div className={s.container__content}>
                <div className={s.container__photo}>
                    <div className={s.block__photo}>
                        <h3 className={s.h}>Ваша фотография добавлена</h3>
                        <div className={s.block__imgs__img}>
                            <img className={s.img} src={preview}/>
                        </div>
                    </div>
                </div>
                <div className={s.block__upload} >
                    <div className={s.block__exit}>
                        <button className={s.exit} onClick={onExit}>OK</button>
                    </div>
                </div>
            </div>
        </div>
    );
}


export default PhotoSuccess;