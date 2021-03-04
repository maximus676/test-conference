import React from "react";
import s from "./Broadcast.module.css"

type PropsType = {
    src: string
}

const Broadcast: React.FC<PropsType> = (props) => {
    const src = "https://www.youtube.com/embed/" + props.src
    return (
        <div className={s.container}>
           <div className={s.block__video}>
               <iframe className={s.video}  src = {src} frameBorder="0"
                       allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                       allowFullScreen></iframe>
           </div>
            <div className={s.block__dialog}>
                чат
            </div>
        </div>


    );
}


export default Broadcast;