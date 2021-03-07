import React from "react";
import {connect} from "react-redux";
import {compose} from "redux";
import PhotoUpload from "./PhotoUpload";
import {
    openLoadingPhotoActionCreator,
    openPreviewActionCreator,
    savePhotoActionCreator
} from "../../../redux/contest-reducer";
import {withAuthRedirect} from "../../hoc/withAuthRedirect";
import {AppStateType} from "../../../redux/redux-store";

type MapStatePropsType = {
    isLoadingPhoto:boolean
}
type MapDispatchPropsType = {
    openLoadingPhoto: (isLoadingPhoto: boolean) => void
    savePhoto: (Photo:string, LikeCount: number, isToggleLike: boolean) => void
    openPreview: (isPreview: boolean) => void
}
type PropsType = MapStatePropsType & MapDispatchPropsType

class PhotoUploadContainer extends React.Component <PropsType> {

    render () {
        return(
            <div>
                <PhotoUpload isLoadingPhoto={this.props.isLoadingPhoto}
                             openLoadingPhoto={this.props.openLoadingPhoto}
                             savePhoto={this.props.savePhoto}
                             openPreview={this.props.openPreview}/>
            </div>
        )
    }
}

let mapStateToProps = (state: AppStateType): MapStatePropsType => {
    return {
        isLoadingPhoto: state.contest.isLoadingPhoto
    }};

export default compose <React.ComponentType>(
    connect <MapStatePropsType, MapDispatchPropsType, { }, AppStateType> (mapStateToProps, {
        openLoadingPhoto: openLoadingPhotoActionCreator,
        savePhoto: savePhotoActionCreator,
        openPreview: openPreviewActionCreator
    }),
    withAuthRedirect
)(PhotoUploadContainer);