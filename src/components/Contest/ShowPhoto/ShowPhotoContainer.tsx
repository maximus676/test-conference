import React from "react";
import {connect} from "react-redux";
import {compose} from "redux";
import {
    activePhotoActionCreator
} from "../../../redux/contest-reducer";
import {withAuthRedirect} from "../../hoc/withAuthRedirect";
import ShowPhoto from "./ShowPhoto";
import s from "./ShowPhoto.module.css";
import {AppStateType} from "../../../redux/redux-store";

type MapStatePropsType = {
    isShowPhoto: boolean
    bigPhoto: string
}
type MapDispatchPropsType = {
    activePhoto: (isShowPhoto: boolean, id: number) => void
}

type PropsType = MapStatePropsType & MapDispatchPropsType

class ShowPhotoContainer extends React.Component <PropsType> {

    render () {
        return(
            <div className={s.container}>
                <ShowPhoto isShowPhoto={this.props.isShowPhoto}
                           bigPhoto={this.props.bigPhoto}
                           activePhoto={this.props.activePhoto}
                />
            </div>
        )
    }
}

let mapStateToProps = (state: AppStateType) => {
    return {
        isShowPhoto: state.contest.isShowPhoto,
        bigPhoto: state.contest.bigPhoto
    }};

export default compose <React.ComponentType>(
    connect <MapStatePropsType, MapDispatchPropsType, { }, AppStateType> (mapStateToProps, {
        activePhoto: activePhotoActionCreator
    }),
    withAuthRedirect
)(ShowPhotoContainer);