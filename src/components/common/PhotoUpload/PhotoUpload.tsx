import React, {useState} from "react";
import s from "./PhotoUpload.module.css";
import Blue_logo from "../../Icons/Blue_logo 1.png";
import exit from "../../Icons/exit.png";
import minus from "../../Icons/minus.png"
import arrow from "../../Icons/arrow.png"
import {Button, Upload} from "antd";
import {UploadOutlined} from "@ant-design/icons";
import {AsyncLocalStorage} from "async_hooks";


type PropsType = {
    isLoadingPhoto: boolean


    openLoadingPhoto:(isLoadingPhoto:boolean) => void
    savePhoto:( [] ) => void
    openPreview:(isPreview: boolean) => void
}

const PhotoUpload: React.FC<PropsType>  = (props) => {
    const onMainPhotoSelected = (e:any) => {
        if (e.target.files[0]) {
            const reader = new FileReader();

            reader.onload = function(event: any) {

                // @ts-ignore
                props.savePhoto(event.target.result, 0 , false);
            }

            reader.readAsDataURL(e.target.files[0]);
        }
        onExit()
        props.openPreview(true)
    }

    const onExit = () => {
        props.openLoadingPhoto(false)
   }

    return (
        <div className={props.isLoadingPhoto ? s.container__open : s.container }>
            <div className={s.container__content}>
                <div className={s.block__exit}>
                    <img className={s.exit} src={exit} onClick={onExit}/>
                </div>
                <div className={s.block__logo}>
                    <img className={s.logo} src={Blue_logo}/>
                </div>
                <div className={s.block__upload} >
                    <input type={"file"} className={s.inputfile} name={"file"} onChange={onMainPhotoSelected} id={"file"} data-multiple-capttion="{count}" multiple/>
                    <label className={s.block__img} htmlFor={"file"}>
                        <img className={s.inputfile__arrow} src={arrow}/>
                    </label>
                </div>
            </div>
        </div>
    );
}


export default PhotoUpload;