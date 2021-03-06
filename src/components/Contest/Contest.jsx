import React, {useRef, useState} from "react";
import s from "./Contest.module.css";
import Logo from "../common/Logo/Logo";
import left from "../Icons/left.png";
import right from "../Icons/right.png";
import qwe from "../Icons/128.png";
import qwerty from "../Icons/Снимок20.PNG";
import Like__off from "../Icons/Like__off.svg";
import Like from "../Icons/Like.svg";
import exit from "../Icons/exit.png";
import { Carousel, Upload, message, Button  } from 'antd';
import { UploadOutlined } from '@ant-design/icons';
import PhotoUploadContainer from "../common/PhotoUpload/PhotoUploadContainer";
import Photo from "./Photo/Photo";
import ShowPhoto from "./ShowPhoto/ShowPhoto";
import PhotoSuccessContainer from "../common/PhotoSuccess/PhotoSuccessContainer";
import PhotoContainer from "./Photo/PhotoContainer";
import ShowPhotoContainer from "./ShowPhoto/ShowPhotoContainer";





const Contest = (props) => {

    console.log(props.photos +  "!!!!!!!!")

    const carouselRef = useRef(null)

    const onRightClick = () => {
        carouselRef.current.next()
    }

    const onLeftClick = () => {
        carouselRef.current.prev()
    }

    const onChange = (a, b, c) => {

    }
    const onLoading = () => {
        props.openLoadingPhoto(true)
    }


    let photoWall = []

    const createPhotoWall = () => {
        const allElements = props.photos.map((element, index ) =>  <PhotoContainer id={index} src={element.Photo} isToggleLike={element.isToggleLike} LikeCount={element.LikeCount} />)
        for (let i = 0; i< Math.ceil(allElements.length/8); i++) {
            photoWall[i] =
                <div className={s.container__img}>
                    <div className={s.block__imgs}>
                        {allElements.slice((i * 8), (i * 8) + 8)}
                    </div>
                </div>
        }
    }

    return (
        <div className={s.container}>
            <PhotoSuccessContainer />
            <PhotoUploadContainer />
            <ShowPhotoContainer />
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
                        <img className={s.block__button__scrolling} src={left} onClick={onLeftClick} />
                    </div>

                    <div className={s.block__carousel}>
                        <Carousel afterChange={onChange} ref={carouselRef} dots={false}>
                            {createPhotoWall()}
                            {photoWall.map(element => (
                                <div className={s.container__img}>
                                    {element}
                                    </div>
                            ))}
                        </Carousel>

                    </div>
                    <div className={s.block__button__r}>
                        <img className={s.block__button__scrolling} src={right} onClick={onRightClick}/>
                    </div>

                </div>


                <div className={s.block__loading}>
                    <button className={s.loading} onClick={onLoading}>Загрузить фото</button>
                </div>
            </div>
        </div>
    );
}


export default Contest;