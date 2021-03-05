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





const Contest = (props) => {
    const carouselRef = useRef(null)
    const [colPos, setColPos] = useState([])
    const [rowPos, setRowPos] = useState(0)

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
    /*const testF = () => {
        console.log("start")
        let c = 0
        let r = 0
        props.photos.map(element => {
            c++
            if (c <= 4) {
                console.log("+++")
            }else {
                console.log("---")
                c = 0
                r++
            }
        })
    }*/
    let allF = []
    let allG = []

    const testF = () => {
        console.log("start")
        allF = props.photos.map(element => <Photo src={element} />)
        for (let i = 0; i< Math.ceil(allF.length/4); i++) {
            allG[i] = allF.slice((i*4), (i*4) + 4)
        }
    }

    return (
        <div className={s.container}>
            <PhotoSuccessContainer />
            <PhotoUploadContainer />
            <ShowPhoto />
            <Logo/>
            <div className={s.block__content}>
                <h1 className={s.h}>Фотоконкурс</h1>
                <div className={s.text} onClick={() => {
                    console.log("test", allG)}}>
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
                            {/*{testF()}*/}
                            {allF.map(el => (
                                <div className={s.block__imgs}>
                                    {el}
                                </div>
                            ))}
                            {/*<div className={s.container__img}>

                                <div className={s.block__imgs}>
                                    <Photo src={qwerty}/>

                                    <Photo />

                                    <Photo />

                                    <Photo />
                                </div>
                                <div className={s.block__imgs}>
                                    <Photo />

                                    <Photo />

                                    <Photo />

                                    <Photo />

                                </div>
                            </div>*/}
                            <div className={s.container__img}>
                                <div className={s.block__imgs}>
                                    <div className={s.block__imgs__img}>
                                        <img className={s.img} src={qwe}/>
                                    </div>
                                    <div className={s.block__imgs__img}>
                                        <img className={s.img} src={qwe}/>
                                    </div>
                                    <div className={s.block__imgs__img}>
                                        <img className={s.img} src={qwerty}/>
                                    </div>

                                    <Photo />
                                </div>
                            </div>
                            <div className={s.container__img}>
                                <h3 className={s.block__carousel}>3</h3>
                            </div>
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