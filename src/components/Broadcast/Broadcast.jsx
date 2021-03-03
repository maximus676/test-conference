import React from "react";
import s from "./Broadcast.module.css"


const Broadcast = (props) => {
    return (
        <div className={s.container}>
           <div className={s.block__video}>
               видио
           </div>
            <div className={s.block__dialog}>
                чат
            </div>
        </div>


    );
}


export default Broadcast;