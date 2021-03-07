import React from "react";
import {connect} from "react-redux";
import {compose} from "redux";
import Photo from "./Photo";
import {
    activeLinkActionCreator, activePhotoActionCreator,
} from "../../../redux/contest-reducer";
import {withAuthRedirect} from "../../hoc/withAuthRedirect";
import {AppStateType} from "../../../redux/redux-store";


type MapDispatchPropsType = {
    activeLink: (isToggleLike: boolean, id: number, LikeCount: number) => void
    activePhoto: (isShowPhoto: boolean, id: number) => void
}
type OwnPropsType = {     // пропсы на прямую
    src: string
    isToggleLike: boolean
    LikeCount: number
    id: number
}
type PropsType = MapDispatchPropsType & OwnPropsType

class PhotoContainer extends React.Component <PropsType> {

    render () {
        return(
            <div>
                <Photo activeLink={this.props.activeLink}
                       src={this.props.src}
                       isToggleLike={this.props.isToggleLike}
                       LikeCount={this.props.LikeCount}
                       activePhoto={this.props.activePhoto}
                       id={this.props.id}

                />
            </div>
        )
    }
}

let mapStateToProps = () => {
    return {

    }};

export default compose <React.ComponentType> (
    connect <{ }, MapDispatchPropsType, OwnPropsType, AppStateType> (mapStateToProps, {
        activeLink: activeLinkActionCreator,
        activePhoto: activePhotoActionCreator
    }),
    withAuthRedirect
)(PhotoContainer);